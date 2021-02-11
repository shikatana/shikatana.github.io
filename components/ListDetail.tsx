import * as React from 'react'

import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>{user.name}</h1>
    <p>Member ID: {user.id}</p>
  </div>
)

export default ListDetail
