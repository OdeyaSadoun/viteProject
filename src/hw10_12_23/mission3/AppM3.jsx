import React, { useState } from 'react'

const AppM3 = () => {
  let randomNum = Math.ceil(Math.random() * 6);

  const [number, setNumber] = useState(randomNum);
  const [coins, setCoins] = useState(5);
  const [color, setColor] = useState("white");
  const [win, SetWin] = useState(false);
  const [urlImg, setUrlImg] = useState(`./images/dice_images/dice${number}.jpg`);

  console.log(`./images/dice_images/dice${number}.jpg`);

  const roll = () => {
    if (coins < 1) {
      return alert("you need money")
    }
    randomNum = Math.ceil(Math.random() * 6);
    setUrlImg(`./images/dice_images/dice${randomNum}.jpg`);
    setCoins(coins - 1);
    if (randomNum > 5) {
      setColor("green");
      SetWin(true);
      setCoins(coins + 2)
    }
    else{
      setColor("red");
    }

  }

  return (
    <div>
      <h2>Kazino</h2>
      <h3>Coins: {coins}</h3>
      <img src={urlImg} />
      <br />
      <button onClick={() => {
        roll();
      }}>roll</button>

      <h2 style={{color: color}}>{win ? "you win": "you lose"}</h2>
    </div>
  )
}

export default AppM3