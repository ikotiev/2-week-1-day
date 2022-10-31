let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 2; i <= 10; i++) {
        if (arr[i] % 2 == 0){ 
        console.log(arr[i]);}
}
let i = 0
while (i < arr.length) {
    const numbers = arr[i] % 2;
    if(numbers > 0){
        console.log(arr[i]);
    }
  i++
}