import React from "react";
import * as S from "./styled";

const Step = ({ value, actived, divideStepsIn }) => {
  return (
    <S.Step actived={actived} divideStepsIn={divideStepsIn}>
      {value}
    </S.Step>
  );
};

export default Step;
