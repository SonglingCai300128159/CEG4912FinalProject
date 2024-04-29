# CEG4912FinalProject
CEG4912 F00 GROUP 5 Final Project

File on orangePI: best.onnx，best5_0.onnx，camera.py，test1.py，yolov8_to_onnx_webCam.py （make sure they are under the same file, The file can be found under the path or folder named "orangepi"）

File on respberry pi: on the respberry pi the server file test1.py is under home/SensirDriver/serverdriver, the react app should be inside the home/vscode/.../tinyhouse/project

IF you cannot find the file, You can download all necessary files from github and extract them on orange pi(best.onnx，best5_0.onnx，camera.py，test1.py，yolov8_to_onnx_webCam.py) and respberry pi(final_tinyhouse.zip, SensorDriver_final.zip)

To turn on the tiny house control system:

On the orange pi, go to the file contains best.onnx，best5_0.onnx，camera.py，test1.py，yolov8_to_onnx_webCam.py, right click inside the file and choose "open in termial", On the command line, type (sudo python test1.py), remember do not type the "(" or ")" On the command line.

For ther react app: 

On the respberry pi: 

Go to the sensorDriver/serverDriver, right click inside the file and choose "open in termial", On the command line, type (sudo python3 app.py) to run flask server

Then go to the file you extract the final_tinyhouse.zip, right click inside the file and choose "open in termial", On the command line, type (npm install) to download necessary node_modules, after finished, type (npm start) to run the app.

Second way(only can be used if you use the current react app instead of downloading the file from github): find a .sh file(named start.sh) on the desktop of respberry pi, right click it and choose "run as software/app/application". Then open the browser and wait until the react app start.(There may be a short wait)
