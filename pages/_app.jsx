import React from 'react'
import dynamic from 'next/dynamic'
import App, {Container} from 'next/app'
import '../sass/index.scss'
import {getExperience} from './contents'
import {
    map,
    objOf,
} from 'ramda';

const Nav = dynamic(() =>
  import('../components/Nav'),
)

const createNavItems = map(objOf('label'))

export default class MyApp extends App {
  static async getInitialProps() {
    const pageProps = {experience: getExperience()}
    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props
    const items = [createNavItems(['home', 'portfolio'])];
    return (
      <Container>
        <Nav items={items}/>
        <Component {...pageProps} />
      </Container>
    )
  }
}
