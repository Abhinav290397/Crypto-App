const convertDate = (number) => {
    var myDate = new Date(number);
    return myDate.getDate() + "/" + (myDate.getMonth() + 1); //adding 1 becoz months in js started from 0.
}
export default convertDate;