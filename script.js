// function consultaCep(){
//     const cep = document.querySelector("#cep")
//     const url = `https://viacep.com.br/ws/${cep.value}/json/`;

// //    console.log(cep.value);
// //    console.log(url);
// fetch (url)
//     .then(response => response.json())
//     .then( data => exibirResultado (data))
//     .catch(error => console.log (error))
// } 
// function exibirResultado(data){
//     const  resultado = document.querySelector("#resultado");
//     resultado.innerHTML = ''
//     if( data.erro){
//         resultado.textContent = "Cep não encontrado";
//     }else{
//         const endereco = `
//         <p><strong>Cep:</strong>${data.cep}</p>`;
//         resultado.innerHTML = endereco;
        
//     }
// }
// function consultaCep() {
//     const cep = document.querySelector("#cep");
//     const url = `https://viacep.com.br/ws/${cep.value}/json/`;

//     // console.log(cep.value)
//     // console.log(url)

//     fetch(url)
//     .then(response => response.json())
//     .then(data => exibirResultado(data))
//     .catch(error => console.log(error))
       
// }

// const consultaCep =  async () => {

// }

async function consultaCep(){
    const cep = document.querySelector("#cep");
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        exibirResultado(data)
    } catch (error) {
        console.log(error);
    }

}


function exibirResultado(data) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ''
    const logradouro = document.querySelector("#logradouro");
    const bairro = document.querySelector("#bairro");
    const complemento = document.querySelector("#complemento");
    const uf = document.querySelector("#uf");
    const cep = document.querySelector("#cep");


    if(data.erro){
        resultado.textContent = "Cep não encontrado"
    } else {
        const endereco = `<p><strong>logradouro:</strong>${data.logradouro}</p>`;
        `<p><strong>bairro:</strong>${data.bairro}</p>`;
        `<p><strong>complemento:</strong>${data.complemento}</p>`;
        `<p><strong>cep:</strong>${data.cep}</p>`;
        resultado.innerHTML = endereco;
        logradouro.value = data.logradouro;
        bairro.value = data.bairro;
      
        uf.value = data.uf; 
        cep.value = data.cep;
    }


}
