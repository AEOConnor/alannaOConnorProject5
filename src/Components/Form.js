import React, { Component } from 'react';
import '../styles/Form.css';

class Form extends Component {
  render(){
    return (
      <form action="submit" onSubmit={this.props.handleSubmit} >
        <fieldset>
          <label htmlFor="postCode">Enter postal code:</label>
          <input type="text" placeholder="(i.e A1A1A1)" onChange={this.props.handleChange} value={this.props.userPostalCode} required pattern="[A-Z][0-9][A-Z][0-9][A-Z][0-9]|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]"/>
          <button type="submit" onClick={this.props.handleClick}>Show me!</button>
        </fieldset>  
      </form>
    )
  }
}
export default Form;