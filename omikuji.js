let userName;
let userResult;
//user input
userName = prompt("お名前を教えてください。");
//default value
if (userName == "") {
    userName = "名無し";
}
document.getElementById("name").innerHTML = userName;
let rand = Math.floor(Math.random() * 5);
//result generator
switch (rand)
{
    case 0:
        userResult = "大吉";
        break;
    case 1:
        userResult = "中吉";
        break;
    case 2:
        userResult = "小吉";
        break;
    case 3:
        userResult = "吉";
        break;
    case 4:
        userResult = "凶";
        break;
}
document.getElementById("result").innerHTML = userResult;


/*
let userName;
let userResult;

userName = prompt("お名前を教えてください。");
if (userName == "") {
    userName = "名無し";
}
document.getElementById("name").innerHTML = userName;
let rand = Math.floor( Math.random() * 5) ;
if (rand == 0){
    userResult = "大吉";
    }
if (rand == 1){
    userResult = "中吉";
    }
if (rand == 2){
    userResult = "小吉";
    }
if (rand == 3){
    userResult = "吉";
    }
if (rand == 4){
    userResult = "凶";
    }
document.getElementById("result").innerHTML = userResult;
*/