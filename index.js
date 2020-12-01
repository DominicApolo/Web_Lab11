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

  var pill1
  // variable choses random of red and blue pill
    pill1 = RandomOneOf(['RED', 'BLUE']);
      document.getElementById('pilloutput').innerHTML= '<i>You have been given the <b>' + pill1 + '</b> pill. <i> Now that you have been given the <b>' + pill1 + '</b> pill, move on to the second part of this game. ';
    if (pill1 == 'BLUE') {
      document.getElementById('pilloutput').innerHTML= '<i> You have been given the <b>' + pill1 + '</b> pill. Sorry, you lost <i>';
      return false;
    }
}

function spin2win() {

  var name=document.getElementById("Uname").value;
  if (name == "") {
    alert("Woah there buddy! We still need some information from you.");
    return false;
  }

  var spin1, spin2, spin3;

  spin1 = RandomOneOf(['color/100/000000/pikachu-pokemon', 'doodle/100/000000/tiger', 'metro/100/000000/ninja-turtle', 'metro/100/000000/7-circle']);
  spin2 = RandomOneOf(['color/100/000000/pikachu-pokemon', 'doodle/100/000000/tiger', 'metro/100/000000/ninja-turtle', 'metro/100/000000/7-circle']);
  spin3 = RandomOneOf(['color/100/000000/pikachu-pokemon', 'doodle/100/000000/tiger', 'metro/100/000000/ninja-turtle', 'metro/100/000000/7-circle']);

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
