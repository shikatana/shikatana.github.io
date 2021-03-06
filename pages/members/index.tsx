import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Member } from '../../interfaces'
import { MemberData } from '../../utils/member-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Member[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Members | 仕方なく貯めた一億円">
    <h1>Members</h1>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Member[] = MemberData
  return { props: { items } }
}

export default WithStaticProps
