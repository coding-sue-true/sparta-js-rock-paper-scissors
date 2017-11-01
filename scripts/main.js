var human_counter = 0;
var machine_counter = 0;
var letTheGameBegin_counter = 0;

// debugger

while (letTheGameBegin_counter < 6) {
  var human_player = prompt("Do you choose 'rock', 'paper' or 'scissor'?");
  var machine_player = Math.random();

  if (machine_player <= 0.33) {
    machine_player = 'rock';
  } else if (machine_player <= 0.66) {
    machine_player = 'paper';
  } else {
    machine_player = 'scissor';
  }

  function letTheGameBegin (answer1, answer2) {
    if (answer1 === answer2) {
      return alert("The result is a tie!");
    } else if (answer1 === 'rock') {
      if (answer2 === 'paper') {
        machine_counter += 1;
        return alert('Rock over paper...Machine wins! Human = ' + human_counter + ' Machine = ' + machine_counter);
      } else if (answer2 === 'scissor'){
        human_counter += 1;
        return alert('Rock smashes the scissor! Well done little human! Human = ' + human_counter + ' Machine = ' + machine_counter);
      }
    } else if (answer1 === 'paper') {
      if (answer2 === 'rock') {
        human_counter += 1;
        return alert('Ups, looks like someone was wrapped! Well done little human! Human = ' + human_counter + ' Machine = ' + machine_counter);
      } else {
        machine_counter += 1;
        return alert('Auch! No need to be agressive Miss Scissor! Machine wins! Human = ' + human_counter + ' Machine = ' + machine_counter);
      }
    } else if (answer1 === 'scissor') {
      if (answer2 === 'rock') {
        machine_counter += 1;
        return alert('Rock smashes the scissor! Machine Wins! Human = ' + human_counter + ' Machine = ' + machine_counter);
      } else {
        human_counter += 1;
        return alert('Auch! No need to be agressive Miss Scissor! Well done little human! Human = ' + human_counter + ' Machine = ' + machine_counter);
      }
    }
  }
letTheGameBegin_counter++;
letTheGameBegin(human_player, machine_player);
}
