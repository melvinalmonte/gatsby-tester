import * as React from 'react'
import CustomNavbar from '../nav-bar/CustomNavBar'

const Layout: React.FunctionComponent = ({ children }) => {
    return <>
        <CustomNavbar/>
        <div
            style={{
                margin: '0 auto',
                maxWidth: '40rem',
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
            }}
        >
            {children}
        </div>
    </>
}

export default Layout
