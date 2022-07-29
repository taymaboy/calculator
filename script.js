console.log('1');
// Создал переменную для дисплея
let display = document.getElementById("display");

// Создал массив из всех кнопок
let buttons = Array.from(document.getElementsByTagName("button"));

// // Отслеживаю каждый клик по всем кнопкам
buttons.map((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.innerText) {
      case "AC":
        display.innerText = "";
        break;

      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case "=":
        if (
          display.innerText.endsWith(".") ||
          display.innerText.endsWith("/") ||
          display.innerText.endsWith("*") ||
          display.innerText.endsWith("+") ||
          display.innerText.endsWith("-")
        ) {
          display.innerText = display.innerText.slice(0, -1);
        }
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;

      case "/":
        if (
          display.innerText === "" ||
          display.innerText.endsWith(".") ||
          display.innerText.endsWith("/") ||
          display.innerText.endsWith("*") ||
          display.innerText.endsWith("+") ||
          display.innerText.endsWith("-")
        ) {
          display.innerText = display.innerText;
        } else {
          display.innerText += event.target.innerText;
        }
        break;

      case "*":
        if (
          display.innerText === "" ||
          display.innerText.endsWith(".") ||
          display.innerText.endsWith("*") ||
          display.innerText.endsWith("/") ||
          display.innerText.endsWith("+") ||
          display.innerText.endsWith("-")
        ) {
          display.innerText = display.innerText;
        } else {
          display.innerText += event.target.innerText;
        }
        break;

      case "+":
        if (
          display.innerText === "" ||
          display.innerText.endsWith(".") ||
          display.innerText.endsWith("*") ||
          display.innerText.endsWith("/") ||
          display.innerText.endsWith("+") ||
          display.innerText.endsWith("-")
        ) {
          display.innerText = display.innerText;
        } else {
          display.innerText += event.target.innerText;
        }
        break;

      case "-":
        if (display.innerText === "") {
          display.innerText = event.target.innerText;
        } else if (
          display.innerText.endsWith(".") ||
          display.innerText.endsWith("-")
        ) {
          display.innerText = display.innerText;
        } else {
          display.innerText += event.target.innerText;
        }
        break;

      case ".":
        if (
          display.innerText === "" ||
          display.innerText.endsWith(".") ||
          display.innerText.endsWith("/") ||
          display.innerText.endsWith("*") ||
          display.innerText.endsWith("+") ||
          display.innerText.endsWith("-")
        ) {
          display.innerText = display.innerText;
        } else {
          display.innerText += event.target.innerText;
        }
        break;

      default:
        display.innerText += event.target.innerText;
    }
  });
});
