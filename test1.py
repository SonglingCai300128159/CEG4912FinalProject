from flask import Flask, render_template,jsonify, Response
from camera import cam
from flask_socketio import SocketIO
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
socketio = SocketIO(app)

@app.route('/api/cam_status')
def cam_status():
    return jsonify(cam_status='running')

@app.route('/')
def index ():
    return render_template('index.html')

def generate(camera):
    while True:
          frame = camera.get_frame() 
          yield (b'--frame\r\n'
                 b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
       
@app.route('/api/camera_feed')
def camera_feed():
    return Response(generate(cam()), mimetype = 'multipart/x-mixed-replace; boundary=frame') 


if __name__ == '__main__':
            socketio.run (app, host='0.0.0.0', port = '5000', debug = True)