function magicSum(arr,num){
    for(let i = 0; i < arr.length; i++) {
        let firstNum = arr[i];
        
        for(let j = i + 1; j < arr.length; j++){
            let secondNum = arr[j];

            if(firstNum + secondNum === num) {
                console.log(`${firstNum} ${secondNum}`);
            
            }

        }
    }

}
magicSum([1, 7, 6, 2, 19, 23],
    8
    )