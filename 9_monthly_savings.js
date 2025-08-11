const monthly_savings = (array, number) => {
    if(Array.isArray(array) && Number.isInteger(number)) {
        let sum = 0;
        for(let i=0; i<array.length; i++) {
            if(array[i]>=3000)
                sum += (array[i]-(array[i]*0.2));
            else sum += array[i];
        }
        sum -= number;
        if(sum >= 0) console.log("Total savings:", sum);
        else console.log("\"earn more\"");
    }
    else console.log("Invalid input!")
}

monthly_savings([900, 2700, 3400], 10000);