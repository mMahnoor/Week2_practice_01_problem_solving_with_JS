const findBiggest = (nameList) => {
    let maxL = nameList[0];
    for(let i=1; i<nameList.length; i++) {
        if(nameList[i].length > maxL.length)
            maxL = nameList[i];
    }
    return maxL;
}

const result = findBiggest(["rahim", "karim", "abdul", "sadsd", "heroAlom"]);
console.log(result);