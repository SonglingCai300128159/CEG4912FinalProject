import onnx

try:
    onnx.checker.check_model("best.onnx")
    
except onnx.checker.ValidationError as e:
    print("The model is invalid: %s"%e)

else:
    print("The model is valid!")


