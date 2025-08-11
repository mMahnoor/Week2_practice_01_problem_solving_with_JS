const even_odd = (number) => {
    if(parseInt(number)%2==0) {
        console.log("The number", number, "is an even number.");
    }
    else {
        console.log("The number", number, "is a odd number.");
    }
}

even_odd(6);