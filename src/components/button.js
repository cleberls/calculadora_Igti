import  React, {Component} from 'react';

class Button extends Component{
  
   handleClick(){
    const{disabled,onclick} = this.props;  
    if ((this.props.onClick) && (!disabled))
      this.props.onClick();
  }

  render(){
    const cssButtonClass = this.props.disabled ? "button disabled": "button";
    return(
    <div className={cssButtonClass} onClick={this.handleClick.bind(this)}>
      {this.props.display}
    </div>)
  }

}
export default Button;