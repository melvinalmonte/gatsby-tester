import * as React from 'react'
import { Form, Button } from 'react-bootstrap'

type IProps = {
    userName?: string,
    passWord?: string,
    keyPress?: any,
    handleUser?: any,
    handlePassword?: any,
    handleSubmit?: any,
}

const Login: React.FunctionComponent<IProps> = ({ userName, passWord, handleUser, handlePassword, keyPress, handleSubmit }) => {
    return <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-5' />
            <div className='col-md-2'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="userName" placeholder="User Name" value={userName} onChange={handleUser} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={passWord} onChange={handlePassword} onKeyDown={keyPress} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
            <div className='col-md-5' />
        </div>
    </div>




}

export default Login