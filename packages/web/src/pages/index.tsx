import React from 'react'
import Container from '@material-ui/core/Container'
import { Layout } from '../components/layout'
import Question from '../template/Question/questionRow'
import { Grid } from '@material-ui/core'

const Home = () => {
  return (
    <Layout>
      <Grid container spacing={6}>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
          <Question />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
