import os
from flask import Flask, request, render_template
import tensorflow as tf
import numpy as np
import cv2

app = Flask(__name__)
UPLOAD_FOLDER = "/config/workspace/images"
model = tf.keras.models.load_model("/config/workspace/model/SkinCancer.h5")
class_names = [
    "Actinic keratoses and intraepithelial carcinomae",
    "basal cell carcinoma",
    "benign keratosis-like lesions",
    "dermatofibroma",
    "melanocytic nevi",
    "pyogenic granulomas and hemorrhage",
    "melanoma"
]

def predict_skin_disease(image_path, model):
    # Load and preprocess image
    original_image = cv2.imread(image_path)

    if original_image is None:
        return "Invalid Image"

    resized_image = cv2.resize(original_image, (28, 28))
    batch_size = 4
    batch_of_images = np.array([resized_image] * batch_size)

    # Make prediction on preprocessed image
    pred = model.predict(batch_of_images)
    predicted_class = np.argmax(pred, axis=1)
    predicted_class_number = predicted_class[0]

    if predicted_class_number < len(class_names):
        predicted_class_name = class_names[predicted_class_number]
        return predicted_class_name

    return "Unknown"

@app.route("/", methods=["GET", "POST"])
def upload_predict():
    if request.method == "POST":
        image_file = request.files["image"]
        if image_file:
            image_location = os.path.join(
                UPLOAD_FOLDER,
                image_file.filename
            )
            image_file.save(image_location)
            pred = predict_skin_disease(image_location, model)
            return render_template('index.html', prediction=pred)
    return render_template('index.html', prediction=None)

if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)
