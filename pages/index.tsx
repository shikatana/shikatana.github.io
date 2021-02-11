import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="仕方なく貯めた一億円">
    <h1>仕方なく貯めた一億円</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
