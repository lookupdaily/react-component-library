import React, { FunctionComponent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  click: () => void;
  type?: Type;
}

type Type =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'danger'
  | 'link'
  | '';

export const Button: FunctionComponent<ButtonProps> = ({
  click,
  children,
  type,
}) => {
  const className = `button ${type}`;
  return (
    <button type="button" onClick={click} className={className}>
      {children}
    </button>
  );
};
