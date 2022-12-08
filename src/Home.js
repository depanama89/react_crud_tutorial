import React, { useEffect, useState } from 'react'
import {db} from './firebase'
import { collection, getDocs,addDoc , updateDoc,doc,deleteDoc} from 'firebase/firestore'
import { async } from '@firebase/util'

const Home = () => {
    const [newName, setNewName] = useState("")
    const [newAge,setNewAge] = useState(0)
    const [users,setUsers]=useState([])
    const usersCollectionRef=collection(db,'users')

    const createUser = async () => {
        console.log(newName)
        await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)})

    }

    const updateUser = async (id,age) => {

        const userDoc=doc(db,"users",id)

        const newFields = {age: age + 1 }
        await updateDoc(userDoc,newFields)

    }
    const deleteUser = async (id) => {
        const userDoc = doc(db,"users",id)
        await deleteDoc(userDoc)

    }

    useEffect(()=>{ 

        const getUsers=async ()=>{
            const data = await  getDocs(usersCollectionRef)
            setUsers(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))

        }

        getUsers()

    }, [])
  return (
    <div className='home'>
        <input type="text"  placeholder='Name...' onChange={(e)=>setNewName(e.target.value)}/>
        <input type="number" placeholder='Age...' onChange={(e)=> setNewAge(e.target.value)}/>
        <button  onClick={createUser}>Create User</button>
        {users.map((user) => {
            return <div>
                <h1 key={user}>Name : {user.name}</h1>
                <h1>age: {user.age} ans</h1>
                <button  onClick={ ()=>updateUser(user.id , user.age)}>Increase Age</button>
                <button  onClick={() => {deleteUser(user.id)}}>Delete User</button>
            </div>
        })}
    </div>
  )
}

export default Home