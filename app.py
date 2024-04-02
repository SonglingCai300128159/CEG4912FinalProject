from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
import RPi.GPIO as GPIO
import tempSenor
import pm25
import waterDepth
import relay
import motorDriver
import batteryDriver
import time

clini = waterDepth.get_waterdepth(0)
grini = waterDepth.get_waterdepth(3)
blini = waterDepth.get_waterdepth(2)

lights = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
maxWaterDepth = 0.033
relay.relay_initial()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/temperature-data', methods=['GET'])
def get_sensor_data():
    temp,humi = tempSenor.get_temp()
    #print(temp,humi)
    pm2,pm10 = pm25.get_pm25_data()
    print(pm2,pm10)
    #print(waterDepth.get_waterdepth(0))
    clwater = (waterDepth.get_waterdepth(0)-clini)/maxWaterDepth*100
    grwater = (waterDepth.get_waterdepth(3)-grini)/maxWaterDepth*100
    print(waterDepth.get_waterdepth(3))
    blwater = (waterDepth.get_waterdepth(2)-blini)/maxWaterDepth*100
    batteryVoltage = batteryDriver.get_voltage()
    batteryCurrent = batteryDriver.get_current()
    data = {
        'temperatureData': temp,
        'humidityData': humi,
        'co2Data': 400,
        'pm25Data': pm2/10,
        'pm10Data': pm10/10,
        'batteryPercentage': 69,
        'CleanwaterPercentage': clwater,
        'GreywaterPercentage':grwater,
        'BlackwaterPercentage':blwater,
        'batteryVoltage':batteryVoltage,
        'batteryCurrent':batteryCurrent
    }
    return jsonify(data)

@app.route('/api/toggle-light/<int:serial_number>', methods=['POST'])
def toggle_light(serial_number):
    if serial_number < 8:
        if lights[serial_number] == 1:
            relay.control_relay(serial_number, 0)
            lights[serial_number] = 0
        else:
            relay.control_relay(serial_number, 1)
            lights[serial_number] = 1
    else:
        print(serial_number)
        if lights[serial_number] == 1:
            motorDriver.drive_motor(str(serial_number),1)
            time.sleep(0.1)
            motorDriver.drive_motor(str(serial_number),2)
            lights[serial_number] = 0
        else:
            motorDriver.drive_motor(str(serial_number),0)
            time.sleep(1)
            motorDriver.drive_motor(str(serial_number),2)
            lights[serial_number] = 1
    return jsonify({'status' : 'success', 'light_status' : lights[serial_number]})

@app.route('/api/light-status/<int:serial_number>', methods=['GET'])
def get_light_status(serial_number):
    if serial_number < 8:
        return jsonify({'status': 'success', 'light_status': lights[serial_number]})
    #else:
    #   return jsonify({'status': 'error', 'message': f'Light with serial number {serial_number} not found'})

@app.route('/api/control-motor/<string:motor><int:state>', methods=['POST'])
def control_motor(motor, state):
    # Parse the JSON payload from the request
    data = request.get_json()  # This will be an empty object based on the current frontend code
    print("Received data:", motor,state)  # Just for debugging, to show the received JSON data

    # Your existing logic here...
    if motor in ['tr', 'tl', 'br', 'bl'] and state in [0, 1, 2]:
        # Assuming you have a function to control the motor
        # motor_control(motor, state)  # Uncomment and implement this based on your hardware control code

        # For debugging, print out the motor and state
        motorDriver.drive_motor(motor,state)
                                                      
        return jsonify({'status': 'success', 'motor': motor, 'state': state})
    else:
        return jsonify({'status': 'error', 'message': 'Invalid motor or state'}), 400

@app.route('http://localhost:5000/api/fan_power/${PowerLevel}', methods=['GET'])
def get_fan_power(PowerLevel):
    if (PowerLevel > 0):
        return jsonify({'fanpwm': [PowerLevel]})
    else: 
        return jsonify({'message': f'Fan power level not found'})

@app.route('http://localhost:5000/api/fan_power/${PowerLevel}', methods=['POST'])
def get_fan_power(PowerLevel):
    if (PowerLevel > 0):
        return jsonify({'fanpwm': [PowerLevel]})
    else: 
        return jsonify({'message': f'Fan power level not found'})
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    GPIO.cleanup()

