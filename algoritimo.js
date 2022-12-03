
let opção = "" ;
let numero= 0;
 
do{
    numero = parseInt(prompt("digite o numero" ));
    numero*= 2;
    console.log (" o dobro deste numero é: ${numero}");

    opção= prompt ("deseja sair?\ndigite 'S'para sim e 'N' para Não "  )

} while (!(opção== "S" || opcao =="s"));
 console.log ("FIM");