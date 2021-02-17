import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const ProgressBar = styled.ul`
  display: flex;
  flex-direction: row;
  counter-reset: step;
`;
export const Step = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  position: relative;
  text-align: center;
  width: ${(props) => `${props.divideStepsIn}%` ?? "100%"};

  &::before {
    align-items: center;
    background-color: ${props => props.actived ? 'aquamarine' : 'grey'};
    border: 1px solid ${props => props.actived ? 'aquamarine' : 'grey'};
    border-radius: 50%;
    color: #fff;
    display: flex;
    content: counter(step);
    counter-increment: step;
    height: 30px;
    justify-content: center;
    margin-bottom: 12px;
    width: 30px;
  }

  &::after {
    background-color: ${props => props.actived ? 'aquamarine' : 'grey'};
    content: "";
    height: 2px;
    right: -50%;
    position: absolute;
    width: 100%;
    top: 15px;
    z-index: -1;
  }

  &:last-child {
    &:after {
        content: none;
    }
  }
`;
