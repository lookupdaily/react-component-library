import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  it('renders element with children', () => {
    render(<Button click={() => ''}>Do something</Button>);
    expect(screen.getByText('Do something')).toBeInTheDocument();
  });
});
