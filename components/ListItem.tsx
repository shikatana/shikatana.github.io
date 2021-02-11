import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href="/members/[id]" as={`/members/${data.id}`}>
    <a>
      {data.part} : {data.name}
    </a>
  </Link>
)

export default ListItem
