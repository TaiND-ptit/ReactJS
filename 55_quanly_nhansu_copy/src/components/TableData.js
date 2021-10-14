import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-9">
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
                        <tr>
                            <td>1</td>
                            <td>Tài</td>
                            <td>24357</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning sua"><i className="fa fa-edit"> Sửa </i></div>
                                    <div className="btn btn-danger xoa"><i className="fa fa-trash-o"> Xóa </i></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;