function reverseAnArrayOfNumbers(n, arr){
    let arrReverse = [];
    for(let i = n - 1; i >= 0; i--){
        let curElement = arr[i];
        arrReverse.push(curElement);
    }
    console.log(arrReverse.join(` `))

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])