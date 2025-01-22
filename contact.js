const firebaseConfig = {
    apiKey: "AIzaSyCuEiovM2eRRMgMj9Xi7DLGYVkgoumqWZA",
    authDomain: "contact-fec39.firebaseapp.com",
    databaseURL: "https://contact-fec39-default-rtdb.firebaseio.com",
    projectId: "contact-fec39",
    storageBucket: "contact-fec39.firebasestorage.app",
    messagingSenderId: "77225982105",
    appId: "1:77225982105:web:5f90a6b86a1757d0876008"
  };

  firebase.initializeApp(firebaseConfig);

  const contactFormDB = firebase.database().ref('contact')

  document.getElementById('contact').addEventListener('submit', submitForm);

  function submitForm(e){ 
    e.preventDefault();

    var first = getElementVal('firstName');
    var last = getElementVal('lastName');
    var email = getElementVal('email');
    var message = getElementVal('message');
    alert('Your message has been sent!');
    saveContactForm(first, last, email, message); 

    
  }
  

  const saveContactForm = (first, last, email, message) => {
    var newContactFormDB = contactFormDB.push(); 

    newContactFormDB.set({
        first: first,
        last: last,
        email: email,
        message: message
              });
        };
        

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  }


  