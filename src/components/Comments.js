import React from 'react';

class Comments extends React.Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div>
        {
          this.props.showComments
            ? (<div className="comments">
              <div className="row">
                <div className="col-md-offset-1">
                  <hr/>
                  <p>
                    Comment text
                  </p>
                  <form className="form-inline">
                    <div className="form-group">
                      <input className="form-control"/>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>)
            : null
        }
      </div>
    )
  }
}

export default Comments;
