function condenseArrayToNumber(arr){
    let condensed = [];
    while(arr.length > 1) {
        let condensed = [];
        for(i = 0; i < arr.length - 1; i++){
            let curEllement = arr[i];
            let nextElement = arr[i + 1];

            condensed.push(curEllement + nextElement)
        }
        arr = condensed
        
    }
    console.log(arr[0])

}
condenseArrayToNumber([2,10,3])