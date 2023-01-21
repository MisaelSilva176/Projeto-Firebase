import {app, db} from '../../firebaseConnection';
import { signOut, getAuth } from '@firebase/auth';


import { useState, useEffect } from 'react';
import { addDoc, 
         collection,
         onSnapshot,
         query,
         orderBy,
         where, 
         doc,
         deleteDoc,
         updateDoc,
         connectFirestoreEmulator} from "firebase/firestore";
import './admin.css';
import { async } from '@firebase/util';

export default function Admin(){
  const [tarefaInput, setTarefaInput] = useState('');
  const auth = getAuth(app);
  const [user, setUser] = useState({})

  const [tarefas, setTarefas] = useState([]);
  const [edit, setEdit] = useState({});

  useEffect(()=>{
    async function loadTarefas(){
      const userDetail = localStorage.getItem("@detailUser")
      setUser(JSON.parse(userDetail))

      if(userDetail){
        const data = JSON.parse(userDetail);
        
        const tarefaRef = collection(db, "tarefas")
        const q = query(tarefaRef, orderBy("created", "desc"), where("userUid", "==",data?.uid))
        
        const unsub = onSnapshot(q, (snapshot) =>{
          let lista =[];
          
          snapshot.forEach((doc) =>{
            lista.push({
              id: doc.id,
              tarefa: doc.data().tarefa,
              userUid: doc.data().userUid
            })
          })

          console.log(lista);
          setTarefas(lista);

        })

      }


    }
    loadTarefas();
  },[])
    
  async function handleRegister(e){
    e.preventDefault();

    if(tarefaInput === ''){
      alert('Digite sua tarefa...');
      return;
    }

    if(edit?.id){
      handleUpdateTarefa();
      return;
    }

   await addDoc(collection(db, "tarefas"),{
      tarefa: tarefaInput,
      created: new Date(),
      userUid: user?.uid  
    })
    .then(()=>{
      console.log("Tarefa Regstada");
      setTarefaInput('');
    })
    .catch((error)=>{
      console.log("Erro ao registar "+ error)
    })
  }
    
  async function handleLogout(){
    await signOut(auth);
  }

  async function deleteTarefa(id){
    const docRef = doc(db, "tarefas", id)
    await deleteDoc(docRef); 
  }

  function editTarefa(item){
    setTarefaInput(item.tarefa);
    setEdit(item);
  }

  async function handleUpdateTarefa(){
    const docRef = doc(db, "tarefas", edit?.id)
    await updateDoc(docRef, {
      tarefa: tarefaInput
    })
    .then( () =>{
      console.log("tarefa atualizada");
      setTarefaInput('');
      setEdit({});
    })
    .catch( () =>{
      console.log("Erro ao atualizar");
      setTarefaInput('');
      setEdit({});
    })
  }

    return(

        <div className='admin-container'>
            <h1>Minhas tarefas</h1>

            <form className="form " onSubmit={handleRegister}>
                <textarea
                placeholder='Digite sua tarefa...'
                value={tarefaInput}
                onChange={(e) => setTarefaInput(e.target.value)}
                />

                {Object.keys(edit).length>0 ? (
                  <button className='btn-register' style={{backgroundColor: '#6add39'}} type="submit">Atualizar tarefas</button>
                ) : (
                  <button className='btn-register' type="submit">Registar tarefas</button>
                )}
                
            </form>
              {tarefas.map((item) =>(
                 <article key={item.id} className='list'>
                 <p>{item.tarefa}</p>
                 <button onClick={ () => editTarefa(item) } >Editar</button>
                 <button onClick={ () => deleteTarefa(item.id) } className='btn-delete'>Concluir</button>
             </article>
 
              ))}
           
            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </div>
    );
};