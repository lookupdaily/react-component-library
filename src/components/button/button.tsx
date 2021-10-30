import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  click: () => void;
}

export const Button: FunctionComponent<Props> = ({children}) => {
  return <p>{children}</p>
}