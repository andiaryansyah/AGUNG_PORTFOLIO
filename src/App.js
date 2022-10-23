import React from 'react'

import { Header, DesignWeb, Exploration, ProductDesign, Project } from './container'
// import { Navbar } from './components'

const App = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Header />
        <Project />
        <ProductDesign />
        <DesignWeb />
        <Exploration />
    </div>
  )
}

export default App