import React, { Component } from 'react';

class Medication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: ['hello'],
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddMedicine = () => {
    const { inputValue, medicines } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        medicines: [...medicines, { name: inputValue }],
        inputValue: ''
      });
    }
  };

  handleDeleteMedicine = (index) => {
    const { medicines } = this.state;
    const updatedMedicines = [...medicines];
    updatedMedicines.splice(index, 1);
    this.setState({ medicines: updatedMedicines });
  };

  render() {
    const { medicines, inputValue } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.blueBox}>
          <h1 style={styles.title}>Medication Tracker</h1>
          <div style={styles.pillar}>
            <ul style={styles.list}>
              {medicines.map((medicine, index) => (
                <li key={index} style={styles.todoItem}>
                  <span>{medicine.name}</span>
                  <button onClick={() => this.handleDeleteMedicine(index)} style={styles.deleteButton}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={inputValue}
              onChange={this.handleInputChange}
              placeholder="Add a new medicine..."
              style={styles.input}
            />
            <button onClick={this.handleAddMedicine} style={styles.button}>Add</button>
          </div>
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={() => alert("Talk to me")}>Talk to me</button>
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
  deleteButton: {
    padding: '8px 16px',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#FF5733', // Adjusted color for delete button
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginLeft: '10px', // Added margin to separate delete button from medicine name
    cursor: 'pointer',
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

export default Medication;
