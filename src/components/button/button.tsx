import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  click: () => void;
  type?: string;
}

export const Button: FunctionComponent<Props> = ({ click, children, type }) => {
  return (
    <button type="button" onClick={click} className={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: '',
};
