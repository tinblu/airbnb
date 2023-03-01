import PictureBrowser from '@/base-ui/picture-browser'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetailPictures = memo((props) => {
  //定义组件内部的状态
  const [showBrowser, setShowBrowser] = useState(false)
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1,5).map(item => {
              return (
                <div className="item" key={item}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="show-btn" onClick={e => setShowBrowser(true)}>显示图片</div>

      { showBrowser && <PictureBrowser/>}
    </PicturesWrapper>
  )
})

DetailPictures.propTypes = {}

export default DetailPictures