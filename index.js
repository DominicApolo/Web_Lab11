function Password() {
  // to show hidden password when box is checked
  var x = document.getElementById("Pass");
    if (x.type === "password") {
      x.type = "text";
  } else {
          x.type = "password";
        }
}

function fakeGame() {
  // assumes: alert
  // results: alert for "Let's Play a Game" when clicked
  alert("Just Kidding, There are no games :(")
}

function submitform() {
  // assumes: function show alert when Username and Password are empty
  var name;
    name = document.getElementById("Uname").value;
  if (name == "") {
    alert("Missing Information Required!!");
    return false;

  }
  // results: display of Username and Password
  document.getElementById('outputDiv').innerHTML='<p> Hello ' +
  document.getElementById('Uname').value + '. Your Password is ' +
  document.getElementById('Pass').value + '. Keep it a secret.</p>';
}

function generatePills() {
  // function show alert when Username and Password are empty
  var name=document.getElementById("Uname").value;
  if (name == "") {
    alert("Woah Woah! You'll have to fill in the boxes before you can generate a pill!");
    return false;
  }
  // output of the pills after "Generate Pills" button is clicked
  document.getElementById('outputDiv').innerHTML='<p> Hello ' +
  document.getElementById('Uname').value + '. Your Password is ' +
  document.getElementById('Pass').value + '. Keep it a secret.</p>';

  var lists = ['RED', 'BLUE'];
  var list = lists[Math.floor(Math.random()*lists.length)];
      document.getElementById('pilloutput').innerHTML= '<i>You have been given the <b>' + list + '</b> pill. <i> Now that you have been given the <b>' + list + '</b> pill, move on to the second part of this game. ';
    if (list == 'BLUE') {
      document.getElementById('pilloutput').innerHTML= '<i> You have been given the <b>' + list + '</b> pill. Sorry, you lost <i>';
      return false;
    }
}

function spin2win() {

  var name=document.getElementById("Uname").value;
  if (name == "") {
    alert("Woah there buddy! We still need some information from you.");
    return false;
  }

//Assumes: generating random icons from variable without using RandomOneOf
//Results: icons are randomly generated
  var spin = ['color/100/000000/pikachu-pokemon', 'doodle/100/000000/tiger', 'metro/100/000000/ninja-turtle', 'metro/100/000000/7-circle'];

  spin1 = spin[Math.floor(Math.random()*spin.length)];
  spin2 = spin[Math.floor(Math.random()*spin.length)];
  spin3 = spin[Math.floor(Math.random()*spin.length)];
  document.getElementById('spin1').src=
    'https://img.icons8.com/' + spin1 + '.png';
  document.getElementById('spin2').src=
    'https://img.icons8.com/' + spin2 + '.png';
  document.getElementById('spin3').src=
    'https://img.icons8.com/' + spin3 + '.png';

}

function spinSubmit() {
  var points;

  points = parseFloat(document.getElementById('pointBox').value);

  if (points < 10) {
    document.getElementById('OutputSpin').innerHTML='You Lost! Better luck next time';
  }

  if (points >= 10) {
    document.getElementById('OutputSpin').innerHTML='Yay! You Win!';
  }
}
