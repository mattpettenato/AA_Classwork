import React from "react";

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    // console.log(this.props)
    return(
      <li> 
        {this.props.pokeman.name}
        <img src={this.props.pokeman.image_url} width = "300px"/>
      </li>
    )
  }
}

export default PokemonIndexItem;