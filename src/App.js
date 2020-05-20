import React from 'react';
import './App.css';
import ListItems from './ListItems'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTrash } from '@fortawesome/free-solid-svg-core';
// library.add(faTrash);

class App extends React.Component{
  constructor(props){
    // eslint-disable-next-line no-unused-expressions
    super(props),
    this.state={
      items:[],
      currenItem:{
        text:'',
        key:''
      }
    }
    this.handelInput = this.handelInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deletItem = this.deletItem.bind(this);
  }
  handelInput(e){
    this.setState({
      currenItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currenItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currenItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deletItem(key){
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filteredItems
    })
  }

  render(){
    return (
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
        <input type="text" placeholder=" Enter the Text here " 
        value={this.state.currenItem.text}
        onChange={this.handelInput}></input>

        <button type="submit">Add</button>
        </form>
      </header>
      <ListItems items={this.state.items} deletItem={this.deletItem} ></ListItems>
      </div>
    );
  };
}

export default App;
