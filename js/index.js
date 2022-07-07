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
            valorServico.innerHTML = `Preço do servico R$${e.preco.toFixed(2)}`
        }
    })
}