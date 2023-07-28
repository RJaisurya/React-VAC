import React,{Component} from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:
      [
        {
          "name":"Arshath:Holt"
        },
        {
          "name":"Arun:AD"
        },
        {
          "name":"kartheepan:Bun"
        },
        {
          "name":"Adityan:Murugan"
        },
        {
          "name":"Aakash:Hash"
        }
      ]
    }
  }
 render(){
  return(
    <div>
      <Fruits/>
      <ul>
        {this.state.data.map((item)=><List data={item}/>)}
      </ul>
    </div>
  );
 }
}
class Fruits extends React.Component{
  render(){
      return(
        <div>
          <h1> Welcome to Buddy club </h1>
          <h4>It's about my friends</h4>          
        </div>
      );
  }
}
class List extends React.Component{
  render(){
   
    return(
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    );
}
}
export default App;