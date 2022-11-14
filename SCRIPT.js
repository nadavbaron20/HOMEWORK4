let overAllPrice = 0;

function orderPizza() {
let a = prompt("Hello do you want to order our special hot Pizza yes or no?");
if (a == "no") { 
alert("you lost, we have testy piza");
orderPizza();

} else 
if (a == "yes") { 
console.log("Pizza put in oven ");
overAllPrice = overAllPrice + 40;
alert("you just add 1 Pizza your order is " + overAllPrice + " Nis"); 
}

let b = prompt(  "do you want something else with your Pizza? we have lettuce, pickles and tomato?");

if (b == "lettuce") {
  overAllPrice = overAllPrice + 3;
  alert("you just add Extra Hasha");
  alert("your order is " + overAllPrice);

  let lettuce = prompt("you just add Extra lettuce your order is " + overAllPrice + " Nis");

  if (lettuce == "pickles") {
    overAllPrice = overAllPrice + 3;
    alert("you just add Extra pickles thank you Sir ");
    alert("your order is " + overAllPrice);
  }
  if (lettuce == "tomato") {
    overAllPrice = overAllPrice + 5;
    alert("you just add Extra tomato Thank you Sir ");
    alert("your order is " + overAllPrice);
  } else 
  if (lettuce == "nothing") {
  alert("thank you Sir see you in the total");
  }
}
}

if (b == "pickles") {
overAllPrice = overAllPrice + 3;
alert("you just add Extra pickles your order is " + overAllPrice + " Nis");

let pickles = prompt("do you want somthing else like lettuce, tomato or nothing ?");

if (pickles == "lettuce") {
  overAllPrice = overAllPrice + 3;
  alert("you just add Extra pickles your order is " + overAllPrice + " Nis");
}

if (pickles == "tomato") {
overAllPrice = overAllPrice + 5;
alert("you just add Extra tomato your order is " + overAllPrice + " Nis");

} else 
if (pickles == "nothing") {
alert("thank you Sir see you in the total");
}
} else if (b == "tomato") {
overAllPrice = overAllPrice + 5;
alert("you just add Extra tomato your order is " + overAllPrice + " Nis");

let tomato = prompt("do you want somthing else like lettuce, pickles or nothing ?");
if (tomato == "lettuce") {
overAllPrice = overAllPrice + 5;
alert("you just add Extra lettuce your order is " + overAllPrice + " Nis");
}

if (tomato =="pickles") {
overAllPrice = overAllPrice + 5;
alert("you just add Extra pickles your order is " + overAllPrice + " Nis");
} 
else if (tomato == "nothing") {
alert("thank you Sir see you in the total");
}
}

function addhamburger() {
let a = prompt("Hello do you want to order our special hamburger yes or no?");
if (a == "no") {
alert("you lost, we have testy hamburger");
addhamburger();
} else 
if (a == "yes") {
console.log("we making hamburger for you");
overAllPrice = overAllPrice + 43;
alert("you just add 1 hamburger your order is " + overAllPrice + "Nis");
}

let b = prompt("do you want some thing extra with your hamburger we have lettuce, pickles and tomato?");

if (b == "lettuce") {
overAllPrice = overAllPrice + 2;
alert(  "you just add Extra lettuce do you want somthing else like, tomato, or nothing ?");
}

let hasha = prompt("Only Hasha! you can add pickles, tomato, or nothing ?");
if (hasha == "pickles") {
    overAllPrice = overAllPrice + 5;
    alert("you just add Extra pickles thank you Sir ");
    alert("your order is " + overAllPrice);
    let du = prompt(
      "do want your hamburger with ketchup, mayonnaise or nothing ?"
    );
    if (du == "ketchup") {
      alert("you just add ketchup to your hamburger");
    }
    if (du == "mayonnaise") {
      alert("you just add mayonnaise to your hamburger");
    } else if (du == "nothing") {
      alert("thank you Sir enjoy your meal");
    }
  }
  if (hasha == "tomato") {
    overAllPrice = overAllPrice + 5;
    alert("you just add Extra tomato Thank you Sir ");
    alert("your order is " + overAllPrice);
  }
  let du = prompt(
    "do want your hamburger with ketchup, mayonnaise or nothing ?"
  );

  if (du == "ketchup") {
    alert("you just add ketchup to your hamburger");
  }
  if (du == "mayonnaise") {
    alert("you just add mayonnaise to your hamburger");
  } else if (du == "nothing") {
    alert("thank you Sir enjoy your meal");
  } else if (hasha == "nothing") {
    alert("thank you Sir see you in the total");
  }
}
if (b == "pickles") {
overAllPrice = overAllPrice + 5;
alert("you just add Extra pickles ");
let pickles = prompt("Only pickles! you can add hasha, tomato or nothing ?");
if (pickles == "lettuce") {
  overAllPrice = overAllPrice + 5;
  alert("you just add Extra lettuce thank you Sir ");
  alert("your order is " + overAllPrice);
}
if (pickles == "tomato") {
overAllPrice = overAllPrice + 5;
alert("you just add Extra tomato Thank you Sir ");
alert("your order is " + overAllPrice);
} else 
if (pickles == "nothing") {
alert("thank you Sir see you in the total");
}
} 
else if (b == "tomato") {
overAllPrice = overAllPrice + 5;
alert("you just add Extra tomato ");
let tomato = prompt("Only tomato! you can add lettuce, pickles or nothing ?");
if (tomato == "lettuce") {
  overAllPrice = overAllPrice + 5;
alert("you just add Extra lettuce thank you Sir ");
alert("your order is " + overAllPrice);
let du = prompt(
"do want your hamburger with ketchup, mayonnaise or nothing ?"
);
if (du == "ketchup") {
alert("you just add ketchup to your hamburger");
}
if (du == "mayonnaise") {
alert("you just add mayonnaise to your hamburger");
} else if (du == "nothing") {
alert("thank you Sir enjoy your meal");
}
}
if (tomato == "pickles") {
overAllPrice = overAllPrice + 5;
alert("you just add Extra pickles Thank you Sir ");
let du = prompt("do want your hamburger with ketchup, mayonnaise or nothing ?");
if (du == "ketchup") {
alert("you just add ketchup to your hamburger");
}
if (du == "mayonnaise") {
alert("you just add mayonnaise to your hamburger");
} else 
if (du == "nothing") {
alert("thank you Sir enjoy your meal");
}
} else 
if (tomato == "nothing") {
alert("thank you Sir see you in the total");
}
}

function addTotal() {
alert("the price is " +
overAllPrice);
}





