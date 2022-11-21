console.log('Project of gettting info of customer along with about car and then order it.')

// Validating name, email and phone numberr

let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let validName = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();

// console.log(name , email , phone)

name.addEventListener('blur', () => {
    console.log('Blurred event has been triggered')
    // Validate name here
    let regular = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;
    let string = name.value;
    console.log(regular, string)
    if (regular.test(string)) {
        console.log('You can proceed further')
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log('You can not proceed further')
        name.classList.add('is-invalid');
        validName = false;
    }
})
email.addEventListener('blur', () => {
    console.log('Blurred event has been triggered')
    // Validate email here
    let regular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ///^([a-zA-Z0-9_\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let string = email.value;
    console.log(regular, string)
    if (regular.test(string)) {
        console.log('You can proceed further')
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('You can not proceed further')
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log('Blurred event has been triggered')
    // Validate phonenumber here
    let regular = /^[0-9]{11}$/;
    let string = phone.value;
    console.log(regular, string)
    if (regular.test(string)) {
        console.log('You can proceed further')
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('You can not proceed further')
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})


// Submit Button

let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    console.log('You clicked the submit button');

    //Submit your form here

    if (validEmail && validName && validPhone) {
        console.log('Name , Email and Phone Number are valid')
        let success = document.getElementById('success')
        success.classList.add('show')
        //failure.classList.remove('show')
        $('#success').show();
        $('#failure').hide();
    }
    else {
        console.log('Information is not valid')
        let failure = document.getElementById('failure')
        failure.classList.add('show')
        //success.classList.remove('show')
        $('#success').hide();
        $('#failure').show();
    }
})