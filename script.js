let input_cep = document.getElementById("input_cep")
let btn_cep = document.getElementById("btn-cep")

let logradouro = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let regiao = document.getElementById("regiao")
let estado = document.getElementById("estado")

const buscar_CEP = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        logradouro.innerText = data.logradouro
        bairro.innerText = data.bairro
        regiao.innerText = data.regiao
        estado.innerText = data.estado
    })
    .catch((err) => {
        logradouro.innerText = "Não foi possível localizar"
        bairro.innerText= "Não foi possível localizar"
        regiao.innerText= "Não foi possível localizar"
        estado.innerText= "Não foi possível localizar"       
    })
}

btn_cep.addEventListener("click", function(event){
    buscar_CEP(input_cep.value)
    event.preventDefault()
})