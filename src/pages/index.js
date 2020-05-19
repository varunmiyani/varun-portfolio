import React from "react"
import {Helmet} from 'react-helmet'
import Portfolio from '../containers/Portfolio'
import './index.css'

const IndexPage = () => (
  <div>
      <Helmet>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      </Helmet>
      <Portfolio />
  </div>
)

export default IndexPage
