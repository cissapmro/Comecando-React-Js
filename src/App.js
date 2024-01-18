import { useEffect, useState } from "react";

//PRATICANDO
function App() {

  const [input, setInput] = useState('');
 const [tarefas, setTarefas] = useState([
    'Estudar hoje a noite',
    'Orar muito e agradecer'
 ]);
 //useEffect - ciclo de vida - 
 //Quando abrir o componente, pegar tudo que tem no localStorage.
 useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if(tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage)) // transforma em array  //atualiza a lista de tarefas
    } 
 }, []);
//Quando carregar o componente guarda em localStorage o que foi alterado em tarefas.
useEffect(() => {
  localStorage.setItem('@tarefa', JSON.stringify(tarefas)); //chave tarefa e transforma em string o array de tarefas.
},[tarefas]); //salvar toda vez que tarefas sofrer alteração

  const handleSubmit = (e) =>{
    e.preventDefault();
    //alert('Enviado com sucesso');
    setTarefas([...tarefas, input]); //pega a lista de tarefas e envia a tarefa que está no input
    setInput('');
  }

  return (
    <div className="App">
   <form onSubmit={handleSubmit}>
    <label>Digite a tarefa</label><br />
    <input 
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Digite a tarefa"
    />
    <button type="submit">Adicionar</button>
   </form>

<br />
   <div>
    <h6>Lista de Tarefas</h6>
      <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa}>{tarefa}</li>
    ))}
      </ul>
   </div>
    </div>
  );
}
export default App;

//MANIPULANDO FORMULÁRIO
/*function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

 const handlerEnviar = (e) => {
  //não vai atualizar a página
  e.preventDefault(); 
  alert('Enviado com sucesso');
    setUser({
      nome: nome,
      email: email,
      idade: idade
    });
 }
  return (
    <div className="App">
      <form onSubmit={handlerEnviar}>
        <label>Nome:</label><br />
        <input type="text" 
        value={nome}
        onChange={(e) => setNome(e.target.value)} //vai atualizar o campo
        /><br />
        <label>Email</label><br />
        <input type="text" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        /><br />
        <label>Idade</label><br />
        <input type="text" 
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        /><br /><br />
        <button type="submit">Enviar</button>
      </form>
      <h4>Dados envidados</h4>
      <p>Nome: {user.nome}</p><br />
      <p>Email: {user.email}</p><br />
      <p>Idade: {user.idade}</p><br />

    </div>
  );
}
export default App;*/

/*TRABALHANDO COM USESTATE

import { useState } from "react";
import Nome from "./componentes/Nome";

function App() {

const [aluno, setAluno] = useState('Nic');

const handlerChangeNome = () => {
  setAluno('Cissa');
}
//Função com parâmetro
const handlerChangeNome = (nome) => {
  setAluno(nome);
}

  return (
    <div className="App">
     <div>
      <h1>Bem vindo ao meu projeto</h1>
      <p>Meu nome é: {aluno }</p>
      <Nome aluno="Cissa" cargo="Programadora" />
      </div>
      <button onClick={handlerChangeNome}>Mudar nome</button>
   <button onClick={() => handlerChangeNome('Mila')}>Mudar nome</button>

    </div>
  );
}
export default App;*/