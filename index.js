function scuberGreetingForFeet(someValue){
  let result;
  if (someValue <= 400) {
    result = 'This one is on me!';
  } else if (400 < someValue && someValue <= 2000 ) {
    result = 'That will be twenty bucks.';
  } else if (someValue > 2000 && someValue < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else  if (2500 < someValue){
    result = 'No can do.';
  }
  return result
}

function ternaryCheckCity(city){
  let result = (city == 'NYC') ? "Ok, sounds good." : "No go.";
  return result
}

function switchOnCharmFromTip(message){
  let result;

  switch(message) {
    case 'generous': 
      result = "Thank you so much.";
      break;
    case 'not as generous':
      result = "Thank you.";
      break;
    default:
      result = "Bye."
  }
  return result
}