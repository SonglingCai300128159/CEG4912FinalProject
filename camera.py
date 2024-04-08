import cv2
import yolov8_to_onnx_webCam

class cam(object):
    def __init__(self):
            self.video = cv2.VideoCapture(0)

    
    def get_frame(self):
        success, frame = self.video.read()
        frame = yolov8_to_onnx_webCam.image_process(frame)
        frame = yolov8_to_onnx_webCam.output_image(frame, 960, 640)
        success, jpeg = cv2.imencode('.jpg', frame)
        return jpeg.tobytes()