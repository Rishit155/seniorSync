import React, { Component } from 'react';

class CognitiveStimulationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [
        { task: 'Crossword puzzles', completed: false },
        { task: 'Sudoku', completed: false },
        { task: 'Memory games', completed: false }
      ],
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTest = () => {
    const { inputValue, tests } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        tests: [...tests, { task: inputValue, completed: false }],
        inputValue: ''
      });
    }
  };

  handleCheckboxChange = (index) => {
    const { tests } = this.state;
    const updatedTests = [...tests];
    updatedTests[index].completed = !updatedTests[index].completed;
    this.setState({ tests: updatedTests });
  };

  render() {
    const { tests, inputValue } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.blueBox}>
          <h1 style={styles.title}>Cognitive Stimulation Tests</h1>
          <div style={styles.pillar}>
            <ul style={styles.list}>
              {tests.map((test, index) => (
                <li key={index} style={{ ...styles.testItem, ...(test.completed ? styles.completed : {}) }}>
                  <input
                    type="checkbox"
                    checked={test.completed}
                    onChange={() => this.handleCheckboxChange(index)}
                  />
                  <span>{test.task}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={() => alert("Need more activities?")}>Need more activities?</button>
            <button style={styles.button} onClick={() => alert("Call Your Doctor")}>Call Your Doctor</button>
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
  testItem: {
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

export default CognitiveStimulationList;
