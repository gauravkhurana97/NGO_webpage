document.getElementById("contact_form").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  var name = e.target.elements.name.value;
  var date = e.target.elements.date.value;
  var Address = e.target.elements.Address.value;
  var number = e.target.elements.number.value;
  var Email = e.target.elements.Email.value;
  var Organistaion = e.target.elements.Organistaion.value;
  
if(document.getElementById('male').checked) {
    //Male radio button is checked
    gender="male";
  }else if(document.getElementById('female').checked) {
    //Female radio button is checked
    gender="female";
  }

  var obj = new Object();
  obj = {
    name,
    date,
    Address,
    number,
    Email,
    Organistaion,
    gender
  };
  
  savemessage(obj);
  document.querySelector(".alert").style.display = "block";

  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
    document.getElementById("contact_form").reset();
  }, 3000);
}

var messagesRef = firebase.database().ref("messages");

function savemessage(data) {
  var newMessageRefs = messagesRef.push();
  newMessageRefs.set({
    ...data
  });
}
