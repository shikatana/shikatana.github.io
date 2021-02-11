import React from 'react'
import Link from 'next/link'

import { Member } from '../interfaces'

type Props = {
  data: Member
}

const ListItem = ({ data }: Props) => (
  <Link href="/members/[id]" as={`/members/${data.id}`}>
    <a>
      {data.part} : {data.name}
    </a>
  </Link>
)

export default ListItem
