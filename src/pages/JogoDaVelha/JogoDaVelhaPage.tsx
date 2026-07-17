import { useMemo, useState } from "react";
import "./style.css";

type Player = "X" | "O";
type Cell = Player | null;

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

export default function JogoDaVelhaPage() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [player, setPlayer] = useState<Player>("X");

  const winner = useMemo(() => {
    for (const line of WIN_LINES) {
      const [a, b, c] = line;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  }, [board]);

  const draw = board.every(Boolean) && !winner;

  function play(index: number) {
    if (board[index] || winner) return;

    const copy = [...board];
    copy[index] = player;

    setBoard(copy);
    setPlayer(player === "X" ? "O" : "X");
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setPlayer("X");
  }

  return (
    <div className="ttt-page">
      <div className="ttt-card">
        <h1>Jogo da Velha</h1>

        <p className="subtitle">
          {winner
            ? `🎉 Jogador ${winner} venceu!`
            : draw
            ? "Empate!"
            : `Vez do jogador ${player}`}
        </p>

        <div className="board">
          {board.map((cell, index) => (
            <button
              key={index}
              className="cell"
              onClick={() => play(index)}
            >
              {cell}
            </button>
          ))}
        </div>

        <button className="reset-button" onClick={reset}>
          Reiniciar partida
        </button>
      </div>
    </div>
  );
}
