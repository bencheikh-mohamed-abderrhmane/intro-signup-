let form = document.querySelector(".form");
console.log(document.querySelector(".form-button"));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  let first_name = formData.get("first");
  let last_name = formData.get("last");
  let email = formData.get("email");
  let password = formData.get("password");
  if (first_name === "") {
    document.querySelector('input[name="first"]').classList.add("red-border");
    let errorElement = document.createElement("p");
    let errorMsg = document.createTextNode("Error, no first name entered");
    errorElement.appendChild(errorMsg);
    errorElement.classList.add("error");
    first_element = document.querySelector('input[name="first"]');
    form.insertBefore(errorElement, first_element.nextSibling);
  }
});
let errorElements = document.createElement("p");
let errorMsga = document.createTextNode("error,no last name entered");
errorElements.appendChild(errorMsga);
errorElements.classList.add("error");
first_elements = document.querySelector('input[name="last"]');
form.insertBefore(errorElements, first_elements.nextSibling);

let errorElementss = document.createElement("p");
let errorMsgaa = document.createTextNode("error,no email");
errorElementss.appendChild(errorMsgaa);
errorElementss.classList.add("error");
first_elementss = document.querySelector('input[name="email"');
form.insertBefore(errorElementss, first_elementss.nextSibling);

let errorElementsss = document.createElement("p");
let errorMsgaaa = document.createTextNode("error,no password");
errorElementsss.appendChild(errorMsgaaa);
errorElementsss.classList.add("error");
first_elementsss = document.querySelector('input[name="password"');
form.insertBefore(errorElementsss, first_elementsss.nextSibling);




