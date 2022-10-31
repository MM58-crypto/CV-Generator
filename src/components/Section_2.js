import React, {Component} from "react";

class SecondSec extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
    this.addForm1 = this.addForm1.bind(this);
    this.deleteForm1 = this.deleteForm1.bind(this);
  }
  addForm1(bool,e){
    this.setState({
      show: bool
    });
    e.preventDefault();

  }
  deleteForm1(bool,e) {
    this.setState({
      show:bool
    })
    e.preventDefault();
  }
/*
 printsmth(e)  {
    console.log("pls print smth");
    e.preventDefault();

  };
*/
  render() {
    //const {school_name, course, date1, date2} = this.state;

    return(
      <div>
          <form>

          <label> School/University Name </label>
          <br/>
           <input type ="text"
           value={this.props.school_name}
           name="school_name"
           onChange={this.props.onChange}
           placeholder="University/school" /> <br/>
          <label> University programme/Course </label> <br/>
           <input type="text"
           value={this.props.course}
           name="course"
           onChange={this.props.onChange}
           placeholder="course"/> <br/>
           <label> Enrolled date </label> <br/>
           <input type="date"
           value={this.props.date1}
           name="date1"
           onChange={this.props.onChange}
           /> <br/>
           <label> To </label> <br/>
           <input type="date"
           value={this.props.date2}
           name="date2"
           onChange={this.props.onChange}
            /> <br/>
            <br/>
          <button id="add" onClick={this.addForm1.bind(null,true)}> Add </button>
          <button id="delete" onClick={this.deleteForm1.bind(null,false)}> Delete </button>
          {this.state.show && (<div> <SecondSec /> </div>)}

          </form>
      </div>
    );
  }
}

export default SecondSec;
