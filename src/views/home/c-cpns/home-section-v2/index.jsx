import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import { SectionV1Wrapper } from '../home-section-v1/style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

const HomeSectionV2 = memo((props) => {
  //从props获取数据
  const { infoData } = props

  //定义内部的state
  //从对象中需取出字符串----数据的转换
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames =  infoData.dest_address?.map(item => item.name)

  //事件处理函数
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.333%"/>
    </SectionV1Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2