import React from 'react'
import { object } from './object'

const GridComponent = () => {
  return (
    <div>
      <div>
        {object.map((object, index) => {
          return (
            <div key={object.fruitName}>
              <div>
                {object.fruitName}
              </div>
              <div>
                {object.fruitColor}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GridComponent
