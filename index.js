let userName = "Rémy";
let age = "27";
let city = "Nique";
let email = "gotogether@gmail.com";
let ami = ["Nicolas", "Mange du chocolat"];

let pop = ami.pop();

city = "Grenoble";

let user = {
  name: userName,
  age: age,
  city: city,
  email: email,
  ami: ami,
};

user.city = "Montrevel";
ami.push("est encore la.");
ami[0] = "Rémy";

for (let i = 0; i < user.ami.length; i++) console.log(user.ami);
if (user.age <= 18) console.log(user.age, "Mineur");
else if (user.age >= 18 && user.age <= 25)
  console.log(user.age, "Jeune Adulte");
else console.log("Adulte");

function saluerUtilisateur(prenom) {
  console.log("Welcome", prenom);
}
saluerUtilisateur("Rémy");

function calculerAnneeNaissance(age) {
  return 2025 - age;
}
console.log(calculerAnneeNaissance(27));

function verifierMajoriter(age) {
  if (age >= 18) {
    return true;
  } else return false;
}
console.log(verifierMajoriter(27));

function afficherProfils() {
  console.log(
    `${user.name} \n ${user.age} \n ${user.city} \n ${user.email} \n ${user.ami}`
  );
}

function ajouterunAmi() {
  user.ami.push("Chicken");
  console.log(user.ami);
}

ajouterunAmi();

function supprimerunAmi(prenom) {
  user.ami = user.ami.filter((ami) => ami != prenom);
}
supprimerunAmi('Rémy')
console.log(user);
