

 import React,{ Component } from 'react';    
import ReactDOM from 'react-dom';
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {start: "Initial State"};  
      this.changeState = this.changeState.bind(this)  
   }    
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.start}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({start:"All!!- Its a great reactjs tutorial."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  
}  
ReactDOM.render(<App/>,document.getElementById('root'));