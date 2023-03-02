import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition,CSSTransition } from 'react-transition-group'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ isNext, setIsNext ] = useState(true)
  const [ showList, setShowList ] = useState(true)

  //当图片浏览器展示出来时，滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden"
    //当关闭图片浏览器时，滚动功能恢复
    return ()=> {
      document.body.style.overflow = "auto"
    }
  }, [])

  //事件监听逻辑
  function closeBtnClickHandle() {
    if(closeClick) closeClick()
  }

  function controlClickHandle(isNext) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1//let可以重新赋值 const 不行
    if(newIndex < 0) newIndex = pictureUrls.length - 1
    if(newIndex > pictureUrls.length - 1) newIndex = 0

    setIsNext(isNext)
    setCurrentIndex(newIndex)
  }

  function bottomItemClickHandle(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose/>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77"/>
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77"/>
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}:</span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setShowList(!showList)}>
              <span>{showList ? "显示" : "隐藏"}图片列表</span>
              { showList ? <IconTriangleArrowBottom/> : <IconTriangleArrowTop/>}
            </div>
          </div>
          <div className={classNames("list", {click: showList === false})} >
          <Indicator selectIndex={currentIndex}>
            {
              pictureUrls.map((item, index) => {
                return (
                  <div 
                    className={classNames("item", {active: currentIndex === index})}
                    key={item}
                    onClick={e => bottomItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Indicator>
        </div>
        </div>
        
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser