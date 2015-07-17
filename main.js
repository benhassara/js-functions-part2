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
  var warr = str.split(" ");
  var longest = "";
  for (var i = 0; i < warr.length; i++) {
    if (warr[i].length > longest.length)
      longest = warr[i];
  }
  return longest;
}
