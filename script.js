const cep = document.querySelector('#cep') 
const rua = document.querySelector('#rua') 
const bairro = document.querySelector('#bairro') 
const cidade = document.querySelector('#cidade') 

function showInformation(){
  const inputCep = cep.value
  cepParametro(inputCep)
}

async function cepParametro(cep){
  try{
    const urlApi = `https://viacep.com.br/ws/${cep}/json/` 
    const dadosResponse = await fetch(urlApi)
    const dadosJson = await dadosResponse.json()

    rua.value = dadosJson.logradouro
    bairro.value = dadosJson.bairro
    cidade.value = dadosJson.localidade

  }catch(erro){
    console.error(erro)
  }
}

cep.addEventListener("change", showInformation)