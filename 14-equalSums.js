function equalSums (arr){
    for(let i = 0; i < arr.length; i++) {
        let curNum = Number(arr[i]);
        
        let sumLeft = 0;
        let sumRight = 0;

        for(let j = 0; j < i; j++){
            let numToLeft = arr[j];
            sumLeft += numToLeft
        }

        for (let j = i + 1; j < arr.length; j++) {
            let numToRight = Number(arr[j]);
            sumRight += numToRight;
        }

        if (sumLeft === sumRight) {
            console.log(i);
            return;
        }

    }
    console.log(`no`)

}
equalSums([1, 2, 3, 3])