import { Pagination } from '@mui/material'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { PaginationWrapper } from './style'

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }))
  const startCount = currentPage * 20 + 1
  const endCount = startCount + 20
  const totalPage = Math.ceil(totalCount / 20)
  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className="info">
            <Pagination count={totalPage} />
            <div className="desc">
              第{startCount}-{endCount}个房源，共超过{totalCount}个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination