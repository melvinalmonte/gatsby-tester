import * as React from 'react'
import { Table } from 'react-bootstrap'

type IProps = {
  apiData?:any,
}

const Grid: React.FunctionComponent<IProps> = ({apiData}) => {
  return <Table striped={true} bordered={true} hover={true} variant="dark">
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
      {(apiData).map((data, index) => {
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
}

export default Grid
