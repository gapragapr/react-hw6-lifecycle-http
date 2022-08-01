import Watch from "./Components/Watch/Watch";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import { useState } from "react";

import './App.css'

function App() {
  const [watchArr, setWatchArr] = useState([])
  return (
    <div className="App">
      <div className="addWatchForm">
        <Input name='name' subTitle='Название'></Input>
        <Input name='timezone' subTitle='Временная зона'></Input>
        <Button watchArr={watchArr} setWatchArr={setWatchArr}></Button>
      </div>
      <div className="watchList">
        {watchArr.map((item, index) => {
          return <Watch key={index} watchArr={watchArr} setWatchArr={setWatchArr} obj={item}></Watch>
        })}
      </div>
    </div>
  );
}

export default App;
