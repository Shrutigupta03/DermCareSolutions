import os
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS, cross_origin
import tensorflow as tf
import numpy as np
import cv2
app = Flask(__name__)
cors = CORS(app)

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


if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)