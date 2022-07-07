const servicos = [
    corte = {
        nome : 'CORTE',
        preco: 50,
    },
    infantil ={
        nome: 'INFANTIL',
        preco: 60,
    } ,
    barba = {
        nome: 'BARBA',
        preco:30
    },
    sobrancelhas = {
        nome : 'SOBRANCELHAS',
        preco:25
    },
    combo1 = {
        nome: 'COMBO1',
        preco:65,
    },
    combo2 = {
        nome: 'COMBO2',
        preco:80
    }
]

function enviarDados(){
    const servico = document.querySelector('.serv').value
    servicos.map(e => {
        if(servico === e.nome){
            valorServico.style.color = 'green';
            valorServico.innerHTML = `Preço do serviço R$${e.preco.toFixed(2)}`
        }
    })
}

function veerificarNome(){
    var selecionado=nome_reserva.value
    const regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,50}$/;
  // alert( regex.test(selecionado));

}

function verificarSelecao(){
    
    var selecionado=document.querySelector('.serv').value
    if(selecionado == "nenhum"){
        alert("selecione um serviço para poder continuar")
        event.preventDefault();
        document.querySelector('.serv').style.border = '1px solid red';  
       
    }
    
   
    if(!veerificarNome()){
        alert("nome deve conter somente letras")
        event.preventDefault();
        document.querySelector('#nome_reserva').style.border = '1px solid red';  

    }
}
