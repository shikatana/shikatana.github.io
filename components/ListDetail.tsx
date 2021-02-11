import * as React from 'react'

import { Member } from '../interfaces'

type ListDetailProps = {
  item: Member
}

const ListDetail = ({ item: member }: ListDetailProps) => (
  <div>
    <h1>{member.name}</h1>
    <p>Member ID: {member.id}</p>
  </div>
)

export default ListDetail
