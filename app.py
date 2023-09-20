import os
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS, cross_origin
import tensorflow as tf
import numpy as np
import cv2
app = Flask(__name__, template_folder="templates")
cors = CORS(app)

UPLOAD_FOLDER = "images" 
model = tf.keras.models.load_model("model/SkinCancer.h5")
class_names = ["Actinic keratoses and intraepithelial carcinomae", "basal cell carcinoma", "benign keratosis-like lesions", "dermatofibroma", "melanocytic nevi", "pyogenic granulomas and hemorrhage","melanoma"]

def predict_skin_disease(image_path, model):
    class_names = ["Actinic keratoses and intraepithelial carcinomae", "basal cell carcinoma", "benign keratosis-like lesions", "dermatofibroma", "melanocytic nevi", "pyogenic granulomas and hemorrhage","melanoma"]

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

@app.route("/image", methods=["GET", "POST"])
def upload_predict():
    if request.method == "POST":
        data = request.json
        image_file = request.files["image"]
        if image_file:
            image_location = os.path.join(
                UPLOAD_FOLDER,
                image_file.filename
            )
            image_file.save(image_location)
            pred = predict_skin_disease(image_location, model)
            return render_template('index.html', prediction=pred)
    return render_template('index.html', prediction=0)

if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)