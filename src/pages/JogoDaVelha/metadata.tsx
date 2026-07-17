import React from "react";

export default {
  id: "jogo-da-velha",

  title: "Jogo da Velha",

  description:
    "Desafie um amigo em uma partida clássica de Jogo da Velha.",

  keywords: [
    "jogo",
    "jogo da velha",
    "tic tac toe",
    "xadrez",
    "diversão",
    "entretenimento",
    "react",
  ],

  icon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 4v16" />
      <path d="M16 4v16" />
      <path d="M4 8h16" />
      <path d="M4 16h16" />
      <circle cx="6" cy="6" r="2" />
      <path d="M14 14l4 4" />
      <path d="M18 14l-4 4" />
    </svg>
  ),
};
