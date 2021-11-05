import React from 'react'
import ReactDOM from 'react-dom'

function Root(){
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'))
})