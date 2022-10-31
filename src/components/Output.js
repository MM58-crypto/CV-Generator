import React, {Component} from "react";
import ReactToPrint from "react-to-print";

class Outputcv extends Component {



render() {

  return(

    <div class="tobeprinted">
      <fieldset class="f2">
      <h2>Generated CV</h2>
      <h3>General info </h3>
      <img src={this.props.image} alt="personal pic"/>
      <p>Name: {this.props.name} </p>
      <p>Email: {this.props.email}</p>
      <p>Phone number:{this.props.phone} </p>

      <h3>Educational Experience </h3>
      <p>School/University name: {this.props.school_name} </p>
      <p>Programme/Course: {this.props.course}</p>
      <p>Enrolled date: {this.props.date1} </p>
      <p> To: {this.props.date2}</p>

      <h3>Practical experience</h3>
      <p>Company Name: {this.props.company}</p>
      <p>Position: {this.props.position}</p>
      <p>Job title: {this.props.title}</p>
      <p>Job description: {this.props.description} </p>
      <br/>

    
      </fieldset>
    </div>

  );
}

}

export default Outputcv;
