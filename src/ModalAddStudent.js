import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Question from './Question'
export class ModalAddStudent extends React.Component {
    constructor(props){
        super(props);
        let answers = [];
        
        for(var i = 0; i < this.props.numQuestions; i++) {
            answers.push("");
        }
        this.state = {
            name: '',
            answers: answers,
        }
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit =(event)=>{
        console.log("submitting!")
        event.preventDefault();
        this.props.addStudent(this.state.name, this.state.answers);
    }
    handleNameChange = (event) =>{
        let studentName = event.target.value;
        console.log(studentName)
        this.setState({name: studentName});
    }
    handleAnswer = (evt, i)=>{
        let updatedAnswers = this.state.answers;
        updatedAnswers[i] = evt.target.value;
        this.setState({
            answers: updatedAnswers,
        })
        console.log(i);
    }
    generateStudentAnswers = () => {
        let result = []
        for (let i =0; i< this.props.numQuestions; i++){
            let questionComponent = <Question 
                                    questionNumber = {i+1}
                                    questionOptions = {this.props.questionOptions}
                                    onChange={evt => {this.handleAnswer(evt, i)}}
                                    />
            result.push(questionComponent);
        }
        return result;
    }
    render(){
        let that = this;
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Lets collect some information first...
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <h4>Student</h4>

                    <Form onSubmit ={that.handleSubmit}>
                        <Form.Group controlId="formNameStudent">
                            <Form.Label>Name</Form.Label>
                            <Form.Control size="sm" type="text" onChange={this.handleNameChange} rows="3" placeholder="Type the student's name..."/>
                        </Form.Group>

                        <h4> Answers: </h4>
                        {this.generateStudentAnswers()}
                        <Modal.Footer>
                            <Button type="submit" onClick={this.props.onHide}>Add student!</Button>
                        </Modal.Footer>  

                    </Form>
              
                </Col>

            </Modal.Body>


          </Modal>        
        )
    }
}
