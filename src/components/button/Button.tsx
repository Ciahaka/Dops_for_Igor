import React from 'react';

export type ButtonType = {
  name: string
  callback: () => void
}



export const Button = (props: ButtonType) => {
  const {name, callback} = props
  const onClickButtonHandler = () => {
    props.callback()
  }
return(
      <button onClick={onClickButtonHandler}>{props.name}</button>
  );
};

