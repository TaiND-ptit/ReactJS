import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
           id:'',
           name:'',
           tel:'',
           permission:''
        }

    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
        kiemTraTrangThai = () => {
            if (this.props.hienThiForm === true) {
                return (
                    <div className="col">
                        <form>
                            <div className="card border-primary mb-3 mt-2">
                                <div className="card-header">Thêm mới user vào hệ thống</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" onChange={(event) => this.isChange(event)} aria-describedby="helpId" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="tel" onChange={(event) => this.isChange(event)} aria-describedby="helpId" placeholder="Điện thoại" />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)}>
                                            <option value>chọn Quyền </option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Modrator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="reset" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} className="btn-block btn btn-primary" value="Thêm mới"></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )
            }
        }


        render() {
            return (
                <div >
                    {this.kiemTraTrangThai()}
                </div>


            );
        }
    }
    export default AddUser;