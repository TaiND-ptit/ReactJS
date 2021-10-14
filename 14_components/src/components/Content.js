import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: 0
        }

    }
    thongbao = () => { alert('cách xử lý hay') }
    thongbao2 = (x) => { alert(x) }
    renderButton = () => {
        return (
            <div className='row'>
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
                    <div className="btn btn-danger" onClick={() => this.thongbao2("ha ha")} >Remove</div>
                </div>

            </div>
        )
    }
    renderForm = () => {
        return (
            <div className='row'>
                <div className="form-group">
                    <input defaultValue={this.props.tieude}type="text" name="ten" className="form-control" />
                    <br/>
                    <div className="btn btn-primary" onClick={() => this.saveClick()}>Save</div>
                </div>
            </div>
        )
    }

    displayCheck = () => {
        if(this.state.trangthai === 0){
            return this.renderButton();
        }
        else {
            return this.renderForm();
        }
    }
    editClick = () => {
        this.setState({
            trangthai:1
        });
    }
    saveClick = () => {
        this.setState({
            trangthai:0
        });
    }
    
    
    render() {
        return (
            <div>
                <section id="scroll">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className={" col-lg-6 " + this.props.vitri1}>
                                <div className="p-5"><img className="img-fluid rounded-circle" src={this.props.anh} alt="..." /></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.tieude}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                 { this.displayCheck()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Content;