import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { Pagination } from '@mui/material'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

  //事件处理
  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    //更新最新的页码：redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper> 
      {
        !!roomList.length && (
          <div className="info">
            <Pagination count={totalPage} onChange={pageChangeHandle}/>
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