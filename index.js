function writeCards(names,event) {
  let message = []
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return message;
}

writeCards(["Guadalupe", "Ollie", "Aki"],"surprise");

function countDown(){
for (let countdown = 0; countdown < 11; countdown++) {
  console.log(countdown);
}
}