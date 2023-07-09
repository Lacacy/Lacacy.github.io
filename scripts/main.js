let myHeading = document.querySelector('h1');
myHeading.textContent = '你好 中国!';
// 弹窗
alert("I love you!");

// 好消息是：人人都能定义自己的函数。下面的示例是为两个参数进行乘法运算的函数：

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
// Copy to Clipboard
// 尝试在控制台运行这个函数，不妨多试几组参数，比如：

multiply(4, 7);
multiply(20, 20);
// multiply(0.5, 3);

let myImage = document.querySelector('img');
// 一个点击事件, 对 已经获取的img 对象进行切换操作;
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bus.png') {
      myImage.setAttribute('src', 'images/duck.jpeg');
    } else {
      myImage.setAttribute('src', 'images/bus.png');
    }
}


function changeImg(imgName)
{
	let mySrc = myImage.getAttribute('src');
	myImage.setAttribute('src', imgName);
}



let myButton = document.querySelector('button');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  if (myName == '鸭鸭')
  	changeImg("images/duck.jpeg");
  else if (myName == '熊熊')
  	  	changeImg("images/bear.jpeg");	
  else
  	  	changeImg("images/bus.png");	
  myHeading.textContent = '中国 酷毙了，' + myName;
  localStorage.setItem('name', '鸭鸭仔');
}

myButton.onclick = function() {
   setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '中国 酷毙了，' + storedName;
  	changeForDuck();
}
