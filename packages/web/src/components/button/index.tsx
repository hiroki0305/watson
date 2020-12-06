import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export interface Props {
    size?: 'small' | 'medium' | 'large'
    children: string
    mode: 'create' | 'delete'
    onClick: () => void
}

const useStyles = makeStyles(() =>
    createStyles({
        create: {
            backgroundColor: '#3399FF',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#3399FF',
                color: '#fff',
            },
        },
        delete: {
            borderColor: '#B22222',
            color: '#B22222',
            '&:hover': {
                backgroundColor: '#B22222',
                color: '#fff',
            },
        },
    })
)

export const AppContainedButtons: React.FC<Props> = (Props) => {
    const classes = useStyles()

    return (
        <Button
            className={classes[Props.mode]}
            variant="outlined"
            size={Props.size}
            onClick={Props.onClick}
        >
            {Props.children}
        </Button>
    )
}
