import "./styles.css";
const resultado = fizzBuzz(9);
console.log(resultado);

function fizzBuzz(e) {
  if (typeof e !== "number") return "Nao é um numero";
  if (e % 3 === 0 && e % 5 === 0) return "FizzBuzz";
  if (e % 3 === 0) return "Fizz";
  if (e % 5 === 0) return "Buzz";
  else return e;
}
