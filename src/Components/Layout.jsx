import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
