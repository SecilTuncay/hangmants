type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};
export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "3.5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <div
            style={{
              width: "50px",
              height: "70px",
              borderBottom:
                letter === " "
                  ? ".3rem transparent solid"
                  : ".3rem black solid",

              textAlign: "center",
            }}
            key={index}
          >
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) || reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </div>
        );
      })}
    </div>
  );
}
