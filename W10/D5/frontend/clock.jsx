import React from 'react'

export default class Clock extends React.Component{
constructor(props){
    super(props);
    this.state={
        time: new Date()
    }
    this.tick = this.tick.bind(this)
}

 tick(){
    this.setState({ time: new Date() })
}

componentDidMount(){
    this.intervalID = setInterval(this.tick, 1000)
}

componentWillUnmount(){
    clearInterval(this.intervalID)
}

render(){
    return(
        <div>
        <h1>Clock</h1>
            time:
            <ul>
                { this.state.time.getHours() } : { this.state.time.getMinutes() } : { this.state.time.getSeconds() } 
            </ul>
        </div>
    )
}
}
