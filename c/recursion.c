#include "stdio.h"

int main(){

  void PopeAndDog(int count) {
  printf("'у попа была собака, он её любил\n она съела кусок мяса, он её убил\nв землю закопал\nи надпись написал, что у попа была собака, он её любил\nона съела кусок мяса, он её убил\nв землю закопал\nи надпись написал, что у попа была собака, он её любил",count);
  
  PopeAndDog ( count+1 );
  
  }

  PopeAndDog(1);
  return 0;
}