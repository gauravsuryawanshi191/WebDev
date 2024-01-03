const {getName, getDate}= require('./module3');
console.log(
    getName()+" on "+getDate().getDate()+"/"+getDate().getMonth()+1+"/"+getDate().getFullYear()
);