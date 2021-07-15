import {checkEmail, checkPassword, checkOtp, checkName, checkDob, checkFee} from "./helper_functions";
export function isEmail(email) {
    if(email === '') {
      return false;
    } else if (!checkEmail(email)) {
      return false;
    } else {
      return true;
    }  
  }

  export function isBlank(value) {
    if(value === '') {
      return false;
    } else {
      return true;
    }  
  }

export function isPass(password) {
    if(password === '') {
      return false;
    }else if (!checkPassword(password)) {
      return false;
    }
    else {
      return true;
    }
  }
export function isCpass(password2) {
    const pass = document.getElementById('pass').value;
    if(password2 === '') {
      return false;
    } else if(pass !== password2) {
      return false;
    } else{
      return true;
    }
  }
  
  export function isOtp(otp) {
    if(otp === '') {
      return false;
    }else if (!checkOtp(otp)) {
      return false;
    } else if(otp.length !== 6) {
      return false;
    } else {
      return true;
    }
}

export function checkValue(obj, message) {
  setErrorFor(obj, message);
}

export function isName(event) {
  const obj =document.getElementById(event.target.id);
  if(event.target.value.length < 3) {
    setErrorFor(obj, 'name must be in 3 character');
  } else if (!checkName(event.target.value)) {
    setErrorFor(obj, 'Not a valid name');
  } else {
    setSuccessFor(obj);
  }
}
export function isNumber(value) {
    if(!checkOtp(value)) {
      return false;
    } else {
      return true;
    }
}

export function isFee(value) {
    if(!checkFee(value))
      return false;
    return true;
}
export function isDob(event) {
  const obj = document.getElementById(event.target.id);
    if (!checkDob(event.target.value)) {
      setErrorFor(obj, 'Not a valid date of birth');
    } else {
      setSuccessFor(obj);
    }
}


  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'signupform-control error';
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'signupform-control success';
  }
  