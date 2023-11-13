const calculadora = require("../../models/calculadora.js");

test("Espera que a soma de 2 + 2 sejá 4", () => {
  const resultado = calculadora.soma(2, 2);
  expect(resultado).toBe(4);
});

test("Espera que a soma de 2 * 50 sejá 500", () => {
  const resultado = calculadora.soma(2, 50);
  expect(resultado).toBe(100);
});

test("Espera que se não for um número retorne erro", () => {
  const resultado = calculadora.soma(2, "banana");
  expect(resultado).toBe("Error");
});
