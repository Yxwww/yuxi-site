import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/hello'))

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <DynamicComponent />
    <p>Hello world!</p>
    <div>
        Click{' '}
        <Link prefetch href="/portfolio">
            <a>here</a>
        </Link>{' '}
        to read more
    </div>
  </div>
)

