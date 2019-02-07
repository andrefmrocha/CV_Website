import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Header from '../components/header'
import InfoTabs from '../components/infoTabs'
import Typography from '@material-ui/core/Typography'

const IndexPage = () => (
  <Typography>
    <Layout>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(98, 137, 158, 0.5), rgb(98, 137, 159), rgb(103, 132, 154, 0.5), rgb(103, 132, 154, 1))`,
          width: `100%`,
          height: `10px`,
        }}
      />
      <InfoTabs />
    </Layout>
  </Typography>
)

export default IndexPage
