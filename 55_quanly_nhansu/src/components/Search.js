import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj:{}
        }

    }
    
    getUserEditInfo = (info) => {
        this.props.getUserEditInfoApp(info);
        this.setState({
            userObj:info
        });
    }
    

    isShowEditForm = () => {
        if( this.props.editUserStatus===true){
            return<EditUser 
            getUserEditInfo ={(info) =>this.getUserEditInfo(info)}
            userEditObject={this.props.userEditObject}
            changeEditUserStatus ={() =>this.props.changeEditUserStatus()}/>
        }
       
    }
    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Đóng lại</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Thêm mới</div>
        }
    }
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnect(this.state.tempValue);
    }

    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input style={{ width: '600px' }} type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập từ khóa" />
                        <div className="btn btn-info ml -2" onClick={(dl) => this.props.checkConnect(this.state.tempValue)}>Tìm kiếm</div>

                    </div>
                    <div className="btn-group1 mt-2">
                        {this.hienThiNut()}
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default Search;