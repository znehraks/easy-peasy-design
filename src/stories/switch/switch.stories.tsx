import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../../components';
import { useEffect, useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    isChecked: false,
    onToggle: () => {},
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.isChecked);
    args.onToggle = () => {
      setIsChecked((prev) => !prev);
    };

    useEffect(() => {
      setIsChecked(args.isChecked);
    }, [args.isChecked]);
    return <Switch {...args} isChecked={isChecked} />;
  },
};
