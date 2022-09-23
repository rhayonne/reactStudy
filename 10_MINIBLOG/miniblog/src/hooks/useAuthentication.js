import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sigOut,
} from "firebase/auth";

const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [load, setLoading] = useState(null);

  //cleanUp - é preciso para limpar as funcoes e nao ter problema de leak de memoria
  //deal with memory leak
  const { cancelled, setCancelled } = useState(false);

  const auth = getAuth();
  function checkIfIsCancelled() {
    if (cancelled) {
      return; //essa funcao serve para evitar vazamento de memoria
    }
  }
};
