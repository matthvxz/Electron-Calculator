document.querySelectorAll('input[type="input"]').forEach((v, i) => {
  //Verifico se a entrada de dados são NaN, caso sim, os valores são limpos.
  v.addEventListener('input', (e) => {
    if (isNaN(e.target.value)) {
      clear_inputs();
    }
  });
})

function Calculator(type) {
  //Formata o tipo do dado de string para number
  const valueInp = parseInt(document.getElementById("value1").value);
  const valueInp_2 = parseInt(document.getElementById("value2").value);

  //Verifica se o dado adicionado nos inputs são números, caso não, retorna
  if (isNaN(valueInp) || isNaN(valueInp_2)) {
    clear_inputs();
  }

  switch (type) {
    case 'soma':
      check(`Result: ${valueInp + valueInp_2}`)
      break;
    case 'sub':
      check(`Result: ${valueInp - valueInp_2}`)
      break;
    case 'div':
      check(`Result: ${valueInp / valueInp_2}`)
      break;
    case 'multi':
      check(`Result: ${valueInp * valueInp_2}`)
      break;

  }
  clear_inputs();
}

function clear_inputs() {
  //Sobrepõe o valor dos inputs
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";

}

function check(text) {

  //Cria a linha da lista
  const li = document.createElement("li");
  
  //Cria o texto que será incluido na linha
  const texto = document.createTextNode(text)
  
  //Adiciona ao final da lista a nova linha
  li.appendChild(texto)
  
  //Pega o elemento da lista desordenada e adiciona a criança(texto) ao pai(Lista)
  document.getElementById("ListResults").appendChild(li)
  
  //Pega todas as linhas da lista
  const todoList = document.querySelectorAll("li");
  
  //Seleciono a lista
  const List = document.querySelector("ul");
  
  //Aqui evitará que os valores se sobrepõem um acima do outro;
  List.firstChild.remove();
 
}


