import * as React from 'react'
import Grid from './Grid'

interface IState {
  apiCall?: any,

}

interface IProps {
}

export default class Container extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      apiCall: [],
    }
    this.testRequest = this.testRequest.bind(this)
  }

  componentDidMount(): void {
    this.testRequest()
  }

  public testRequest = () => {
    return (
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
      }).then(res => {
        return res.json()
      }).then(data => {
          this.setState({
            apiCall: data,
          }, () => console.log(this.state.apiCall))
        },
      )
    )
  }

  public render() {
    return (
        <Grid apiData={this.state.apiCall}/>
    )
  }
}
