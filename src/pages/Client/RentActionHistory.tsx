import * as React from 'react'
import {observer} from "mobx-react";
import {useSortBy, useTable} from "react-table"
import {chakra, Stack, Table, Tbody, Td as BaseTd, Text, Th, Thead, Tr} from "@chakra-ui/react"
import {IRent} from "../../services/RentList";

function convertDate(date: Date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split('');
    var ddChars = dd.split('');

    return yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + (ddChars[1] ? dd : "0" + ddChars[0]);
}

const data = [
    {
        date: "12.09.2021",
        action: "Изменение условий договора",
        value: '20 000 ₽',
        comment: 'В связи с окончанием договора.',
        role: 'Аэропорт'
    },
    {
        date: "03.08.2021",
        action: "Подтверждение новых условий договора",
        value: 'В связи с окончанием договора.',
        comment: '',
        role: 'Арендатор'
    },
    {
        date: "02.08.2021",
        action: "Изменение условий договора",
        value: '20 000 ₽',
        comment: 'В связи с окончанием договора.',
        role: 'Аэропорт'
    },
]

const columns = [
    {
        Header: "Дата",
        Cell: ({value}) => (<Text  whiteSpace={'nowrap'}>{String(value)}</Text>),
        accessor: (row: any) => {
            const date = new Date(row.date)
            return convertDate(date)
        },
    },
    {
        Header: "Актор",
        accessor: "role",
    },
    {
        Header: "Действие",
        accessor: "action",
    },
    {
        Header: "Комментарий",
        accessor: "comment",
    },
]

const Td = chakra(BaseTd, {
    baseStyle: {
        borderColor: 'black'
    }
})

export const RentActionHistory = observer(function RentActionHistory() {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data}, useSortBy)

    return (
        <Stack width={'100%'} maxH={'265px'} overflow={'auto'}>
            <Table {...getTableProps()} overflow={'auto'}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th  {...column.getHeaderProps((column as any).getSortByToggleProps())}
                                     isNumeric={(column as any).isNumeric}>
                                    {column.render("Header")}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>

                <Tbody {...getTableBodyProps()} >
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <Tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <Td {...cell.getCellProps()} isNumeric={(cell.column as any).isNumeric}>
                                        {cell.render("Cell")}
                                    </Td>
                                ))}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </Stack>
    )
})