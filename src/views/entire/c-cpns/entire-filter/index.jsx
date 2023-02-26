
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [ selectItems, setSlectItems ] = useState([])

  function itemClickHandle(item) {
    //记录点击的item
    const newItem = [...selectItems]
    if(newItem.includes(item)) {
      const itemIndex = newItem.findIndex(filterItem => filterItem === item)
      newItem.splice(itemIndex, 1)
    } else {
      newItem.push(item)
    }

    setSlectItems(newItem)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return (
              <div 
                className={classNames("item", { active: selectItems.includes(item) })}
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}

              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})



export default EntireFilter