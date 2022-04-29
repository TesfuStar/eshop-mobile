import auth from '@react-native-firebase/auth'

import React,{createContext,useState} from 'react'

export const AuthContext=createContext();


export const Authprovider=({children})=>{
const[user,setUser]=useState(null)
    return(
<AuthContext.Provider
value={{
  user,
  setUser,
  login:async(email,password)=>{
      try{
          await auth().signInWithEmailAndPassword(email,password)
      }catch(e){
          console.log(e)
      }
  },
  signup:async(email,password)=>{
    try{
        await auth().createUserWithEmailAndPassword(email,password)
    }catch(e){
        console.log(e)
    }
  },
  logout:async()=>{
      try{
          await auth().signOut()
      }catch(e){
        console.log(e)
    }
  }
}}
>
    {children}
</AuthContext.Provider>

    )
}