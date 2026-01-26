function countFrequency (arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++){
        let element = arr[i];
        if (counts[element]){
            counts[element] += 1;
        }
        else {
            counts[element] = 1;
        }
    }
    return counts;
}
