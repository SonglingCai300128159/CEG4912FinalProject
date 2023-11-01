#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <termios.h>
#include <stdlib.h>
#include "PMSensorDriver.h"

int pmSensorInit(){
	int serialPort = open("/dev/ttyAMA0", O_RDWR);
        if (serialPort < 0) {
                perror("Error opening serial port");
                return -1;
        }

        struct termios tty;
        memset(&tty, 0, sizeof(tty));
        if (tcgetattr(serialPort, &tty) != 0) {
                perror("Error configuring serial port");
                return -1;
        }

        cfsetospeed(&tty, B9600);
        cfsetispeed(&tty, B9600);
        tty.c_cflag |= CS8;
        tty.c_cflag &= ~PARENB;
        tty.c_cflag &= ~CSTOPB;
        tty.c_iflag &= ~(INLCR | ICRNL);
        tty.c_iflag &= ~(IXON | IXOFF |IXANY);
        tty.c_oflag &= ~OPOST;
        tty.c_lflag &= ~(ICANON | ECHO | ECHOE | ISIG);
        tty.c_cc[VMIN] = 1;
        tcflush(serialPort,TCIFLUSH);
        tcsetattr(serialPort, TCSANOW, &tty);
	return serialPort;
}

int pmSensorData(int serialPort,PMStatue * p){
	
	int tempData[10];
	//int temp=0;
	for(int i=0;i<10;i=i+1){
		tempData[i]=0;
		int j=read(serialPort,&tempData[i],1);
		//if(i<0) return -1;
		//tempData[i]=temp;
		//printf("%d %x\n",i,tempData[i]);
	}
	p->PM25=(tempData[3]*256+tempData[2])/10.0;
	p->PM10=(tempData[5]*256+tempData[4])/10.0;
	//printf("**%f %f\n",p->PM25,p->PM10);
	return 1;
}

int main(){	
	PMStatue p;
	int fd;
	fd=pmSensorInit();
	pmSensorData(fd,&p);
	printf("PM2.5:%f PM10:%f\n",p.PM25,p.PM10);
	return 0;
}


