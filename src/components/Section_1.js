import React, {Component} from "react";


class FirstSec extends Component {




  render() {
  //  const {name, email, phone} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
       <label> Name </label>
       <br/>
        <input type ="text" value={this.props.name} name="name"
         onChange={this.props.onChange}
         placeholder="Name" /> <br/>
      <label> Email </label>
       <br/>
        <input type ="text" name="email" value={this.props.email}
        onChange={this.props.onChange}
        placeholder="email" /> <br/>
       <label>Phone </label>
       <br/>
        <input type ="text" name="phone"
        value={this.props.phone}
        onChange={this.props.onChange}
        placeholder="phone num" />
        <br/>
        <p>Please upload a photo of yourself</p>

        <br/> <br/>


        </form>

      </div>

    );
  }
}

export default FirstSec;
