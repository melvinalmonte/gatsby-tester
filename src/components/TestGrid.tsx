import * as React from 'react'
import { Table } from 'react-bootstrap'

interface IState {
  apiCall?: any,

}

interface IProps {
}


export default class TestGrid extends React.Component<IProps, IState> {
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
        <Table striped={true} bordered={true} hover={true} variant="dark">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
          </tr>
          </thead>
          <tbody>
          {(this.state.apiCall).map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>

              </tr>
            )
          })}
          </tbody>
        </Table>
    )
  }
}

