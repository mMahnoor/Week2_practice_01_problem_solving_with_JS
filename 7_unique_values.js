const unique_values = (numList) => {
    const uniques = [];
    for(let i=0; i<numList.length; i++) {
        if(numList.indexOf(numList[i])==i) uniques.push(numList[i]);
    }
    return uniques;

}

const result = unique_values([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);