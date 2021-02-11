import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | 仕方なく貯めた一億円">
    <h1>仕方なく貯めた一億円とは</h1>
    <p>仕方なく貯めてしまった一億円である。</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
