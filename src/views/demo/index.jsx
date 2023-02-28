import React, { memo } from 'react'

import { DemoWrapper } from './style'
import indicator from '@/base-ui/indicator'

const Demo = memo(() => {
  const names = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"]
  return (
    <DemoWrapper>
      <div className="control">
        <button>上一个</button>
        <button>下一个</button>
      </div>

      <div className="list">
        <indicator>
          {
            names.map(item => {
              return <button>{item}</button>
            })
          }
        </indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo