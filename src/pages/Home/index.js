
import { useState } from "react";
import './home.css';

//import { auth } from '../../firebaseConnection';
import { app } from '../../firebaseConnection';
import { getAuth,signInWithEmailAndPassword, signOut } from '@firebase/auth';
         
import { Link, useNavigate } from 'react-router-dom';

export default function Home(){
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState(''); 
  
  const navigate = useNavigate(); 

  const auth = getAuth(app);

async function handleLoging(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
    await signInWithEmailAndPassword(auth, email, password)
    .then(()=> {
     navigate('/admin', { replace: true } )
    })
    .catch (()=>{
        console.log("Erro ao fazer o login")
    })
}else{
    alert('Digite email e senha');
} 

}
    
    return(
        <div className="home-container">
            <h1>Lista de Tarefas</h1>
            <span>Gerencie sua agenda de forma fácil</span>

            <form className="form" onSubmit={handleLoging}>
                <input
                type="text"
                placeholder="Digite seu email..."
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

                <input
                
                type="password"
                placeholder="***********"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                
                <button type="submit">Acessar</button>
            </form>
            <Link className="a-link" to="/register">Não possui uma conta? Cadastre-se</Link>
        </div>
    );

};

