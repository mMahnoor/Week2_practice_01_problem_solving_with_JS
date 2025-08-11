export const findMax = (numList) => {
    let max = numList[0];
    for(let i=1; i<numList.length; i++)
    {
        if(numList[i]>max)
            max = numList[i];
    }
    return max;
}

const max = findMax([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10])
console.log(max);