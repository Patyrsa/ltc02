int main(void){
	
  int  height, weight;
  double imt;
  
  printf("Your weight?(kg)\n");
  scanf("%d", weight); 
	
  printf("Your height?(sm)\n");
  scanf("%d", &height); 

  imt = weight/(height*height);
	
  return 0;
} 
if 