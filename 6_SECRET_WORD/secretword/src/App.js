// CSS
import "./App.css";
import StartScreen from "./components/StartScreen";
//react
import { useCallback, useEffect, useState } from "react";
//data
import { wordsList } from "./data/words";
//Components
import Game from "./components/Game";
import End from "./components/End";

const stage = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const numGuesses = 3;

function App() {
  const [gameStage, setGameStage] = useState(stage[0].name);
  const [words] = useState(wordsList);

  //escolhe uma palavra dentro
  const [pickedWord, setPickedWord] = useState("");

  //seleciona a categoria
  const [pickedCategory, setPickedCategory] = useState("");

  //localiza as palavras
  const [letters, setLetters] = useState([]); //aqui se usa o [] por que vamos receber m array
  //letras advinhadas
  const [guessedLetters, setGuessedLetters] = useState([]);

  //letras erradas
  const [wrongLetters, setWrongLetters] = useState([]);

  //Tentativas utilizadas 3 é o numero de tentativas
  const [guesses, setGuesses] = useState(numGuesses);

  //Pontuaçao do usuario
  const [score, setScore] = useState(0);

  const   pickWordAndCategory  = useCallback(() => {
    //cria uma lista com as categorias dentro do arquivo words. A lista vai utilizar as keys do objeto como categoria
    const categories = Object.keys(words);

    //selecionar uma palavra aleatoria mathfloor é usado para arredondar para baixo o inidice  que esta em float por conta do .length
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //selecionando a palavra dentro do array de categorias
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  //#####################################################################################################################

  //starts game
  const startGame = useCallback(() => {
    //limpando as letterSpacing: 
    ressetStates();
    const { word, category } = pickWordAndCategory();

    //criando o array da letra
    let wordLetters = word.split("");

    //transformando cada letra que esta dentro do array em minuscula com o tolowerCase
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setGameStage(stage[1].name);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
  },[pickWordAndCategory]);
 
  // setar os estados

  //process the letter input
  const verifyLetter = (letter) => {
    //padronizar letterSpacing:
    const normalizedLetter = letter.toLowerCase();

    //checando se a letra ja foi usada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    //letras adivinhadas ou erradas e retire uma chance
    if (letter.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
        //diminuindo o numero de tentativas
        setGuesses((actualGesses) => actualGesses - 1),
      ]);
    }
  };
  const ressetStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  //checando se as tentativas terminaram
  useEffect(() => {
    if (guesses <= 0) {
      //resetando todos os estados
      ressetStates();
      setGameStage(stage[2].name);
    }
  }, [guesses]);

  //checando se você venceu
  useEffect(() => {
    //usando o ...new Set(), a gente cria um array de somente letras unicas ou seja, não vai repeti-las
    const uniqueLetters = [...new Set(letters)];
    //condição win
    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => (actualScore += 100));
      //restart jogo com nova palavra
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  //reiniciar jogo
  const retry = () => {
    setScore(0);
    setGuesses(numGuesses);
    setGameStage(stage[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory}
          pickedWord={pickedWord}
          letters={letters}
          guessedLetters={guessedLetters}
          guesses={guesses}
          wrongLetters={wrongLetters}
          score={score}
        />
      )}
      {gameStage === "end" && <End retry={retry} score={score} />}
    </div>
  );
}

export default App;
