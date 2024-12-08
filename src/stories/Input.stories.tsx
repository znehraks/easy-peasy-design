import type { Meta, StoryObj } from '@storybook/react';
import { vars } from '../foundations/theme.css';
import { Input } from '../components';
import { inputStyle } from './style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
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
      options: Object.keys(vars.color).filter((key) => key !== 'blackAlpha' && key !== 'whiteAlpha'),
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    color: 'blue',
    size: 'md',
    variant: 'outline',
    disabled: false,
    readOnly: false,
    placeholder: '입력해주세요',
  },
  render: (args) => {
    return <Input {...args} className={inputStyle} />;
  },
};
