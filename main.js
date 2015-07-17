function oldestPerson(people) {
  //people is obj: {'Chuck': 22, 'Brian': 46}
  var oldest = "";
  for (var name in people) {
    if (oldest === "")
      oldest = name;
    else if (people[name] > people[oldest]) {
      oldest = name;
    }
  }
  return oldest;
}

function longestWord(str) {
  var warr = str.split(/\W/);
  var longest = "";
  for (var i = 0; i < warr.length; i++) {

    if (warr[i].length > longest.length)
      longest = warr[i];
  }
  return longest;
}

function factorial(num) {
  var total = 1;
  for (var i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

function palindrome(str) {
  var rev = "";
  var comp = str.replace(/\s+/g, "");
  // console.log("comp: ", comp);
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ")
      continue;
    rev += str[i];
  }
  // console.log(rev);
  if (comp.toLowerCase() === rev.toLowerCase())
    return true;
  else
    return false;
}
