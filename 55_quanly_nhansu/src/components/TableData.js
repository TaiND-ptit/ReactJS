import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteClick = (idUser) => {
        this.props.deleteUser(idUser);
    }
    
    mappingDataUser = () => this.props.dataUser.map((value,key)=>(
        <TableDataRow
        deleteClick={(idUser)=>this.deleteClick(idUser)} 
        changeEditUserStatus ={()=>this.props.changeEditUserStatus()}  
        editFunClick={(user)=>this.props.edit(value)} 
        name = {value.name}
        tel ={value.tel}
        id={value.id}
        permission={value.permission}
        key={key} stt={key+1}/>
    ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover ">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện Thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          this.mappingDataUser()
                      }
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;