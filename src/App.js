import React from "react";
import * as S from "./styled";

import Step from "./Step";

function App() {
  const [item, setItems] = React.useState([]);
  const [stepLenght, setStepLenght] = React.useState();

  React.useEffect(() => {
    const items = [
      { key: "notas", value: "notas", actived: false },
      { key: "blocos", value: "blocos", actived: false },
      { key: "papeis", value: "papeis", actived: true },
      { key: "direitos", value: "direitos", actived: false },
    ];
    const stepsLenght = parseFloat(100 / items.length).toFixed(2);
    setItems(items);
    setStepLenght(stepsLenght);
  }, []);

  return (
    <S.Container>
      <S.ProgressBar>
        {item.map((item, i) => (
          <Step
            key={i}
            name={item.value}
            value={item.value}
            actived={item.actived}
            divideStepsIn={stepLenght}
          />
        ))}
      </S.ProgressBar>
    </S.Container>
  );
}

export default App;
