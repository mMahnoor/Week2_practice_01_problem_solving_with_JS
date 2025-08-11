const sort_array = (numList) => {
    for(let i=0; i<numList.length; i++) {
        let minId = i;
        for(let j=i+1; j<numList.length; j++) {
            if(numList[minId] > numList[j]) {
                minId = j;
            }
        }
        let tmp = numList[i];
        numList[i] = numList[minId];
        numList[minId] = tmp;
    }
    return numList;
}

console.log(sort_array([4,1,9,3,6,0]));