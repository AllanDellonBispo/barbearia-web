let quantidadeSolicitacoes = 0;

function teste(){
    let texto = document.querySelector('#quantidadeSobre').innerHTML = `A quantidade atual de solicitções realiadas é de ${quantidadeSolicitacoes} solicitacoes`
    alert(quantidadeSolicitacoes)
    quantidadeSolicitacoes++;
}