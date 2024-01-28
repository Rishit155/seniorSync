import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: 'Take Motrin', completed: false },
        { task: 'Arthritis Stretches', completed: false },
        { task: 'Go for a run', completed: false }
      ],
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        todos: [...todos, { task: inputValue, completed: false }],
        inputValue: ''
      });
    }
  };

  handleCheckboxChange = (index) => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, inputValue } = this.state;

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Today's Checklist</h1>
        <ul style={styles.list}>
          {todos.map((todo, index) => (
            <li key={index} style={{ ...styles.todoItem, ...(todo.completed ? styles.completed : {}) }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handleCheckboxChange(index)}
              />
              <span>{todo.task}</span>
            </li>
          ))}
        </ul>
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
            placeholder="Add a new task..."
            style={styles.input}
          />
          <button onClick={this.handleAddTodo} style={styles.button}>Add</button>
        </div>
        <button style={styles.button} onClick={() => alert("Talk to me")}>Talk to me</button>
        <button style={styles.button} onClick={() => alert("Call for Help")}>Call for Help</button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#E0F2F1',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  todoItem: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  completed: {
    textDecoration: 'line-through',
    opacity: '0.5',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    marginRight: '10px',
    padding: '8px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px 16px',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
};

export default TodoList;
