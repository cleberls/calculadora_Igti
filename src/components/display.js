// Importando tudo que é nescessário
import React, {Component} from 'react';

//Criando uma Class para exibir no display
class Display extends Component {
  render(){
    return(
    <div className={"display"}>
      {this.props.value}
    </div>
    )
  }
}

// exportando a Classe
export default Display;