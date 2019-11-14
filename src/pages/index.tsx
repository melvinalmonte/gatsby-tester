import * as React from "react"
import Layout from "../components/layout/Layout"
import Banner from "../components/banner/Banner"
require('../../node_modules/bootstrap/dist/css/bootstrap.css')

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout/>
        <Banner/>
      </div>
    )
  }
}

export default Index