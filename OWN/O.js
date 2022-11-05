let workDay=document.getElementById("p");
var Today = new Date();
workDay.innerText="今天是" + Today.getFullYear() + "年" + (Today.getMonth() + 1) + "月" + Today.getDate() + "號";