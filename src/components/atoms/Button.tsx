import { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' 
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, ...props}, ref) => {
    return <button ref={ref} {...props}>{children}</button>
})

Button.displayName = 'Button'