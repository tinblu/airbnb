import React, { memo } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireWrapper>
        <EntireFilter/>
        <EntireRooms/>
        <EntirePagination/>
      </EntireWrapper>
    </EntireWrapper>
  )
})

export default Entire