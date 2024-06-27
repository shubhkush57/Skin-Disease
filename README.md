
# Skin Disease Detector:
## Skin Disease Image Classifier for Accurate and Accessible Diagnosis
![image](https://github.com/shubhkush57/Skin-Disease/assets/76884219/c440e82b-c187-4b97-84df-82b41d84d758)


## Authors

- [@Shubham Kushwaha](https://github.com/Shubham-20205157)
- [@Saurabh kumar](https://github.com/utkrisht5)

## Overview
Skin diseases can have a significant impact on a person's health and wellbeing. Early diagnosis and treatment are essential for preventing complications, scarring, disfigurement, and even life-threatening conditions such as skin cancer. This project aims to develop an image classifier that can accurately identify common skin diseases in images uploaded by users and also gives them functionality for searching disease.

## Data Source
We specifically employed the HAM10000 ("Human Against Machine with 10000 training images") dataset as a cornerstone in our project. This dataset, released by us, played a pivotal role in augmenting the academic machine learning landscape within dermatology.

## Focus Diseases
The dermatoscopic images are sourced from various populations and captured and stored using different modalities. The resulting dataset comprises 10,015 dermatoscopic images, categorized into seven distinct classes of skin cancer listed below:


-	Melanoma
-	Melanocytic nevi
-	Benign keratosis-like lesions
-	Basal cell carcinoma
-	Actinic keratoses
-	Vascular lesions
-	Dermatofibroma

## Data Preprocessing
In the pursuit of optimizing our image dataset for effective machine learning model training, a crucial step in our Image Preprocessing pipeline involves resizing the images to a standardized dimension of 125x100 pixels. This proactive measure is undertaken to address the potential variability in the original images, which may exhibit diverse sizes and aspect ratios

## Model Architecture
The adapted Convolutional Neural Network (CNN) is designed for skin disease classification, featuring:
-	Input images of 100x125 pixels with 3 color channels.
-	Two sets of Convolutional layers (32 filters each) using ReLU activation and same padding.
-	MaxPooling layers (2x2) for downsampling and Dropout layers (16% and 20%) for regularization.
-	Additional Convolutional layers (32 filters) with ReLU activation and same padding.
-	Convolutional layers (64 filters) utilizing Sigmoid activation and same padding.
-	MaxPooling (2x2) and Dropout (25%) to enhance model generalization.
-	Dense layers with decreasing units (256, 128, 64, 32, 16) and Sigmoid activation.
-	Final Dropout layer (40%) for regularization.
-	Output layer with 7 units and Softmax activation for classification.

## Model Evaluation
The model's accuracy, indicating the proportion of correctly classified skin diseases, is used to evaluate its performance.
![image](https://github.com/shubhkush57/Skin-Disease/assets/76884219/11b3f2a3-6003-416e-bbcc-b90947d00917)

## Web Application
To make the skin disease image classifier easily accessible to users, it was integrated into a user-friendly web application. Users can upload images of their skin diseases, and the application provides an accurate diagnosis of the skin condition.The Dashboard offers detailed information on skin diseases, appointment booking with dermatologists, image-based disease diagnosis, and a comprehensive search function for any disease. It combines advanced technology and user-friendly features to facilitate effective skin health	management	and	professional	medical	consultation. 
![Screenshot 2024-05-19 005428](https://github.com/shubhkush57/Skin-Disease/assets/76884219/5f26044c-ef18-4d32-8dbf-b86b822a6bcb)
![Screenshot 2024-05-18 124006](https://github.com/shubhkush57/Skin-Disease/assets/76884219/f0900c20-6b8a-44d6-9278-62cadd019571)
![Screenshot 2024-05-19 013138](https://github.com/shubhkush57/Skin-Disease/assets/76884219/e77cb9e3-d381-4b13-8b48-36e28471118d)
![Screenshot 2024-05-18 124339](https://github.com/shubhkush57/Skin-Disease/assets/76884219/dc180081-3d8f-4043-a7e0-edf152c1dbfd)

## For More Resouces
[ppt Link](https://www.canva.com/design/DAFxc5ElCFM/eMBKkvK8xNHyxC6LqH6UWQ/edit?utm_content=DAFxc5ElCFM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
[Project Report](https://drive.google.com/file/d/1Pm7I9IKi3IqVJq1NB6ZO6bzw-vP6mTUY/view)

## Proposed Features
- Utilized the HAM10000 dataset as a cornerstone for the project
– Leveraged CNNs to significantly improve the accuracy (87%) and speed of image-based diagnoses
– Incorporated features for seamless sign-up, login, image upload, and effortless patient profile creation
– Implemented an advanced disease and medication search functionality using the Wiki API
– Enabled users to schedule appointments with their preferred doctors effortlessly

## Tech Stack
**Client:** React.js, Redux, Tailwind Css
**Server:** Node.js,Flask, Express.js
**DataBase:** MongoDB Atlas, Mongoose
**Tools:** TensorFlow, Jupyter Notebook, Keras, Gradio
