import React from 'react';
import Question from './Faq';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    }

    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }

  handleQuestionClick( id ) {
    if (id != this.state.selectedId) {
      this.setState( { selectedId: id }  )
    } else {
      this.setState( { selectedId: null }  )
    }

  }

  render(){

    let elements = this.props.data.map((element => {

      let selectQuestion = () => this.handleQuestionClick(element.id)


      return(
        <div>
          <Faq
            question = {element.question}
            key = {element.id}
            id= {element.id}
            answer = {element.answer}
            selectQuestion = {selectQuestion}
            designated = {element.id == this.state.selectedId}
          />
        </div>
      )
    })
  )
  return (
    <div>{elements}</div>
    )
  }
}

export default App;
