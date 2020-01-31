import React from 'react'

class App extends Component {
    state={
      AddToCart: 0
    }
  
    render = () =>{
      this.setState(
        {
          AddToCart:this.state.AddToCart
        }
      )


      export default 