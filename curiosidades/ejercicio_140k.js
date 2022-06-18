/**Introduction
You find a strange mirror that always shows a hand that is moving. The hand appears to be alive, and after a lot of questions of "yes" and "no" answer, you know that the hand is trying to teach you a program that is written in HPL (Hand Programming Language).

This language works with a memory of an indefinite size of bytes, with all values initialized to 0. This language haves 7 instructions:

👉 : moves the memory pointer to the next cell

👈 : moves the memory pointer to the previous cell

👆 : increment the memory cell at the current position

👇 : decreases the memory cell at the current position.

🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛

🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜

👊 : Display the current character represented by the ASCII code defined by the current position.

Notes:
As memory cells are bytes, from 0 to 255 value, if you decrease 0 you'll get 255, if you increment 255 you'll get 0.
Loops of 🤜 and 🤛 can be nested. */
👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊 HELLO

const codigo=[0,0,0,0,0,0,0,0];

const incrementDecrement=()=>{

}
const movCells=()=>{

}
const jumps=()=>{

}



const main=()=>{
    const moveNextCell="👉";
    const movePrevCell="👈";
    const incrementCell="👆";
    const decrementCell="👇";
    const jumpAfterPunch="🤜";
    const jumpPreviousPunch="🤛";
    const display="👊";
    const MINCELL=0;
    const MAXCELL=255;

}