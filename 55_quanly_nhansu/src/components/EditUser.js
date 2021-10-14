import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission
           
        }
    }
    
   isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
      })
   }

    saveInfo = () => {
       var info ={};
       info.id=this.state.id;
       info.name=this.state.name;
       info.tel=this.state.tel;
       info.permission=this.state.permission;
       this.props.getUserEditInfo(info);
       this.props.changeEditUserStatus();
    }
    
    render() {
        return (
            <div className="row">
            <div className="col">
                <form method="post">
                    <div className="card text-left">
                        <div className="card text_white bg-secondary mb-3">
                            <div className="card-header text-center">Sửa thông tin</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input defaultValue={this.props.userEditObject.name} onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Username" name="name" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.userEditObject.tel} onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Điện thoại" name="tel" />
                                </div>
                                <div className="form-group">
                                    <select defaultValue={this.props.userEditObject.permission} onChange={(event) => this.isChange(event)} className="custom-select" required name="permission">
                                        <option value>chọn Quyền </option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button"  onClick={() =>this.saveInfo()} className="btn-block btn btn-primary" value="Lưu"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default EditUser;