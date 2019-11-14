import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import CustomBanner from "../components/CustomBanner"
require('../../node_modules/bootstrap/dist/css/bootstrap.css')

export default  () => 
    <div>
        <Layout/>
        <CustomBanner/>
    </div>
