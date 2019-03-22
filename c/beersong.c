#include "stdio.h"



  void beerSong(int count) {

  printf("%d bottles of beer on the wall. %d bottles,\n", count, count);
  printf("%d bottles of beer,\n", count);
  printf("Take one down, pass it around,");

  if (count=1) {    
        
        printf("%d bottle of beer on the wall.\n");
        printf("No more bottles of beer on the wall.");   

  } else {
    printf("%d bottles of beer on the wall.\n", count-1);
    beerSong(count-1);
  }

  }
  int main(){

  beerSong(99);
  return 0;
}