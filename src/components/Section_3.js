import React, {Component} from "react";

class ThirdSec extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
    this.addForm2 = this.addForm2.bind(this);
    this.deleteForm2 = this.deleteForm2.bind(this);
  }
addForm2(bool,e) {
  this.setState({
    show: bool
  });
  e.preventDefault();
}
deleteForm2(bool,e) {
  this.setState({
    show:bool
  })
  e.preventDefault();
}

  render() {
    return(
      <div>
          <form>

          <label> Company name </label>
          <br/>
           <input type ="text" placeholder="Company" name="company"
           value={this.props.company} onChange={this.props.onChange}
           /> <br/>
           <label> Position </label> <br/>
           <input type="text" placeholder="position" name="position"
           value={this.props.position} onChange={this.props.onChange}
           /> <br/>
          <label> Title </label> <br/>
           <input type="text" placeholder="title" name="title"
           value={this.props.title} onChange={this.props.onChange}
           /> <br/>
          <label> Job description </label> <br/>
           <textarea id="job_desc" rows="4"cols="50"
           placeholder="Description.." name="description"
           value={this.props.description} onChange={this.props.onChange}
            />
           <br/> <br/>
           <button id="add" onClick={this.addForm2.bind(null,true)}> Add </button>

           {this.state.show && (<div> <ThirdSec /> </div>)}

          </form>

      </div>
    );
  }
}

export default ThirdSec;
