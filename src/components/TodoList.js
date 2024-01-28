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
        <div style={styles.blueBox}>
          <h1 style={styles.title}>Today's Checklist</h1>
          <div style={styles.pillar}>
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
          </div>
          <div style={styles.inputContainer}>
          </div>
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={() => alert("Talk to Authorized User")}>Talk to Authorized User</button>
            <button style={styles.button} onClick={() => alert("Call for Help")}>Call for Help</button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#E0F2F1',
  },
  blueBox: {
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    height: '100vh', // Adjusted to full viewport height
    width: '400px', // Adjusted to desired width
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative', // Added positioning for absolute buttons
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  pillar: {
    flex: '1', // Takes remaining space
    overflowY: 'auto', // Enables vertical scrolling if content exceeds box height
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
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%', // Added to stretch the buttons horizontally
    marginTop: '10px', // Adjusted to separate the buttons from the input
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
  },
};

export default TodoList;
