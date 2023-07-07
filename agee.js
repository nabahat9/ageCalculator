  const outputYear = document.querySelector(".yearO");
  const outputMonth = document.querySelector(".monthO");
  const outputDay = document.querySelector(".dayO");

  const inputDay = document.querySelector("#dayI");
  const inputMonth = document.querySelector("#monthI");
  const inputYear = document.querySelector("#yearI");

  const errorDay = document.querySelector(".error_day");
  const errorMonth = document.querySelector(".error_month");
  const errorYear = document.querySelector(".error_year");

  let isValid = true;

  inputDay.addEventListener("input", (e) =>{
    if (inputDay.value > 31) {
      errorDay.textContent = "Must be a valid day";
      isValid = false;
      return;
    }else if (+inputDay.value === 0) {
      errorDay.textContent = "The field is required";
      isValid = false;
      return;
    } else {
      errorDay.textContent = "";
    }
  });

  inputMonth.addEventListener("input", (e)=> {
    if (+inputMonth.value > 12) {
      errorMonth.textContent = "Must be a valid month";
      isValid = false;
      return;
    }

   else if (+inputMonth.value === 0) {
      isValid = false;
      errorMonth.textContent = "The field is required";
      return;
    } else {
      errorMonth.textContent = "";
    }
  });

  inputYear.addEventListener("input", (e) => {
    const today = new Date();
    if (+inputYear.value > today.getFullYear()) {
      errorYear.textContent = "Must be a valid year";
      isValid = false;
      return;
    } else {
      errorYear.textContent = "";
    }
  });

  function calculateDate() {
    if (!isValid) {
      // Handle the case when isValid is false
      // ...
      return;
    }
  
    const birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
const birthdayObject = new Date(birthday);
const diffDate = Date.now() - birthdayObject.getTime();

const years = Math.floor(diffDate / (1000 * 60 * 60 * 24 * 365));
const months = Math.floor(diffDate / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
const day = Math.floor(diffDate / (1000 * 60 * 60 * 24)) % 30.4375;
const days = Math.trunc(day);

    outputYear.innerHTML = `<h1><span>${years}</span> years</h1>`;
    outputMonth.innerHTML = `<h1><span>${months}</span> months</h1>`;
    outputDay.innerHTML = `<h1><span>${days}</span> days</h1>`;
    
  }
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', calculateDate);
    
  
