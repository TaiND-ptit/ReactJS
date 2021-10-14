import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            content:''
          }
        
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
      }
    addData = (title,content) => {
   
        var item ={};
       item.noteTitle = title;
       item.noteContent = content;
    //    this.props.getData(item);
    //    alert ('thêm dữ liệu '+JSON.stringify(item) + "thành công");
       this.props.addDataStore(item);
       alert ('thêm dữ liệu '+JSON.stringify(item) + "thành công");
       
    }
        
    render() {
        return (
            <div className="col-4">
                <h3>Sửa nội dung note</h3>
                <form>
                <div className="form-group">
                    <label htmlFor="title">Tiêu đề note</label>
                    <input onChange ={(event) => this.isChange(event)}  type="text" className="form-control" name="title" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
                    <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Nội dung note</label>
                    <textarea onChange ={(event) => this.isChange(event)} type="text" className="form-control" name="content" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="nội dung note" defaultValue={""} />
                    <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung vào đây</small>
                </div>
                <button type="reset" onClick = {() => this.addData(this.state.title,this.state.content)}
                  className="btn btn-primary btn btn-block">Lưu</button>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        }
    }
}
export default connect(mapDispatchToProps)(NoteForm);
