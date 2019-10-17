import React from 'react';
import axios from 'axios';
import CardComponent from '../components/Card';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
    }

    async getNotes() {
        try {
            const res = await axios.get('http://localhost:4000/notes')
            this.setState({
                notes: res.data
            });
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getNotes();
    }

    render() {
        return (
            <div className="container">
                <h2>All notes</h2>
                <div className="card-columns">
                {this.state.notes.map((note, index) => {
                    return (
                        <div key={index}>
                            <CardComponent
                                name={note.name}
                                description={note.description}
                                status={note.status}
                            />
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }

}

export default HomePage;