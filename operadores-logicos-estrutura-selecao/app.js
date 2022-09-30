const readLine = require ('readline').createInterface ({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitacao para saber se pode entrar no kart');
console.log('Alem das suas verificacoes, precisamos verificar se voce esta na lista de presenca do horario');

readLine.question('qual o ano do seu nascimento?', ano =>{
    if(ano > 2004){
        console.log('Voce nao tem 18 anos');
    }else{
        readLine.question("Voce tem habilitacao? (sim/nao)", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() ===  "SIM" )){
                console.log('Voce nao tem habilitacao para entrar no kart');
            }else{
                readLine.question("Qual seu nome?", nome => {
                    switch(nome){
                        case 'Douglas' : 
                            console.log('bem-vindo ao kart Douglas');
                            break; 
                        case 'Rafael' :
                            console.log ('bem-vindo ao kart Rafael');
                            break;
                        default:
                            console.log ('Seu nome não foi identificado na lista de presenca');
                    }
                });
            }
        });
    }
})