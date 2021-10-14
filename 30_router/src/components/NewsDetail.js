import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated';
class NewsDetail extends Component {
    render() {
      var dem = 1;
        return (
            <div>
            <header className="masthead tintuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-1 text-center">Trang chi tiết tin</h1>
                    </div>
                  </div>
                </div>
              </div>
            </header>
        {
        dl.map((val,key) => {
          if (val.id === parseInt(this.props.match.params.id,10)){
            return (
              <div className="jumbotron jumbotron-fluid" key={key}>
                <div className="container">
                  <img src = {val.anh}  className="img-fluid rong100" alt="cố gắng lên"/>
                  <h2 className="lead text-center">{val.tieude}</h2>
                  <hr className="my-2" />

                  <p>{val.noidung}</p>
                </div>
              </div>
            );
          }
         return true;
         
        })
       }
            <div className="container">
              <h4 className="card-title text-center">Tin liên quan</h4>
              <div className="row">
                <div className="col-12">
                  <div className="card-deck">
                    {
            
                      dl.map((value,key)=>{
                        if(value.id !== parseInt(this.props.match.params.id,10)){
                          if(dem <= 4 ){
                            dem++;
                           return(
                           <NewsRelated key={key} 
                           tinId={value.id}
                           anh ={value.anh}
                           trichdan={value.trichdan}
                           tieude={value.tieude}/>
                           );
                          }
                         
                        }
                       return true;
                      })
                    }
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        );
    }
}

export default NewsDetail;