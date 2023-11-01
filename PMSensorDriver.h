#ifndef _PMSENSORDRIVER_H
#define _PMSENSORDRIVER_H 

#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <termios.h>
#include <stdlib.h>

typedef struct{
	float PM25;
	float PM10;
}PMStatue;

int pmSensorInit();
int pmSensorData(int serialPort,PMStatue * p);
#endif
