import { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
  }
  state={name: "COMPONENT"}
  componentDidMount() {
    setInterval(() => {
      this.setState({name:"COMPONENT"})
    }, 5000) 
  }
  render() { 
    console.log("***Parent Component RENDER***")
    const {name} = this.state
    return ( 
      <>
        <MemoComp name={name}/>
      </>
     );
  }
}
 
export default ParentComp;
