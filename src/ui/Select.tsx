import {chakra, Select as BaseSelect} from "@chakra-ui/react";

export const Select = chakra(BaseSelect, {
    baseStyle: {
        field: {
            marginLeft: 0
        },

        height: '56px',
        bg: 'white',
        borderRadius: 0,
        border: 0,
        position: 'relative',

    }
})