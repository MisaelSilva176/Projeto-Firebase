import { useState } from "react";
//import { auth } from '../../firebaseConnection';
import { app } from '../../firebaseConnection';
import { getAuth,createUserWithEmailAndPassword } from "@firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
 

export default function Register(){
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');  
  const navigate = useNavigate();

  const auth = getAuth(app);

async  function handleRegister(e){
    e.preventDefault();
    
   if(email !== '' && password !== ''){
  
  await createUserWithEmailAndPassword(auth, email, password)
  .then(()=>{
    navigate('/admin', {replace: true})
   
  }).catch(()=>{
    console.log('Erro ao fazer o cadastro');
  })
}else{
    alert('Digite email e senha');
}

}
    
    return(
        <div className="home-container">
            <h1>Cadastre-se</h1>
            <span>Vamos criar sua conta!</span>

            <form className="form" onSubmit={handleRegister}>
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
            <Link className="a-link" to="/">Já possui uma conta? faça o login!</Link>
        </div>
    );

};

