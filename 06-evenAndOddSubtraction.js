function evenAndOddSubtraction(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = +arr[i];
    }
    let oddSum = 0;
    let evenSum = 0;

    for(let num of arr){
        if(num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num
        }
    }
    console.log(evenSum - oddSum)

}
evenAndOddSubtraction([1,2,3,4,5,6])