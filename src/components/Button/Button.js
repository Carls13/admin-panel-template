import React from 'react';

import { MyButton } from './styles';

export const Button = ({ handleClick, special, text, disabled, children }) => (
    <MyButton onClick={handleClick} special={special} disabled={disabled} hasChildren={children ? true : false}>
    	{children ? children : text}
    </MyButton>
);
