var human_player = prompt("Do you choose 'rock', 'paper' or 'scissor'?");
var machine_player = Math.random();
var human_counter = 0;
var machine_counter = 0;
var letTheGameBegin_counter = 0;

// debugger

if (machine_player <= 0.33) {
  machine_player = 'rock';
} else if (machine_player <= 0.66) {
  machine_player = 'paper'
} else {
  machine_player = 'scissor';
}

function letTheGameBegin (answer1, answer2) {
  if (answer1 === 'rock') {
    if (answer2 === 'paper') {
      machine_counter += 1;
      return prompt('Rock over paper...Machine wins! Human = ' + human_counter + 'Machine = ' + machine_counter);
    } else {
      human_counter += 1;
      return prompt('Rock smash the scissor! Well done little human! Human = ' + human_counter + 'Machine = ' + machine_counter);
    }
  }
  if (answer1 === 'paper') {
    if (answer2 === 'rock') {
      human_counter += 1;
      return prompt('Ups, looks like someone was wrapped! Well done little human! Human = ' + human_counter + 'Machine = ' + machine_counter);
    } else {
      machine_counter += 1;
      return prompt('Auch! No need to be agressive Miss Scissor! Machine wins! Human = ' + human_counter + 'Machine = ' + machine_counter);
    }
  }
  if (answer1 === 'scissor') {
    if (answer2 === 'rock') {
      machine_counter += 1;
      return prompt('Rock smash the scissor! Machine Wins! Human = ' + human_counter + 'Machine = ' + machine_counter);
    } else {
      human_counter += 1;
      return prompt('Auch! No need to be agressive Miss Scissor! Well done little human! Human = ' + human_counter + 'Machine = ' + machine_counter);
    }
  }
  if (answer1 === answer2) {
    return prompt("The result is a tie!");
  }
}

// 
// while (true) {
//   function letTheGameBegin
//
// }
// for (var letTheGameBegin = 0; letTheGameBegin <= 5; letTheGameBegin++) {
//   return
// }
//
// letTheGameBegin(human_player, machine_player);
