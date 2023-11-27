import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div className='d-flex justify-content-center align-items-center'>

      <Image src="https://in.pinterest.com/pin/1086352741339595859/" alt="photos" width={200} height={auto} />
    </div>
  )
}

export default Loading
