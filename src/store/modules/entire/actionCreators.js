import { getEntireRoomList } from "@/services/modules/entire"
import * as actionTypes from "./constans"

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (pageCount = 0) => {
  //新函数
  return async (dispatch, getState) => {
    //0. 修改currentPage
    dispatch(changeCurrentPageAction(pageCount))
    //1.根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(pageCount * 20) //开始发送网络请求
    dispatch(changeIsLoadingAction(false)) //发送完之后
    //2.获取到最新的数据，保存redux的store中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}

          

