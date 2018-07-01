import React, { Component } from "react";
import HeaderComponent from "./Components/HeaderComponent";
import List from "./Components/List";
import FormSubmit from "./Components/FormSubmit";

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        todos: [
            {id: 1, name: "Shopping", Component: false },
            {id: 2, name: "Swiming", Component: false },
            {id: 3, name: "Watch Movie", Component: false },
            {id: 4, name: "Dinner", Component: false },
            {id: 5, name: "Sleeping", Component: false }
        ],
        message: ""
    };
    //โคตรงง อะไรแว้ !!!!!! 
    this.onChangeMassage = this.onChangeMassage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
 }

 onChangeMassage(e){
   this.setState({ message: e.target.value });
 }

 onSubmitMessage(e) {
   e.preventDefault(); //ป้องกันการเปลี่ยนหน้า
   let oldTodos = this.state.todos;
   let todosLength = this.state.todos.length;
   let lastId = this.state.todos[todosLength - 1].id;
   let newMessage = {id: lastId + 1, name: this.state.message, complete: false };
   oldTodos.push(newMessage);
   this.setState({ todos: oldTodos});
 }

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponent>
            TODO LIST ::
        </HeaderComponent>
        <List todos={this.state.todos} />
        <FormSubmit 
          onChangeMassage={this.onChangeMassage} 
          onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}

export default App;