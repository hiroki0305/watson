import React from 'react';
import {useForm} from "react-hook-form";
import {useCreateUserMutation} from "../types/graphql";

type IFormInput = {
    name: string,
}

export const QuesitonCreate = () => {
    const {register, handleSubmit} = useForm();
    const [addUser] = useCreateUserMutation()

    const onSubmit =
        (data: IFormInput) => {
            addUser({variables: data})
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input name="name" ref={register}/>
            <input type="submit"/>
        </form>
    );
}


