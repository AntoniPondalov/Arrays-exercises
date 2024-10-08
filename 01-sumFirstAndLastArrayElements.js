function sumFirstAndLastArrayElements(numbers){
    let firstNum = +numbers[0];
    let lastNum = +numbers[numbers.length - 1];

    console.log(firstNum + lastNum)

}
sumFirstAndLastArrayElements([10, 20, 30])