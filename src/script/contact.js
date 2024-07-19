/* const contactForm = document.querySelector('.contact_form');
let contactName = document.getElementById('contactname');
let contactEmail = document.getElementById('contactemail');
let contactMessage = document.getElementById('contactmessage');
const messageSent = document.querySelector('.messageSent');
const submitBtn = document.querySelector('#sendbtn'); */

/* const handleFocusName = () => {
  messageSent.innerText = 'You already sent a message, wait 5minutes to send another one.';
  messageSent.style.display = 'block';
};

const handleBlurName = () => {
  messageSent.style.display = 'none';
  messageSent.innerText = 'Thanks for message!';
};
 */
/* contactForm.addEventListener('submit', e => {
  e.preventDefault(); */
/*
  let formData = {
    name: contactName.value,
    email: contactEmail.value,
    message: contactMessage.value,
  } */

// console.log(JSON.stringify(formData));
/*   fetch('http://localhost:4000/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(data => {
      if (data.status === 200) {
        contactName.value = '';
        contactEmail.value = '';
        contactMessage.value = '';
        messageSent.style.display = 'block';
        // contactName.addEventListener('focus', handleFocusName);
        // contactName.addEventListener('blur', handleBlurName);
        window.setTimeout(() => {
          messageSent.style.display = 'none';
        }, 5000);
      } else {
        messageSent.innerText = 'Something went wrong.';
      }
    }) */

// submitBtn.setAttribute('disabled', '');

// window.setTimeout(
//   () => {
//     submitBtn.removeAttribute('disabled');
//     contactName.removeEventListener('focus', handleFocusName);
//     contactName.removeEventListener('blur', handleBlurName);
//     messageSent.style.display = 'none';
//     messageSent.innerText = 'Thanks for message!';
//   }, 300000)
/* }); */
