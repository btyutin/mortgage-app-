import {Button as BaseButton, Input as BaseInput, chakra} from "@chakra-ui/react";


export const Input = chakra(BaseInput, {
    baseStyle: {
        bg: "white",
        color: "grey",
        borderRadius: '4px',
        height: 46,
        fontSize: 18,
        padding: 18,
    }
})