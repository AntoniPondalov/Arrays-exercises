function maxNumber(arr){
    let topNums = []
    
    for(let i = 0; i < arr.length; i++){
        let curNum = arr[i];
        let isTopNum = true;

        for(let j = i + 1; j < arr.length; j++){
            let numToRight = arr[j];

            if (numToRight >= curNum) {
                isTopNum = false;
                break;
            }

        }
        if (isTopNum) {
            topNums.push(curNum)
            
        }
    }
    console.log(topNums.join(` `))

}
maxNumber([14, 24, 3, 19, 15, 17])