import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import StudentBox from './StudentBox'
import { ModalAddStudent } from './ModalAddStudent';
import Button from 'react-bootstrap/Button';

export default class Answers extends React.Component{
    constructor(props){
        super(props);
    }
    generateTableHeader(){
        let result = [];
        result.push(<th>#</th>);
        for (let i = 0; i < this.props.numQuestions; i++){
          result.push(<th>Question {i+1}</th>);
        }
        result.push(<th>Score</th>);
        return result
    }
    render(){
        return(
            <Table striped bordered hover >
                <thead>
                    <tr>
                        {this.props.generateTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    <StudentBox
                        name = {"Answers:"}
                        answers = {this.props.correctAnswers}
                        correctAnswers= {this.props.correctAnswers}
                        numQuestions = {this.props.numQuestions}
                    />
                </tbody>
            </Table>
        )
    }

}