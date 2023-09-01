

function fibonacci(n) {
  if (n <= 0) {
   alert("الرجاء إدخال رقم موجب.")
  } else if (n === 1) {
    alert("0")
  } else {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
      fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    alert(fibArray.join(", "))
  }
}

let n = parseInt(prompt("الرجاء إدخال عدد صحيح موجب: "));
fibonacci(n);

