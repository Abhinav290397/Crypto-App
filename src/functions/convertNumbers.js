const convertNumber = (number) => {
    const numberWithCommas = number.toLocaleString(); //It will give the commans to the number. eg: 354,251,77
    let arr = numberWithCommas.split(",");
    if(arr.length === 5){                   //246,554,120,778,021 => [246,554,120,778,021] => 246.55T
        return arr[0] + "." + arr[1].slice(0,2) + "T";
    }
    else if(arr.length === 4){
        return arr[0] + "." + arr[1].slice(0,1) +  "B";
    }
    else if(arr.length === 3){
        return arr[0] + "." + arr[1].slice(0,2) + "M";
    }
    else if(arr.length === 2){
        return arr[0] + "." +arr[1].slice(0,2) + "K";
    }
    else{  //hundreds
        return number.toLocaleString();
    }
};
export default convertNumber;