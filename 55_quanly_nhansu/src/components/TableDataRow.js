import React, { Component } from 'react';

class TableDataRow extends Component {
    chuyenDoi = () => {
        if(this.props.permission===1) return "Admin";
        else if(this.props.permission===2) return"Modrator";
        else return "Normal";
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    
    deleteClick = (idUser) => {
        
        this.props.deleteClick(idUser);
    }
    
    
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.chuyenDoi()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={()=>this.editClick()}><i className="fa fa-edit"> Sửa </i></div>
                        <div className="btn btn-danger xoa" onClick={(idUser)=>this.deleteClick(this.props.id)} ><i className="fa fa-trash-o"> Xóa </i></div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;