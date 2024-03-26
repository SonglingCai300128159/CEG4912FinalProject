import smbus
import math
import time
bus = smbus.SMBus(1)

bus.write_i2c_block_data(0x40,0x00,[0x45,0x27])
bus.write_i2c_block_data(0x40,0x05,[0x02,0x00])

def get_voltage():
    raw = bus.read_i2c_block_data(0x40,0x02,2)
    high = hex(raw[0])[2:]
    high=high.rjust(2,'0')
    low = hex(raw[1])[2:]
    low = high.rjust(2,'0')
    return round(int(high+low,16)*1.25/1000,2)

def get_current():
    raw = bus.read_i2c_block_data(0x40,0x04,2)
    high = hex(raw[0])[2:]
    low = hex(raw[1])[2:]
    return round(int(high+low,16)*0.1/1000,2)

if __name__=="__main__":
    print(get_voltage())
    print(get_current())
