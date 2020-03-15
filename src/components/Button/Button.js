import React from 'react';

import { MyButton } from './styles';

export const Button = ({ handleClick, special, text, disabled }) => (
    <MyButton onClick={handleClick} special={special} disabled={disabled}>
    	{text}
    </MyButton>
);
