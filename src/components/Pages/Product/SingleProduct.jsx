import { useRouter } from 'next/router'
import React from 'react'

export default function SingleProduct() {
    const router = useRouter()

    console.log(router.query.id)
  return (
    <div>ProductPage {router.query.id}</div>
  )
}
