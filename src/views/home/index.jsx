import React, { memo,  useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongfor from './c-cpns/home-longfor'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import { isEmptyObject } from '@/utils'




const Home = memo(() => {
  //从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo
  }), shallowEqual)

  // 派发异步的事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        {/* 折扣数据 */}
        {/* <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.333%"/>
        </div> */}
        { isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo}/>}
        { isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}/> }
        { isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/> }


        { isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} itemWidth="25%"/> }
        { isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} itemWidth="25%"/> }
        
        
      </div>

  
    </HomeWrapper>
  )

})

export default Home