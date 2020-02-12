import React from 'react';

let correctAnswerScore = 10;
let incorrectAnswerScore = -2;
let blankAnswerScore = 0;

export default class StudentBox extends React.Component{
    constructor(props){
        super(props);
        this.getScores = this.getScores.bind(this);
        this.getQuestionScore = this.getQuestionScore.bind(this);
        this.getTotalScore = this.getTotalScore.bind(this);
    }
    getScores(answers){
        let result = []
        for (let i = 0; i< this.props.numQuestions; i++){
            result.push(<th> {answers[i]}</th>);
        }
        return result;
    }
    getQuestionScore(answer, correctAnswer){
        if (answer === correctAnswer){

            return correctAnswerScore;

        } else  if (answer === ""){

            return blankAnswerScore;

        } else {

            return incorrectAnswerScore;
        }
    }
    getTotalScore(answers){
        let score = 0;
        for (let i = 0; i < answers.length; i++){
            let addScore = this.getQuestionScore(answers[i], this.props.correctAnswers[i]);
            score += addScore;
        }
        return score
    }
    render(){
        return(
            <tr>
                <th>{this.props.name}</th>
                {this.getScores(this.props.answers)}
                <th> {this.getTotalScore(this.props.answers)}</th>
            </tr>
    
        )
    }
}