import {Button as BaseButton, chakra} from "@chakra-ui/react";

export const Button = chakra(BaseButton, {
    baseStyle: {
        outline: 0,
        bg: "primary",
        color: "white",
        height: 42,
        fontSize: 16,
        fontWeight: 400,
        borderRadius: '4px',
        _hover: {
            bg: "black",
        },
        _focus: {
            bg: 'black'
        }
    }
})