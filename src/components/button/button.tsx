import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  click: () => void;
}

export const Button: FunctionComponent<Props> = ({ click, children }) => {
  return (
    <button type="button" onClick={click}>
      {children}
    </button>
  );
};
