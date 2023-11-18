from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import subprocess
i=0
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
  # Enable CORS for the entire app

@app.route('/api/temperature-data', methods=['GET'])
def get_sensor_data():
    command="sudo /home/group5/SensorDriver/i2cDriver/test"
    temp=subprocess.check_output(command,shell=True,text=True)
    command="sudo /home/group5/SensorDriver/PM2.5Driver/test"
    pm25=subprocess.check_output(command,shell=True,text=True)
    #print(pm25)
    data = {
        'temperatureData': temp[0:4],
        'humidityData': temp[10:14],
        'co2Data': 400,
        'pm25Data': pm25[6:9],
        'batteryData':69,
        'waterData':55
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

