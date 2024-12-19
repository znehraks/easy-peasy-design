import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../components/atoms/Textarea/Textarea';

const meta = {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello World',
  },
  render: (args) => {
    return <Textarea {...args} />;
  },
};
