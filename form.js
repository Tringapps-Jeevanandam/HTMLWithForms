const dateChange = () => {
  let dob = new Date(document.getElementById("formdob").value);
  let currdate = new Date();
  console.log(currdate)
  let byear = dob.getFullYear();
  let bmnth = dob.getMonth();
  let mnth = currdate.getMonth();
  let year = currdate.getFullYear();
  let age = bmnth > mnth ? year - byear - 1 : year - byear;
  age = age <= 0 ? 0 : age;
  document.getElementById("formage").value = age;

  if (dob < currdate) {
    return true;
  } else {
    return false;
  }
};

const validateForm = () => {
  let name = document.getElementById("formName");
  let email = document.getElementById("formemail");
  let date = document.getElementById("formdob");
  let mobileno = document.getElementById("formMobileno");
  let errorMessage = "";

  if (name.value == "") {
    errorMessage += "Name must be filled out<br>";
  } else if (!/^[a-zA-Z]+$/.test(name)) {
    errorMessage += "Name must be alphabet<br>";
  }

  if (date.value == "") {
    errorMessage += "Date must be filled out<br>";
  } else if (!dateChange()) {
    errorMessage += "Date must be before today<br>";
  }

  if (email.value == "") {
    errorMessage += "Email must be filled out<br>";
  }

  if (mobileno.value == "") {
    errorMessage += "Mobile Number must be filled out<br>";
  } else if (!/^[6-9]\d{9}$/.test(mobileno)) {
    errorMessage += "Enter Valid mobile number<br>";
  }

  if (errorMessage != "") {
    document.getElementById("error").style.color = "red";
    document.getElementById("error").innerHTML = errorMessage;
    console.log(errorMessage);
    return false;
  } else {
    alert("Details submitted!!!");
    document.getElementById("error").innerHTML =
      "scroll down to view details<br><img src='down.svg' />";
    document.getElementById("error").style.color = "blue";
  }

  return true;
};

let currRow;
const onFormSubmit = () => {
  event.preventDefault();
  if (validateForm()) {
    readForm();
  }
};
let formData = [];
const readForm = () => {
  formData.push({
    name: document.getElementById("formName").value,
    dob: document.getElementById("formdob").value,
    age: document.getElementById("formage").value,
    email: document.getElementById("formemail").value,
    mobileno: document.getElementById("formMobileno").value,
  });
  renderForm(formData);
  console.log(formData);
  reset();
};

const renderForm = (formData) => {
  let tableData = "";
  for (let i of formData) {
    tableData +=
      "<tr><td>" +
      i.name +
      "</td><td>" +
      i.dob +
      "</td><td>" +
      i.age +
      "</td><td>" +
      i.email +
      "</td><td>" +
      i.mobileno;
  }
  document.getElementById("tbody").innerHTML = tableData;
};

const reset = () => {
  document.getElementById("formName").value = "";
  document.getElementById("formage").value = "";
  document.getElementById("formdob").value = "";
  document.getElementById("formemail").value = "";
  document.getElementById("formMobileno").value = "";
};
