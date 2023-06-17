import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'abc'
        }
    }
    
    render() {
        return (
            <div>
                <>
                <p>{this.state.name}</p>
                <Button color="danger">Danger!</Button>;
                </>
            </div>
        );
    }
}

export default Student;