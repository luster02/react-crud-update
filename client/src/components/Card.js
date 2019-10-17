import React from 'react';
import '../App.css'

class CardComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render() {
        var { name, description, status} = this.props;
        const estado = status;
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">{name}</h3>
                        { estado?(
                            <span className="badge badge-success">Complete</span>  
                            )
                            :(
                            <span className="badge badge-warning">Incomplete</span>  
                            )
                        }
                
                    </div>
                    <div className="card-body">
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="card-footer">
                       <div id="btn-container" className="text-center">
                        <button className="btn btn-outline-info btn-block">Edit</button>
                        <button className="btn btn-outline-danger btn-block">Delete</button>
                       </div>
                    </div>
                </div>  
            </div>
        )
    }

}

export default CardComponent;