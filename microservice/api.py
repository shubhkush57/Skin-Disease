import os
import uuid
from flask import Flask
from flask import jsonify
import urllib
from PIL import Image
from flask_cors import CORS
import json

from tensorflow.keras.models import load_model
from flask import Flask , render_template  , request , send_file
from tensorflow.keras.preprocessing.image import load_img , img_to_array
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
#loading the model
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model = load_model(os.path.join(BASE_DIR , 'model_best.pth'))

ALLOWED_EXT = set(['jpg' , 'jpeg' , 'png' , 'jfif'])
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXT
classes = ['Actinic keratoses', 'Basal cell carcinoma', 'Benign keratosis','Dermatofibroma', 'Melanocytic nevi', 'Melanoma', 'Vascular lesions']

def predict(filename , model):
    img = load_img(filename , target_size = (100 , 125))
    img = img_to_array(img)
    print("Shape of image before rshaping: ",img.shape )
    img = img.reshape(1 , 100,125 ,3)
    # img = np.expand_dims(img, axis=0)
    img = img.astype('float32')
    img = img/255.0
    result = model.predict(img)
    # print(result)
    dict_result = {}
    for i in range(7):
        dict_result[result[0][i]] = classes[i]
    res = result[0]
    res.sort()
    res = res[::-1]
    print(res);
    prob = res[:7]
    
    prob_result = []
    class_result = []
    for i in range(7):
        prob_result.append((prob[i]*100).round(2))
        class_result.append(dict_result[prob[i]])
    print(prob_result)
    return class_result , prob_result

@app.route('/')
def home():
        return render_template("index.html")

@app.route('/success' , methods = ['GET' , 'POST'])
def success():
    print('hwerwe it came....................................')
    # return {"message": "it was greater"}
    # print(request)
    error = ''
    target_img = os.path.join(os.getcwd() , 'static/images')
    try:
        # Log the incoming request data
        # print(request.data)
        data_string = request.data
        data_dict = json.loads(data_string.decode('utf-8'))  # Convert bytes to string and then parse JSON
        file = data_dict['file']  # Access the value associated with the key 'file'

        print("hwerwe is file coming")
        print(file)
        # print(file.filname)
        if file :
            # file.save(os.path.join(target_img , file))
            img_path = os.path.join(target_img , file)
            print("This is image_path"+ img_path)
            img = file
            class_result , prob_result = predict(img_path , model)
            predictions = {
                    "class1":class_result[0],
                    "class2":class_result[1],
                    "class3":class_result[2],
                    "class4":class_result[3],
                    "class5":class_result[4],
                    "class6":class_result[5],
                    "class7": class_result[6],
                    "prob1": prob_result[0],
                    "prob2": prob_result[1],
                    "prob3": prob_result[2],
                    "prob4": prob_result[3],
                    "prob5": prob_result[4],
                    "prob6": prob_result[5],
                    "prob7": prob_result[6]
            }
            print('everything good till here')
            response = {
                'img': img,
                'predications': predictions
            }
            # print(jsonify(response))
            return response
        else:
            error = "Please upload images of jpg , jpeg and png extension only"
            err = {
                'error': error
            }
            return jsonify(err);
        # if(len(error) == 0):
        #     response = {
        #         'img': img,
        #         'predictions': predictions
        #     }
        #     return jsonify(response)
                # return {
                #     "img": img,
                #     "predications" : predictions
                # }
        # else:
        #     err = {
        #         'error': error
        #     }
        #     return jsonify(err);
        # Your existing code to handle the request data goes here
        
        # return jsonify({'message': 'Success'})
    except Exception as e:
        return jsonify({'error': str(e)})
    # file = request.files['file']
    # print("hwerwe is file coming")
    # print(file)
    # error = ''
    # target_img = os.path.join(os.getcwd() , 'static/images')
    # if request.method == 'POST':
    #     if(request.form):
    #         link = request.form.get('link')
    #         try :
    #             resource = urllib.request.urlopen(link)
    #             unique_filename = str(uuid.uuid4())
    #             filename = unique_filename+".jpg"
    #             img_path = os.path.join(target_img , filename)
    #             output = open(img_path , "wb")
    #             output.write(resource.read())
    #             output.close()
    #             img = filename
    #             class_result , prob_result = predict(img_path , model)
    #             predictions = {
    #                   "class1":class_result[0],
    #                     "class2":class_result[1],
    #                     "class3":class_result[2],
    #                     "class4":class_result[3],
    #                     "class5":class_result[4],
    #                     "class6":class_result[5],
    #                     "class7": class_result[6],
    #                     "prob1": prob_result[0],
    #                     "prob2": prob_result[1],
    #                     "prob3": prob_result[2],
    #                     "prob4": prob_result[3],
    #                     "prob5": prob_result[4],
    #                     "prob6": prob_result[5],
    #                     "prob7": prob_result[6],
    #             }
    #         except Exception as e : 
    #             print(str(e))
    #             error = 'This image from this site is not accesible or inappropriate input'
    #         if(len(error) == 0):
    #             response=  {
    #                 "img": img,
    #                 "predictions" : predictions
    #             }
    #             return jsonify(response)
    #             return  render_template('success.html' , img  = img , predictions = predictions)
    #         else:
    #             err = {
    #                 "error": error
    #             }
    #             return jsonify(err)
    #             return render_template('index.html' , error = error) 
    #             # return {
    #             #     "error": error
    #             # }
            
    #     elif (request.files):
    #         file = request.files['file']
    #         print("hwerwe is file coming")
    #         print(file)
    #         if file and allowed_file(file.filename):
    #             file.save(os.path.join(target_img , file.filename))
    #             img_path = os.path.join(target_img , file.filename)
    #             img = file.filename
    #             class_result , prob_result = predict(img_path , model)
    #             predictions = {
    #                   "class1":class_result[0],
    #                     "class2":class_result[1],
    #                     "class3":class_result[2],
    #                     "class4":class_result[3],
    #                     "class5":class_result[4],
    #                     "class6":class_result[5],
    #                     "class7": class_result[6],
    #                     "prob1": prob_result[0],
    #                     "prob2": prob_result[1],
    #                     "prob3": prob_result[2],
    #                     "prob4": prob_result[3],
    #                     "prob5": prob_result[4],
    #                     "prob6": prob_result[5],
    #                     "prob7": prob_result[6]
    #             }
    #         else:
    #             error = "Please upload images of jpg , jpeg and png extension only"
    #         if(len(error) == 0):
    #             response = {
    #                 'img': img,
    #                 'predictions': predictions
    #             }
    #             return jsonify(response)
    #             # return {
    #             #     "img": img,
    #             #     "predications" : predictions
    #             # }
    #             return  render_template('success.html' , img  = img , predictions = predictions)
    #         else:
    #             err = {
    #                 'error': error
    #             }
    #             return jsonify(err);
    #             return render_template('index.html' , error = error)
    # else:
    #     res = {
    #         'error':"this is from server side"
    #     }
    #     return jsonify(res)
        # return render_template('index.html')

if __name__ == "__main__":
    port = 8000
    app.run(debug = True,port= port)