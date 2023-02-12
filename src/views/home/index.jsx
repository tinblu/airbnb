import React, { memo, useEffect, useState } from 'react'
import hyRequest from '@/services'

const Home = memo(() => {

  //定义状态
  const [ highScore, setHighScore ] = useState({})

  //网络请求的代码
  useEffect(() => {
    hyRequest.get({ url: "/home/highscore" }).then(res => {
      console.log(res)
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      <h2>{ highScore.title }</h2>
      <h4>{ highScore.subtitle}</h4>
      <ul>
        {
          highScore?.list?.map((item) => {//?.可选链 有值才会执行，没值返回undefined
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home