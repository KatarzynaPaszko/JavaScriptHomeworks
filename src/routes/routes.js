import MorseCode from "../scenes/MorseCode/MorseCode";
import { TreasureHunt } from "../scenes/TresureHunt/TreasureHunt";
import { ChessMove } from "../scenes/ChessMove/ChessMove";

import { ROUTE_PATHS } from './constants';

export const routes = [
  {
    path: ROUTE_PATHS.MorseCode,
    to: ROUTE_PATHS.MorseCode,
    component: MorseCode,
    name: "Morse Code",
    description: "Write a program that automatically converts English text to Morse code and vice versa.",
    img: "https://i.ytimg.com/vi/CETGq7sqytE/maxresdefault.jpg",
  },
  {
    path: ROUTE_PATHS.LongestPalindromicSubstring,
    to: ROUTE_PATHS.LongestPalindromicSubstring,
    component: MorseCode,
    name: "Longest Palindromic Substring",
    description: "Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.",
    img: "https://cdncontribute.geeksforgeeks.org/wp-content/uploads/ltlp1.jpg",
  },
  {
    path: ROUTE_PATHS.FindTheLongestCommonSubsequence,
    to: ROUTE_PATHS.FindTheLongestCommonSubsequence,
    component: MorseCode,
    name: "Find the longest common subsequence",
    description: "Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’",
    img: "https://i.ytimg.com/vi/NnD96abizww/maxresdefault.jpg",
  },
  {
    path: ROUTE_PATHS.TurnOneStringIntoTheOther,
    to: ROUTE_PATHS.TurnOneStringIntoTheOther,
    component: MorseCode,
    name: "Turn one string into the other",
    description: `Given two strings, write a program that outputs the shortest sequence of character insertions and deletions that turn one string into the other.a.	INPUT:‘free -> ferie’
    b.	OUTPUT:
    i.	Insert at [1] value ‘e’: feree
    ii.	Insert at [3] value ‘i’: feriee.
    iii.	Delete at [5]: ferie
    `,
    img: "https://passionateteaching.files.wordpress.com/2013/09/board.jpg",
  },
  {
    path: ROUTE_PATHS.MultiplicationOfTwoMatrices,
    to: ROUTE_PATHS.MultiplicationOfTwoMatrices,
    component: MorseCode,
    name: "Multiplication of two matrices together",
    description: "Write a code that multiplies two matrices together. Dimension validation required. ",
    img: "https://s4.dziennik.pl/pliki/11187000/11187627-matrix-900-555.jpg",
  },
  {
    path: ROUTE_PATHS.TreasureHunt,
    to: ROUTE_PATHS.TreasureHunt,
    component: TreasureHunt,
    name: "Treasure Hunt",
    description: "Treasure Hunt excercise",
    img: "http://pluspng.com/img-png/treasure-hunt-png-hd-treasure-hunt-1920.jpg",
  },
  {
    path: ROUTE_PATHS.ChessMove,
    to: ROUTE_PATHS.ChessMove,
    component: ChessMove,
    name: "Chess Move",
    description: "Chess Move excercise",
    img: "https://s.hswstatic.com/gif/computer-defeat-chess-champion-109349476.jpg",
  },
];

export const allRoutes = [...routes];
