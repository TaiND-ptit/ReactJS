import React, { Component } from 'react';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import dl from './Dulieu.json';
const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: dl,
      editUserStatus: false,
      userEditObject:{}
    }
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }
  addUser = (name, tel, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item)
    this.setState({
      data: items
    }
    );
  }

  editUser = (user) => {
    this.setState({
      userEditObject:user
    });

  }
  
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  }
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name=info.name;
        value.tel=info.tel;
        value.permission=info.permission;
      }
    });
  }
  deleteUser = (idUser) => {
   var deleteData = this.state.data;
   deleteData=deleteData.filter(item =>item.id!==idUser);
   this.setState({
     data:deleteData
   });
  }

  render() {
    var ketqua = [];
    this.state.data.forEach(i => {
      if (i.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(i);
      }

    });
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
              getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)}
              userEditObject={this.state.userEditObject}
              editUserStatus={this.state.editUserStatus}
              checkConnect={(dl) => this.getTextSearch(dl)}
              changeEditUserStatus ={()=>this.changeEditUserStatus()}              
              ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm} />
              <TableData 
              deleteUser={(idUser) => this.deleteUser(idUser)}
              changeEditUserStatus ={()=>this.changeEditUserStatus()}  
              edit={(user) => this.editUser(user)} dataUser={ketqua} />
              <AddUser
                add={(name, tel, permission) => this.addUser(name, tel, permission)}
                hienThiForm={this.state.hienThiForm}

              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
