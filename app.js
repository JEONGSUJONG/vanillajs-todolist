const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  alert("Please write a real positive number.");
} else if (age < 18) {
  alert("You are too young.");
} else if (age >= 18 && age <= 50) {
  alert("You can drink.")
} else if (age > 50 && age <= 80) {
  alert("You should exercise.")
} else if (age > 80) {
  alert("You can do whatever you want.")
}