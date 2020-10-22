import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'
import { get as _get } from 'lodash'

type Props = {
    fieldName: string
    label: string
}

export const AppTextField: React.FC<Props> = ({ fieldName, label }) => {
    const { register, errors } = useFormContext()
    const fieldErrors = _get(errors, fieldName)
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <TextField
                inputRef={register}
                name={fieldName}
                error={!!fieldErrors}
                helperText={fieldErrors ? fieldErrors.message : ''}
            />
        </FormControl>
    )
}