function mergeArrays(arr1,arr2){
    let arr3 = [];

    for(let i = 0; i < arr1.length; i++) {
        let element1 = arr1[i];
        let element2 = arr2[i];

        if (i % 2 === 0) {
            arr3.push(Number(element1) + Number(element2));
        } else {
            arr3.push(element1 + element2);
        }
    }
    console.log(arr3.join(` - `))

}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
    )