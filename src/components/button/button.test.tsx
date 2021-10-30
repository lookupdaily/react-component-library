import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  it('renders element with children', () => {
    render(<Button click={() => ''}>Do something</Button>);
    expect(screen.getByText('Do something')).toBeInTheDocument();
  });

  it('renders a button', () => {
    render(<Button click={() => ''}>Do something</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls the callback on click', () => {
    const clickAction = jest.fn();

    render(<Button click={clickAction}>Do something</Button>);
    fireEvent.click(screen.getByRole('button'));

    expect(clickAction).toHaveBeenCalledTimes(1);
  });
});
