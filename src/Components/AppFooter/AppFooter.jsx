import { Typography } from 'antd'
import React from 'react'

function AppFooter() {
  return (
    <div className='AppFooter'>
      <Typography.Link href='tel:+123456789'>+123456789</Typography.Link>
      <Typography.Link href='htttps://www.gooogle.com ' target={"_blank"}>
        Privacy Policy</Typography.Link>
      <Typography.Link href='htttps://www.gooogle.com ' target={"_blank"}>
        Terms of use</Typography.Link>
</div>
  )
}

export default AppFooter
