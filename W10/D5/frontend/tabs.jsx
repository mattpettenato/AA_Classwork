import React from 'react'

export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = { tab: 0 }
        this.whichTab = this.whichTab.bind(this)
    }
    

whichTab(){
    this.setState({ tab: title })
}

    render(){
        return(
           <div>
               <h1>Tabs</h1>
               <div className="tabs">

               </div>
           </div>
           
        )
    }
}