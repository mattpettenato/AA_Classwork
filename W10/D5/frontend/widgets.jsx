import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './clock'
import Tabs from './tabs'

const tabs = [
  {title: "one",
  content: "the first"},
  {title: "second",
    content: "the second"
  },
  {title: "third", 
  content: "the third"
}
]

function Root(){
  return (
    <div>
      <Clock/>
   <Tabs>{tabs}</Tabs>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'))
})