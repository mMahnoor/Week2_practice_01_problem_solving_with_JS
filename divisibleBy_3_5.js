const checkDivisibity = (numList) => {
    let result = [];
    for(let i = 0; i < numList.length; i++) {
        if(numList[i]%3==0 && numList[i]%5==0)
            result.push(numList[i]);
    }
    return result;
}

const result = checkDivisibity([3, 10, 15, 20, 25, 30, 5]);
console.log(result);