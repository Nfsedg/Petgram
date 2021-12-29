import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles' 
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({ email: email.value, password: password.value })
    }
    return(
        <React.Fragment>
            <Title>{title}</Title>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Input disabled={disabled} placeholder='Email' {...email}></Input>
                <Input disabled={disabled} placeholder='Password' type="password" {...password}></Input>
                <SubmitButton disabled={disabled}>{title}</SubmitButton>
            </Form>
            {error && <Error>{error}</Error>}
        </React.Fragment>
    )
}