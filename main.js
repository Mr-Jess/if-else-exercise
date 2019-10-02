function isItLong(str) {
  if (str.length > 20) {
    return "That's a long string!"
  }
}

function isItMedium(str) {
  if (str.length >=10 && str.length <=20) {
    return "That's a regular sized string!"
  }
}

function isItShort(str) {
  if (str.length <= 10) {
    return "That's a small string!"
  }
}

function howLongIsMyString(str) {
  if (str.length >=10 && str.length <=20) {
    return "That's a regular sized string!";
  }
  else if (str.length > 20) {
    return "That's a long string!"
  }
  else if (str.length < 10) {
    return "That's a small string!"
  }
}

function instructorHeight(str) {
    if(str.length > 20) {
      return "That's a long string";
    } else if(str.length >=10 && str.length <=20) {
      return "That's a regular sized string!";
    } else if(str.length <= 10) {
      return "That's a short string!";
    } else {
      return str;
    }
  }
  
  console.log(instructorHeight(64));
}




module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}