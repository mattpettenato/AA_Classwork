import React from "react";

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    // console.log(this.props)
    return(
      <tr>
        <td> 
          {this.props.pokeman.name}
        </td>
        <td>
          <img src={this.props.pokeman.image_url} width="300px" />
        </td>
      </tr>
    )
  }
}

export default PokemonIndexItem;