import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { TransactionContext } from '../context/TransactionContext';
import useToken from '../hooks/useToken'

const ProtectedRoute = ({children}) => {
  const token = useToken();
  const navigate = useNavigate();
  const {user , getUser} = useContext(TransactionContext);
  console.log("User in Protected Route: ", user);
  console.log("Token in protected route" , token);
  useEffect(()=>{
    if(!token){
       navigate("/Home",{
          replace: true 
       })
       return null;
    }
  },[token , navigate]);


  return children;
}

export default ProtectedRoute
