import os
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS, cross_origin
import tensorflow as tf
import numpy as np
import cv2
import jwt
import datetime
from functools import wraps

app = Flask(__name__)
cors = CORS(app)

from pyngrok import ngrok

UPLOAD_FOLDER = "images" 
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}


app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

model = tf.keras.models.load_model("model/SkinCancer.h5")
class_names = ["Actinic keratoses and intraepithelial carcinomae", "basal cell carcinoma", "benign keratosis-like lesions", "dermatofibroma", "melanocytic nevi", "pyogenic granulomas and hemorrhage","melanoma"]

def predict_skin_disease(image_path, model):
    class_names = ["Actinic keratoses and intraepithelial carcinomae", "Basal Cell Carcinoma", "Benign Keratosis-like Lesions", "Dermatofibroma", "Melanocytic Nevi", "Pyogenic Granulomas and Hemorrhage","Melanoma"]

    # Load and preprocess image
    original_image = cv2.imread(image_path)

    resized_image = cv2.resize(original_image, (28, 28))
    batch_size = 4
    batch_of_images = np.array([resized_image] * batch_size)

    # Make prediction on preprocessed image
    pred = model.predict(batch_of_images)
    predicted_class = np.argmax(pred, axis=1)
    predicted_class_number = predicted_class[0]
    predicted_class_name = class_names[predicted_class_number]

    return predicted_class_name



@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify('No file part'), 400

    file = request.files['image']

    if file.filename == '':
        return jsonify('No selected file'), 400

    if file and allowed_file(file.filename):
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)
        pred = predict_skin_disease(filename, model)
        return jsonify(message=pred)

    return jsonify('File type not allowed'), 400


app.config['SECRET_KEY'] = 'your-secret-key'  # Replace with a secure secret key

# Replace this with your actual database or storage logic
users = []

# Function to generate a JWT token
def generate_token(email):
    payload = {
        'email': email,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)  # Token expires in 1 hour (adjust as needed)
    }
    token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
    return token

# Middleware function to verify JWT token
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')

        if not token:
            return jsonify({'error': 'Token is missing'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = [user for user in users if user['email'] == data['email']][0]
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401

        return f(current_user, *args, **kwargs)

    return decorated

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400

    # Check if the email is already registered
    for user in users:
        if user['email'] == email:
            return jsonify({'error': 'Email is already registered'}), 400

    new_user = {
        'username': username,
        'email': email,
        'password': password
    }

    users.append(new_user)

    token = generate_token(email)

    return jsonify({'username': username,'token': token, 'email':email}), 201



if __name__ == "__main__":
    public_url = ngrok.connect(5000).public_url
    print(f"ngrok tunnel \'{public_url}\' -> \'http://127.0.0.1:{5000}\'")

    app.run(port=5000, host="0.0.0.0", debug=True)
