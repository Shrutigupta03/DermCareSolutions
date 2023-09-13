import os
from flask import Flask, request, render_template
import tensorflow as tf
import numpy as np
import cv2
app = Flask(__name__)
# UPLOAD_FOLDER = "/config/workspace/images" 
UPLOAD_FOLDER = "/images" 
model = tf.keras.models.load_model("model/dermo_8th.h5")

class_names = ["Acne", "Eczema", "Atopic", "Psoriasis", "Tinea", "Vitiligo"]

def predict_skin_disease(image_path, model):
    try:
        
        img = cv2.imread(image_path)
        img = cv2.resize(img, (128, 128))

        pred = model.predict(img)
        predicted_class_index = np.argmax(pred)
        predicted_class_name = class_names[predicted_class_index]

        return predicted_class_name

    except Exception as e:
        return "Error: " + str(e)

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
            return render_template('user/src/app/upload-img/upload-img.component.html', prediction=pred)
    return render_template('user/src/app/upload-img/upload-img.component.html', prediction=0)

if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)
