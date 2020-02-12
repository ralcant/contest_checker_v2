import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default class Question extends React.Component{
    constructor(props){
        super(props);
        this.generateOptions = this.generateOptions.bind(this);
    }
    generateOptions(){
        let result = [];
        for (let option of this.props.questionOptions){
            result.push(<option>{option}</option>);
        }
        return result;
    }
    render(){
        return(
            <Form.Group>
                <Form.Label>Answer for question {this.props.questionNumber}</Form.Label>
                <Form.Control as ="select" size="sm" type="text" onChange={this.props.onChange} rows="3" placeholder="Type the student's name...">
                    {this.generateOptions()}
                    <option>No answer was provided</option>
                </Form.Control>
            </Form.Group>
        )
    }
}

