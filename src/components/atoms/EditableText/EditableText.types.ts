export type EditableTextProps = React.HTMLAttributes<HTMLDivElement> & {
    children: string;
    onEditComplete: (content: string) => void;
    onEditCancel?: () => void;
    inputClassName?: string;
    inputStyle?: React.CSSProperties;
    spanClassName?: string;
    spanStyle?: React.CSSProperties;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    completeTrigger?: 'blur' | 'enter' | 'all';
  };