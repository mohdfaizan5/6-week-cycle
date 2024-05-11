import StepsBar from '@/components/StepsBar'
import { generateWeeks } from '@/utils/weekGenerator'
import React from 'react'



const page = () => {
  const startDate = new Date()
  generateWeeks({startDate})
  
  return (
    <div>
      
      
      <StepsBar/>

    </div>
  )
}

export default page