import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/hello'))

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Head>
      <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
    </Head>
    <DynamicComponent />
    <p>Hello world!</p>
  </div>
)

