import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            trangthai:false
        }
    }
    thayDoiTrangThai = () => {
        this.setState({
            trangthai:!this.state.trangthai
        });
    }
    
    hienThiNut = () => {
        if(this.state.trangthai===true){
            return <div className="btn btn-block btn-outline-info" onClick ={()=>this.thayDoiTrangThai()}>Đóng lại</div>;
        }
        else{
            return <div className="btn btn-block btn-outline-info" onClick ={()=>this.thayDoiTrangThai()}>Thêm mới</div>;
        }
    }
    hienThiForm = () => {
        if(this.state.trangthai===true){
            return(
                <div className="card border-primary mb-3 mt-2">
                <div className="card-header">Thêm mới user vào hệ thống</div>
                <div className="card-body text-primary">
                  <div className="form-group">
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Điện thoại" />
                  </div>
                  <div className="form-group">
                    <select className="custom-select" required>
                      <option value>chọn Quyền </option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button className="btn-block btn btn-primary">Thêm mới</button>
                  </div>
                </div>
              </div>
            )
        }
        
    }
    
    
    
    render() {
        return (
            <div className="col-3">
        
            {this.hienThiNut()}
            {this.hienThiForm()}
           
            </div>
         
          
        );
    }
}

export default AddUser;