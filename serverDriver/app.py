from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
import RPi.GPIO as GPIO

lights = {0: False, 1: False, 2: False, 3: False, 4: False, 5: False}
bdlight = 26
lvlight = 19
wshlight = 13
storage = 6
GPIO.setmode(GPIO.BCM)
GPIO.setup(bdlight, GPIO.OUT)
GPIO.output(bdlight, GPIO.HIGH)
GPIO.setup(lvlight, GPIO.OUT)
GPIO.output(lvlight, GPIO.HIGH)
GPIO.setup(wshlight, GPIO.OUT)
GPIO.output(wshlight, GPIO.HIGH)
GPIO.setup(storage, GPIO.OUT)
GPIO.output(storage, GPIO.HIGH)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/temperature-data', methods=['GET'])
def get_sensor_data():
    command = "sudo /home/group5/SensorDriver/i2cDriver/test"
    temp = subprocess.check_output(command, shell=True, text=True)
    command = "sudo /home/group5/SensorDriver/PM2.5Driver/test"
    pm25 = subprocess.check_output(command, shell=True, text=True)
    data = {
        'temperatureData': temp[0:4],
        'humidityData': temp[10:14],
        'co2Data': 400,
        'pm25Data': pm25[6:10],
        'batteryPercentage': 69,
        'CleanwaterPercentage': 55
    }
    return jsonify(data)

@app.route('/api/toggle-light/<int:serial_number>', methods=['POST'])
def toggle_light(serial_number):
    global lights
    print(serial_number)
    if serial_number == 0:
        if not lights[serial_number]:
            GPIO.output(bdlight, GPIO.LOW)
            lights[serial_number] = not lights[serial_number]
            return jsonify({'status': 'success', 'light_status': lights[serial_number]})
        else:
            GPIO.output(bdlight, GPIO.HIGH)
            lights[serial_number] = not lights[serial_number]
            return jsonify({'status': 'success', 'light_status': lights[serial_number]})
    elif serial_number == 1:
        if not lights[serial_number]:
            GPIO.output(lvlight, GPIO.LOW)
            lights[serial_number] = not lights[serial_number]
            return jsonify({'status': 'success', 'light_status': lights[serial_number]})
        else:
            GPIO.output(lvlight, GPIO.HIGH)
            lights[serial_number] = not lights[serial_number]
            return jsonify({'status': 'success', 'light_status': lights[serial_number]})
    elif serial_number == 2:
        if not lights[serial_number]:
            GPIO.output(wshlight, GPIO.LOW)
            lights[serial_number] = not lights[serial_number]
            return jsonify({'status': 'success', 'light_status': lights[serial_number]})
        else:
            GPIO.output(wshlight, GPIO.HIGH)
            lights[serial_number] = not lights[serial_number]
            return jsonify({'status': 'success', 'light_status': lights[serial_number]})
    elif serial_number == 3:
        if not lights[serial_number]:
            GPIO.output(storage, GPIO.LOW)
            lights[serial_number] = not lights[serial_number]
            return jsonify({'status': 'success', 'light_status': lights[serial_number]})
        else:
            GPIO.output(storage, GPIO.HIGH)
            lights[serial_number] = not lights[serial_number]
            return jsonify({'status': 'success', 'light_status': lights[serial_number]})
    else:
        return jsonify({'status': 'error', 'message': f'Light with serial number {serial_number} not found'})

@app.route('/api/light-status/<int:serial_number>', methods=['GET'])
def get_light_status(serial_number):
    global lights
    if serial_number in lights:
        return jsonify({'status': 'success', 'light_status': lights[serial_number]})
    else:
        return jsonify({'status': 'error', 'message': f'Light with serial number {serial_number} not found'})

if __name__ == '__main__':
    app.run(debug=True)
    GPIO.cleanup()

