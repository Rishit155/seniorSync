import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: 'Hydrocodone: 9am', completed: false },
        { task: 'Lisinopril: 9am', completed: false },
        { task: 'Omeprazole: 9am', completed: false }
      ],
    };
  }

  handleCheckboxChange = (index) => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.blueBox}>
          <h1 style={styles.title}>Jane's Medication</h1>
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
          <button onClick={() => alert("Medications not working?: Notify Doctor!")} style={styles.notifyButton}>
          Medications not working?: Notify Doctor!"
          </button>
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
  notifyButton: {
    padding: '8px 16px',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#FF5733',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px', // Added margin to separate the button from the input container
  },
};

export default TodoList;
