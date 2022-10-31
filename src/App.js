import React, {Component} from "react";
import "./styles/style.css"
import FirstSec from "./components/Section_1";
import SecondSec from "./components/Section_2";
import ThirdSec from "./components/Section_3";
import Outputcv from "./components/Output";
import ReactToPrint from "react-to-print";




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      school_name: '',
      course: '',
      date1: '',
      date2: '',
      company: '',
      position: '',
      title: '',
      description: '',
      image: null

    }

  }

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });

}
// reconfg submit button and add functionality to edit button
// style the output and the rest of the webpage/application properly
// need an option to add an image

onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          image: URL.createObjectURL(img)
        });
      }
};

 render() {

   return (
     <div>
       <div class="header">
       <h1 align="center" > CV Generator </h1>
       </div>
       <fieldset class="f1">
        <h3> Section 1 - General information </h3>
        <FirstSec onChange={this.handleChange}  />
        <input type="file" name="image" onChange={this.onImageChange}/>
        <h3> Section 2 - Educational Experience </h3>
        <SecondSec onChange={this.handleChange}/>
        <h3> Section 3 - Practical Experience </h3>
        <ThirdSec onChange={this.handleChange}/>

       </fieldset>

      <Outputcv image={this.state.image} name={this.state.name} email={this.state.email} phone={this.state.phone}
       school_name={this.state.school_name} course={this.state.course} date1={this.state.date1}
        date2={this.state.date2} company={this.state.company} position={this.state.position}
        title={this.state.title} description={this.state.description}
         ref={el => (this.componentRef =el)}
         />
      <ReactToPrint
        trigger={() => <div id="btn"><button id="printbtn"> Print CV</button> </div>}
        content={() => this.componentRef}
      />
    </div>
   );
 }

}



export default App;
