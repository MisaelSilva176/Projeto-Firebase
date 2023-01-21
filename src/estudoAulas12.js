/*import firebase from './firebaseConnection';
import {useState,useEffect} from 'react';
import './style.css';


function App() {

const [idPost, setIdPost] = useState('');
const [titulo, setTitulo] = useState('');
const [autor, setAutor] = useState('');
const [post, setPost] = useState([]);

const[email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const[user, setUser] = useState('false');
const[userLogged, setUserLogged] = useState({});

useEffect(()=>{
  async function loadPost(){
    await firebase.firestore().collection('post')
    .onSnapshot((doc)=>{
      let meusPosts = [];

      doc.forEach((item)=>{
        meusPosts.push({  
        id: item.id,
        titulo: item.data().Titulo,
        autor: item.data().Autor
      })
    });
    setPost(meusPosts);
  })
}
loadPost();
},[]);


useEffect(()=>{
  async function checkLogin(){
    await firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        // possui user logado
        setUser(true);
        setUserLogged({
          uid: user.uid,
          email: user.email
        })
      } else{
        // Não possui usuário logado
        setUser(false);
        setUserLogged({});
      }
    })
  }
  checkLogin();
}, [])


async function handleAdd(){
  await firebase.firestore().collection('post')
  .add({
    Titulo: titulo,
    Autor: autor
  })
  .then(()=>{
    console.log('Cadastro feito com sucesso.');
    setAutor('');
    setTitulo('');
  })
  .catch((error)=>{
    console.log('Gerou um erro ' + error);
  })
}
//quando se cria o ID, para o programa criar o ID, é como o exemplo acima.
/*async function handleAdd(){
await firebase.firestore().collection('post')
.doc('1')
.set({
  Titulo: titulo,
  Autor: autor
})
.then(()=>{
  console.log('Cadastrado com Sucesso');
})
.catch((error)=>{
  console.log('Gerou um erro: ' + error);
})
}*/


async function buscarPost(){
  await firebase.firestore().collection('post')
  .get()
  .then((snapshot)=>{
    let lista = [];

    snapshot.forEach((doc)=>{
      lista.push({
        id: doc.id,
        titulo: doc.data().Titulo,
        autor: doc.data().Autor
      })
    })
    setPost(lista);
  })
  .catch((error)=>{
    console.log('Gerou erro '+error)
  })

}
// Quando não se sabe o número do Id, exemplo acima.
/* async function buscarPost(){
await firebase.firestore().collection('post')
.doc('TTlcGyfCPPM8GZUVJaiV')
.get()
.then((snapshot)=>{
  setTitulo(snapshot.data().Titulo);
  setAutor(snapshot.data().Autor);
})
.catch((error)=>{
  console.log('Erro '+ error);
})
}*/

/*
async function editarPost(){
  await firebase.firestore().collection('post')
  .doc(idPost)
  .update({
    Titulo: titulo,
    Autor: autor
  })
  .then(()=>{
    alert('Dados atualizados com sucesso.');
    setIdPost('');
    setTitulo('');
    setAutor('');
  })
  .catch((error)=>{
    alert('Error '+error)
  })

}


async function excluirPost(id){
  await firebase.firestore().collection('post').doc(id).delete()
  .then(()=>{
    alert('Esse post foi excluído com sucesso.');
  })
  .catch((error)=>{
    alert('Erro '+ error);
  })
}

async function fazerLogin(){
  await firebase.auth().signInWithEmailAndPassword(email,senha)
  .then((value)=>{
    console.log(value);
  })
  .catch((error)=>{
    alert('Error ' + error)
  })
}

async function logout(){
  await firebase.auth().signOut();
}


async function novoUtilizador(){
  await firebase.auth().createUserWithEmailAndPassword(email,senha)
  .then(()=>{
    alert('Cadastrado com sucesso');
    
  })
  .catch((error)=>{
    if(error.code === 'auth/weak-password'){
    alert('Senha muito Fraca');
    } if(error.code ==='auth/email-already-in-use'){
      alert('Este email já existe');
    }
  })
}


  return (
    
    <div>
    
      <h1> React + firebase =) </h1>
    
      {user && (
      <div >
      <strong>Seja Bem vindo</strong> <br/>
      <span>{userLogged.uid} - {userLogged.email}</span>
      <br/><br/>
      </div>
    )}
      
    
      <div className='container'>
        <label>Email</label>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Senha</label>
        <input type='password' value={senha} onChange={((e)=>setSenha(e.target.value))}/> <br/> 
        <button onClick={novoUtilizador}> Novo Utilizador</button>
        <button onClick={fazerLogin}>Fazer login</button>
        <button onClick={logout}>Sair</button>
      </div>
      <br/><br/><hr/>






        <h2>Banco de Dados</h2>
        <div className="container">
          <label>ID</label> 
          <input type='text' value={idPost} onChange={(e)=>setIdPost (e.target.value)}></input>
          <label>Titulo</label> <br/>
          <textarea type='text' value={titulo} onChange={(e)=> setTitulo(e.target.value)}/> <br/>
          <label>Autor</label> <br/>
          <input type="text" value={autor} onChange={(e)=>setAutor(e.target.value)} /> <br/>
          <button onClick={handleAdd}>Cadastrar</button>
          <button onClick={buscarPost}> Buscar </button> 
          <button onClick={editarPost}>Editar</button>
          <ul>
            {post.map((post)=>{
              return(
                <li key={post.id}>
                  <span> Id: {post.id}</span> <br/>
                   <span>Titulo: {post.titulo}</span><br/> 
                   <span>Autor: {post.autor}</span> <br/>
                   <button onClick={()=>excluirPost(post.id)}>Excluir Post</button><br/><br/>
                </li>
              )
            })}
          </ul>
        </div>
    </div>
  );
}

export default App;


*/