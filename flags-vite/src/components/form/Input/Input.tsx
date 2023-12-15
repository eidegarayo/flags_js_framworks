import React from 'react';
import StyledInput from './Input.styles';
import { InputProps, DefaultProps } from './Input.types';

const defaultProps: DefaultProps = {
  type: 'text',
  role: 'textbox',
};

const Input: React.FC<InputProps> = ({
  ariaLabel,
  id,
  onChange,
  placeholder,
  role = defaultProps.role,
  title,
  type = defaultProps.type,
  value,
}: InputProps) => {
  return (
    <StyledInput
      aria-label={ariaLabel}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      role={role}
      title={title}
      type={type}
      value={value}
    />
  );
};

export default Input;
