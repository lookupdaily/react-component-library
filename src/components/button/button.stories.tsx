import React from 'react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: { control: 'color' },
  },
};

const Template = (args: ButtonProps) => {
  const { type, click } = args;
  return (
    <Button type={type} click={click}>
      My Button
    </Button>
  );
};

export const Default = Template.bind({});
