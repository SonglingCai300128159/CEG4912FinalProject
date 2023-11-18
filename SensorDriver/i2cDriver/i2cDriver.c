#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>
#include <linux/i2c.h>
#include <linux/i2c-dev.h>
#include <sys/ioctl.h>
#include <math.h>
#include"i2cDriver.h"

int initialI2C(){
    int fd = open("/dev/i2c-1", O_RDWR);
    if(fd<0){
    	printf("open error\n");
    	return -1;
    }
    return fd;
}

int sendi2cCommand(int fd, enum sht40Command c){
    char buff[]={0x2c,0x06};
    
    struct i2c_msg msg = {
        .addr = 0x44,
        .flags = 0,
        .len = 2,
        .buf = buff,
    };
    struct i2c_rdwr_ioctl_data rdwr_msg = {
        .msgs = &msg,
        .nmsgs = 1,
    };
     
    int ret = ioctl(fd, I2C_RDWR, &rdwr_msg);
    usleep(10000);
    return 1;
}

int receivei2cData(int fd,sht40Data * d){
    char r[6]="";
    struct i2c_msg msg2 = {
        .addr = 0x44,
        .flags = I2C_M_RD,
        .len = 6,
        .buf = r,
    };
    struct i2c_rdwr_ioctl_data rdwr_msg2 = {
        .msgs = &msg2,
        .nmsgs = 1,
    };
     
    int ret2 = ioctl(fd, I2C_RDWR, &rdwr_msg2);
    
    //printf("%x\n",r[0]);
    int st=r[0]*16*16+r[1];
    d->temperature=175*(st/(pow(2,16)-1))-45;
    //printf("%f*\n",d->temperature);
    
    int srh=r[3]*16*16+r[4];
    d->humidity=125*(srh/(pow(2,16)-1))-6;
    //printf("%f**\n",d->humidity);

    return 1;
}

int main(){
    sht40Data sd;
    int f;
    enum sht40Command co=measureHighPrecision;
    
    f=initialI2C();
    sendi2cCommand(f, co);
    receivei2cData(f,&sd);
    
    printf("%f %f\n",sd.temperature,sd.humidity);
    
    return 0;
    
}
