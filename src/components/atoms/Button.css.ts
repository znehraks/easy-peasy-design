import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
    variants: {
        variant: {
            primary: {},
            secondary: {},
            danger: {},
        }
    }
})