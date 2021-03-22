const fs = require("fs");


function rus_to_latin(str) {
  var ru = {
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "e",
      ж: "j",
      з: "z",
      и: "i",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "h",
      ц: "c",
      ч: "ch",
      ш: "sh",
      щ: "shch",
      ы: "y",
      э: "e",
      ю: "u",
      я: "ya"
    },
    n_str = [];

  str = str.replace(/[ъь]+/g, "").replace(/й/g, "i");

  for (var i = 0; i < str.length; ++i) {
    n_str.push(
      ru[str[i]] ||
        (ru[str[i].toLowerCase()] == undefined && str[i]) ||
        ru[str[i].toLowerCase()].toUpperCase()
    );
  }

  return n_str.join("");
}

let rawdata = fs.readFileSync("./russian-cities.json");
let student = JSON.parse(rawdata);


student.forEach((element, index) => {
  console.log(rus_to_latin(element.name));
  student[index].latinName = rus_to_latin(element.name)
});
console.log(student);
let json = JSON.stringify(student);

fs.writeFile('cities.json', json, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});