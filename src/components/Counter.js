import "./Counter.scss";
import React from "react";

export default function Counter() {

  // хук состояния переменной счетчика
  const [value, setValue] = React.useState(0);

  // функции которые навешиваем на кнопки, внутри функция из хука
  function valueMinus() {
    setValue(value - 1);
  }
  function valuePlus() {
    setValue(value + 1);
  }

  return (
    <div className="main">
      <h2>Счетчик:</h2>
      <h1>{value}</h1>
      <button onClick={valueMinus} className="minus">
        - Минус
      </button>
      <button onClick={valuePlus} className="plus">
        Плюс +
      </button>
    </div>
  );
}
