import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {

  //当图片浏览器展示出来时，滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden"
    //当关闭图片浏览器时，滚动功能恢复
    return ()=> {
      document.body.style.overflow = "auto"
    }
  }, [])
  return (
    <BrowserWrapper>
      PictureBrowser
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {}

export default PictureBrowser