import React, { Component } from 'react'
import VadProductList from './components/VadProductList';
import VadProductAdd from './components/VadProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products : [
        { title: 'Vũ Anh Dương', id: 2210900017, status: 1 },
        { title: 'Cabbage', id: 2, status : 1 },
        { title: 'Garlic', id: 3, status: 0 },
        { title: 'Apple', id: 4, status: 0},
        { title: 'Grass', id: 5, status: 1 },
      ]
    }
  }
  vadHandleSubmit = (param)=>{
    console.log("App:",param);

    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Vũ Anh Dương - Render Data - Event Form</h1>
        <hr/>
        <VadProductList renderProducts={this.state.products}/>
        <hr/>
        <VadProductAdd onSubmit = {this.vadHandleSubmit}/>
      </div>
    );
  }
}
