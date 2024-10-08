function axSeqOfEqualElements(arr){
    let longestSeq = [];
    let curSeq = arr[0];

    for(let i = 1; i < arr.length; i++) {
        let curElement = arr[i];

        if(curElement === curSeq[0]) {
            curSeq.push(curElement);

            if (curSeq.length > longestSeq.length) {
                longestSeq = curSeq;
            }
        } else {
            curSeq = [curElement]
        }
    }
    console.log(longestSeq.join(` `))
}
axSeqOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])