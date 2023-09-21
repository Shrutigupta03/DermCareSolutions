# import os
# from flask import Flask, request, render_template
# import tensorflow as tf
# import numpy as np
# import cv2
# app = Flask(__name__, template_folder="templates")
# # UPLOAD_FOLDER = "/config/workspace/images" 
# UPLOAD_FOLDER = "images" 
# model = tf.keras.models.load_model("model/dermo_8th.h5")

# class_names = ["Acne", "Eczema", "Atopic", "Psoriasis", "Tinea", "Vitiligo"]

# def predict_skin_disease( image_path, model):
#     try:
        
#         img = cv2.imread(image_path)
#         img = cv2.resize(img, (128, 128))

#         pred = model.predict(img)
#         predicted_class_index = np.argmax(pred)
#         predicted_class_name = class_names[predicted_class_index]

#         return predicted_class_name

#     except Exception as e:
#         return "Error: " + str(e)

# @app.route("/", methods=["GET", "POST"])
# def upload_predict():
#     if request.method == "POST":
#         image_file = request.files["image"]
#         if image_file:
#             image_location = os.path.join(
#                 UPLOAD_FOLDER,
#                 image_file.filename
#             )
#             image_file.save(image_location)
#             pred = predict_skin_disease(image_location, model)
#             return render_template('index.html', prediction=pred)
#     return render_template('index.html', prediction=0)

# if __name__ == "__main__":
#     app.run(port=5000, host="0.0.0.0", debug=True)
import os
from flask import Flask, request, render_template
import tensorflow as tf
import numpy as np
import cv2

app = Flask(__name__)
UPLOAD_FOLDER = "images" 
model = tf.keras.models.load_model("model/SkinCancer.h5", compile=False)
class_names = ["Actinic keratoses and intraepithelial carcinomae", "basal cell carcinoma", "benign keratosis-like lesions", "dermatofibroma", "melanocytic nevi", "pyogenic granulomas and hemorrhage","melanoma"]

def predict_skin_disease(image_path, model):
    try:
        # Load and preprocess image
        original_image = cv2.imread(image_path)
        resized_image = cv2.resize(original_image, (28, 28))

        # Make prediction on preprocessed image
        pred = model.predict(np.array([resized_image]))
        predicted_class_number = np.argmax(pred, axis=1)[0]
        predicted_class_name = class_names[predicted_class_number]

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
            return render_template('index.html', prediction=pred)
    return render_template('index.html', prediction="No prediction yet")

if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)
