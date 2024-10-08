function arrayRotation(arr, rotations){
    for(let curRotation = 1; curRotation <= rotations; curRotation++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    } 
    console.log(arr.join(` `))

}
arrayRotation([51, 47, 32, 61, 21], 2)