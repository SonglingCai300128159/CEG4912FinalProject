from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
import RPi.GPIO as GPIO
import tempSenor
import pm25
import waterDepth
import relay

clini = waterDepth.get_waterdepth(0)
grini = waterDepth.get_waterdepth(3)
blini = waterDepth.get_waterdepth(2)

lights = [0, 0, 0, 0, 0, 0, 0, 0]
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
    data = {
        'temperatureData': temp,
        'humidityData': humi,
        'co2Data': 400,
        'pm25Data': pm2/10,
        'pm10Data': pm10/10,
        'batteryPercentage': 69,
        'CleanwaterPercentage': clwater,
        'GreywaterPercentage':grwater,
        'BlackwaterPercentage':blwater
    }
    return jsonify(data)

@app.route('/api/toggle-light/<int:serial_number>', methods=['POST'])
def toggle_light(serial_number):
    if(lights[serial_number]==1):
        relay.control_relay(serial_number,0)
        lights[serial_number]=0
    else:
        relay.control_relay(serial_number,1)
        lights[serial_number]=1
    return jsonify({'status' : 'success', 'light_status' : lights[serial_number]})
    

@app.route('/api/light-status/<int:serial_number>', methods=['GET'])
def get_light_status(serial_number):
    if serial_number < 8:
        return jsonify({'status': 'success', 'light_status': lights[serial_number]})
    #else:
    #   return jsonify({'status': 'error', 'message': f'Light with serial number {serial_number} not found'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    GPIO.cleanup()

