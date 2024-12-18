import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components';
import { vars } from '../../foundations/theme.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: 'inline-radio',
      options: Object.keys(vars.color).filter(
        (key) => key !== 'blackAlpha' && key !== 'whiteAlpha' && key !== 'stableWhite' && key !== 'stableBlack',
      ),
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Solid: Story = {
  args: {
    variant: 'solid',
    color: 'red',
    size: 'md',
    disabled: false,
    readOnly: false,
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'red',
    size: 'md',
    disabled: false,
    readOnly: false,
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    color: 'red',
    size: 'md',
    disabled: false,
    readOnly: false,
    children: 'Button',
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
    color: 'red',
    size: 'md',
    disabled: false,
    readOnly: false,
    children: 'Button',
  },
};
