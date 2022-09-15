import { useState, useRef } from "react";
import "./Game.css";

function Game({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  guesses,
  wrongLetters,
  score,
}) {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  //Funcao para verificar se a letra esta correta
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    //focar no elemento depois do submit, para que o usuario nao precise ficar clicando a caixa de txt
    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="points">
        <span>Ponbtuação: {score}</span>
      </p>
      <h1>Advinhe a Palavra</h1>
      <h3 className="tip">
        Dica sobre a Palavra: <span>{pickedCategory}..</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente Advinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersConainer">
        <p>Letras ja utilizadas: {wrongLetters} </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
}

export default Game;
