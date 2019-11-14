import * as React from 'react'
import Login from './Login'


interface MyState {
    userName?: string,
    password?: string,
    data?: object;

}

interface MyProps {
}


class Container extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props)
        this.state = {
            password: '',
            userName: '',
            data: {},
        }

        this.handlePassword = this.handlePassword.bind(this)
        this.handleUser = this.handleUser.bind(this)
    }

    public handleUser = (e) => {
        return (
            this.setState({
                userName: e.target.value,
            })
        )
    }

    public handlePassword = (e) => {
        return (
            this.setState({
                password: e.target.value,
            })
        )
    }

    public handleSubmit = () => {
        event.preventDefault();
        console.log(this.state.userName)
        console.log(this.state.password)
        const options = {
            method: 'POST',
            body: JSON.stringify({
                password: window.btoa(this.state.password),
                userName: this.state.userName,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        return (
            fetch('https://jsonplaceholder.typicode.com/posts', options)
                .then(response => {
                    return (response.json())
                })
                .then(data => {
                    return (
                        this.setState({
                            data: data,
                        }, () => console.log(this.state.data))
                    )
                },
                )
        )
    }

    public keypress = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== "") {
            this.handleSubmit()
        }
    }

    public render() {
        return (
            <Login 
            userName={this.state.userName} 
            passWord={this.state.password} 
            keyPress={this.keypress} 
            handleUser={this.handleUser} 
            handlePassword={this.handlePassword} 
            handleSubmit={this.handleSubmit} 
            />
        )
    }
}

export default Container