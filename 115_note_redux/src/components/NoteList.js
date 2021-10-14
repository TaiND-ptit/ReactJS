import React, { Component } from 'react';

class NoteList extends Component {
    constructor(props) {
        super(props);
     
    }
    
 
    render() {
        return (
            <div className="col float-right">
            <div id="noteList" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="note1">
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                      Ghi chú
                    </a>
                  </h5>
                </div>
                <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                  <div className="card-body">
                    Section 1 content
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default NoteList;