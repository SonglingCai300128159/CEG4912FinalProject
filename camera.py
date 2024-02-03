from ultralytics import YOLO

model = YOLO("C:/Users/10107/Desktop/yolov8/Machine Learning/runs/detect/train53/weights/best.pt")
model.predict(source="0",show=True, imgsz=256)