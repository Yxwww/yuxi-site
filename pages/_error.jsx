import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'
import Page from '../components/layouts/main'

const ErrorPage = ({ errorCode, stars }) => {
  if (errorCode) {
    return (
      <Page>
        <Error statusCode={errorCode} />
      </Page>
    )
  }

  return (
    <Page>
      <div className="text-xl mx-auto vertical-align text-center left-0 right-0">
        Something went wrong :( <br />
        Next stars: {stars}
      </div>
    </Page>
  )
}

ErrorPage.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const errorCode = res.statusCode > 200 ? res.statusCode : false
  const json = await res.json()

  return { errorCode, stars: json.stargazers_count }
}

export default ErrorPage
