import RPi.GPIO as GPIO
import time

tr=[4,5]
br=[6,12]
bl=[13,16]
tl=[17,18]

GPIO.setmode(GPIO.BCM)
GPIO.setup(4,GPIO.OUT)
GPIO.setup(5,GPIO.OUT)
GPIO.setup(6,GPIO.OUT)
GPIO.setup(12,GPIO.OUT)
GPIO.setup(13,GPIO.OUT)
GPIO.setup(16,GPIO.OUT)
GPIO.setup(17,GPIO.OUT)
GPIO.setup(18,GPIO.OUT)

def drive_motor(position,statue):
	if position=="tr":
		if statue==1:
			GPIO.output(tr[1],GPIO.HIGH)
			GPIO.output(tr[0],GPIO.LOW)
		if statue==0:
			GPIO.output(tr[0],GPIO.HIGH)
			GPIO.output(tr[1],GPIO.LOW)
	if position=="br":
		if statue==1:
			GPIO.output(br[1],GPIO.HIGH)
			GPIO.output(br[0],GPIO.LOW)
		if statue==0:
			GPIO.output(br[0],GPIO.HIGH)
			GPIO.output(br[1],GPIO.LOW)
	if position=="bl":
		if statue==1:
			GPIO.output(bl[1],GPIO.HIGH)
			GPIO.output(bl[0],GPIO.LOW)
		if statue==0:
			GPIO.output(bl[0],GPIO.HIGH)
			GPIO.output(bl[1],GPIO.LOW)
	if position=="tl":
		if statue==1:
			GPIO.output(tl[1],GPIO.HIGH)
			GPIO.output(tl[0],GPIO.LOW)
		if statue==0:
			GPIO.output(tl[0],GPIO.HIGH)
			GPIO.output(tl[1],GPIO.LOW)
		

if __name__=="__main__":
	drive_motor("bl",0)
	drive_motor("tr",0)
	drive_motor("br",0)
	time.sleep(13)
	GPIO.cleanup()
