import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sigOut,
  auth,
} from "firebase/auth";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanUp - é preciso para limpar as funcoes e nao ter problema de leak de memoria
  //deal with memory leak
  const [ cancelled, setCancelled ] = useState(false);

  const auth = getAuth();
  function checkIfIsCancelled() {
    if (cancelled) {
      return; //essa funcao serve para evitar vazamento de memoria
    }
  }

  const creatUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, { displayName: data.displayName });
      return user;
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;
      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "Email ja cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um erro, tente mais tarde";
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  // //setar o cancelado como verdadeiro para não haver um memory leak
  // useEffect(() => {
  //   return () => setCancelled(true);
  // }, []);

  return {
    auth,
    creatUser,
    error,
    loading,
  };
};
