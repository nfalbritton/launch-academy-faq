import React from 'react';

const Faq = props => {
  let buttonClass="fa fa-plus-square"
  let answerText= ""
  let answeredQuestion = "unanswered"

  if (props.designated) {
    buttonClass="fa fa-minus-square"
  } else {
    buttonClass="fa fa-plus-square"
  }

  if (props.designated) {
    answerText = <p>{props.answer}</p>
  } else {
    answerText=<p></p>
  }

  if (props.designated) {
    answeredQuestion = "answered"
  } else {
    answeredQuestion = "unanswered"
  }

  return (
    <div>
      <i className={buttonClass} onClick={props.selectQuestion}/>
      <div className={answeredQuestion} >{props.question}</div>
      {answerText}
    </div>
  )
}

export default Faq;
