
import 'firebase/database';    // for realtime database
import 'firebase/analytics';
import React, { Component } from 'react';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import  {Data}  from './firebaseConnect';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={

   }
  }
  addData = (item) => {
    Data.push(item);
     console.log('đã thêm ');
  }
  

  
  render() {
     Data.once('value').then(function(snapshot){
       console.log(snapshot.val());
     })
    return (
      <div>
      <Nav />
      <div className="container">
        <div className="row">
          <NoteList />
          <NoteForm getData = {(item) => this.addData(item)}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
