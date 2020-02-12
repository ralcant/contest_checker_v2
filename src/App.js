  import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import StudentBox from './StudentBox'
import { ModalAddStudent } from './ModalAddStudent';
import Button from 'react-bootstrap/Button';
import Answers from './Answers'

export class App extends React.Component {
  constructor(props){
    super(props);
    this.correctAnswers = ["A", "C", "D", "B", "D", "D", "E", 15];
    this.questionOptions = ["A", "B", "C", "D", "E", "F"];
    this.numQuestions = 8;
    this.state = {
        answers: new Map(),
        showModal: false,
    }
    this.addStudent = this.addStudent.bind(this);
    this.generateStudents = this.generateStudents.bind(this);
    this.generateTableHeader = this.generateTableHeader.bind(this);
  }
  componentDidMount(){
      this.addStudent("Joder", ["A", "C", "", "E", "A"]);
      this.addStudent("Raul Alfredo Alcantara Castillo", ["A", "C", "", "B", "A", "D"]);
      this.addStudent("Angie", ["B", "C", "D", "B", "A"]);
      this.addStudent("Ang", ["B", "C", "A", "B", "A"]);
  }
  generateCorrectAnswers(){
    let result = [];
    result.push(<th>Answers: </th>);
    for (let i = 0; i < this.numQuestions; i++){
      result.push(<th>{this.correctAnswers[i]}</th>)
    }
    result.push(<th></th>)
    return result
  }
  generateStudents(){
      let result = [];
      console.log("Generating students...");
      console.log(this.state.answers);
      for (let student of this.state.answers.keys()){
          let studentComponent = <StudentBox
                                      name = {student}
                                      answers = {this.state.answers.get(student)}
                                      correctAnswers= {this.correctAnswers}
                                      numQuestions = {this.numQuestions}
                                  />
          result.push(studentComponent);
      };
      
      return result;
  }
  generateTableHeader(){
    let result = [];
    result.push(<th>#</th>);
    for (let i = 0; i < this.numQuestions; i++){
      result.push(<th>Question {i+1}</th>);
    }
    result.push(<th>Score</th>);
    return result
  }
  addStudent(name, answers){
      let currentAnswers = this.state.answers;
      currentAnswers.set(name, answers);
      this.setState({
          answers: currentAnswers,
      }, ()=>{
          console.log("updated! " + name + " " + this.state.answers.get(name))
      })
  }
  render(){
    return (
      <div className="App">
          <Answers
          numQuestions = {this.numQuestions}
          generateTableHeader ={this.generateTableHeader}
          correctAnswers = {this.correctAnswers}
          numQuestions ={this.numQuestions}
          /> 

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
                {this.generateTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.generateStudents()}
          </tbody>
        </Table>
        <Button onClick ={()=>this.setState({showModal:true})}>Add Student!</Button>
        <ModalAddStudent 
          show ={this.state.showModal}
          onHide ={()=>{
            this.setState({showModal: false})
          }}
          addStudent = {this.addStudent}
          numQuestions = {this.numQuestions}
          questionOptions ={this.questionOptions}
          />
      </div>
    );
  }
}

export default App;

/*
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
*/