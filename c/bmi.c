#include "stdio.h"

int main (void) {
    int height, weight;
    float BMI;

    printf("Your height?(sm)\n");
    scanf("%d", &height);

    printf("Your weight?(kg)\n");
    scanf("%d", &weight);

    BMI = weight/(height*height);

    printf("Your BMI is = %2.2f\n", BMI);

//норма BMI 18.5 - 24.99 (wiki)

if (BMI<18.5) {
    printf("Your weight is below normal\n");
} else if (BMI>24.99) {
    printf("Your weight is above normal\n");
} else if (BMI>18.5 && BMI<24.99) {
    printf("Your weight is normal\n");
}
}