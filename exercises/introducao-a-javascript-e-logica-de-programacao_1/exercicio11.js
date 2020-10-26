var salarioBruto = 6000;
var salarioBase, salarioLiquido;
var IR = 0;

if (salarioBruto <= 1556.94) { IR = salarioBruto * 0.08; }
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) { IR = salarioBruto * 0.09; }
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) { IR = salarioBruto * 0.11; }
else if (salarioBruto >= 5189.93) { salarioBase = salarioBruto - 570.88; }

if (IR > 0){ salarioBase = salarioBruto - IR; }

if (salarioBase >= 1903.99 && salarioBase <= 2826.65) { salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80); }
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) { salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80);}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) { salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13); }
else if (salarioBase >= 4664.69) { salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36); 
}

console.log("O sálario líquido será de: R$" + salarioLiquido);