import { Meta, StoryObj } from '@storybook/react';
import { EditableText } from '../../components/atoms/EditableText/EditableText';
import { useState } from 'react';

const meta = {
  title: 'Example/EditableText',
  component: EditableText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EditableText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello World',
    onEditComplete: (content) => {
      console.log(content);
    },
  },
  render: (args) => {
    const [text, setText] = useState('Hello World');
    const handleEditComplete = (content: string) => {
      setText(content);
    };
    return (
      <EditableText {...args} onEditComplete={handleEditComplete}>
        {text}
      </EditableText>
    );
  },
};
