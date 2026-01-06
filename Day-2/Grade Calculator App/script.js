let input = document.getElementById("marksInput");
let btn = document.getElementById("btn");
let grade_display = document.getElementById("grade_display");
let pass_fail_display = document.getElementById("pass_fail_display");

btn.addEventListener('click',gradeCalc);

function gradeCalc() {
  let num = Number(input.value);

  
  if (input.value.trim()===" " || num < 0 || num > 100) {
    grade_display.textContent="Enter a valid marks ";
    pass_fail_display.textContent="-";
    return;
  } 
    if (num >= 90 && num <= 100) {
      grade_display.textContent="A";
    } else if (num >= 75 && num <= 89) {
      grade_display.textContent="B";
    } else if (num >= 60 && num < 75) {
      grade_display.textContent="C";
    } else if (num >= 40 && num < 60) {
      grade_display.textContent="D";
    } else {
      grade_display.textContent="F";
    }
 

  if(num<40) {
    pass_fail_display.textContent="Fail"
  } else {
    pass_fail_display.textContent="Pass"
  }


}
