let btn = document.querySelectorAll("button");
let input = document.getElementById("inputbox");
let string = "";

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let val = e.target.textContent;
    switch (val) {
        case "=":
        string = eval(string);
        input.value = string;
        break;

        case "AC":
            string="";
            input.value=string;
            break;

        case "DEL":
            string=string.substring(0,string.length-1);
            input.value=string;
            break;
        default:
            string += val;
            input.value = string;
        }
  });
});
