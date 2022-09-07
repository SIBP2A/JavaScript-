let max = 50;
let num = 0;
let count = 0;

while(num < max){
  num = num + 1;
    count++;
    switch(count){
      case 10:
      console.log("今" + count + "回ループしました。");
      break;
      case 20:
      console.log("今" + count + "回ループしました。");
      break;
      case 30:
      console.log("今" + count + "回ループしました。");
      break;
      case 40:
      console.log("今" + count + "回ループしました。");
      break;
      case 50:
      console.log("今" + count + "回ループしました。");
      break;
    }
    switch(count / 4){
      case 1:
        console.log("4で割れる数です。" + count);
        break;
      case 2:
        console.log("4で割れる数です。" + count);
        break;
      case 3:
        console.log("4で割れる数です。" + count);
        break;
      case 4:
        console.log("4で割れる数です。" + count);
        break;
      case 5:
        console.log("4で割れる数です。" + count);
        break;
      case 6:
        console.log("4で割れる数です。" + count);
        break;
      case 7:
        console.log("4で割れる数です。" + count);
        break;
      case 8:
        console.log("4で割れる数です。" + count);
        break;
      case 9:
        console.log("4で割れる数です。" + count);
        break;
      case 10:
        console.log("4で割れる数です。" + count);
        break;
      case 11:
      console.log("4で割れる数です。" + count);
        break;
      case 12:
        console.log("4で割れる数です。" + count);
        break;
    }
}
alert(count + "回カウントが終わりました。")