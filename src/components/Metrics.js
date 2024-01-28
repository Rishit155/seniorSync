import React from 'react';
import Chart from 'chart.js/auto';

class Metrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepHours: 0,
      stepsCompleted: 0,
      breathingPatterns: [],
      medicineConsistency: 0,
      heartRate: 0,
      bloodPressure: '120/80',
      sleepPatternData: [], // Data for Jane's sleeping patterns over the last month
      stepsCompletedData: [], 
      medicineConsistencyData: [] // Data for Jane's medicine consistency over the last month
    };
    this.sleepPatternChartRef = React.createRef();
    this.stepsCompletedChartRef = React.createRef();
    this.medicineConsistencyChartRef = React.createRef();
  }

  componentDidMount() {
    // Fetch data for the elderly person's metrics from an API or database
    this.fetchMetrics();
    this.fetchSleepPatternData();
    this.fetchMedicineConsistencyData();
    this.fetchStepsCompletedData();
  }

  fetchMetrics() {
    // Example API call or database query to fetch metrics data
    // Replace this with your actual data fetching mechanism
    // For demonstration purposes, I'm setting dummy data
    const dummyData = {
      sleepHours: 10,
      stepsCompleted: 5000,
      breathingPatterns: ['normal', 'normal', 'irregular', 'normal', 'normal'],
      medicineConsistency: 85,
      heartRate: 75,
      bloodPressure: '120/80'
    };

    // Update state with fetched metrics data
    this.setState({
      sleepHours: dummyData.sleepHours,
      stepsCompleted: dummyData.stepsCompleted,
      breathingPatterns: dummyData.breathingPatterns,
      medicineConsistency: dummyData.medicineConsistency,
      heartRate: dummyData.heartRate,
      bloodPressure: dummyData.bloodPressure
    });
  }

  fetchSleepPatternData() {
    // Example API call or database query to fetch sleep pattern data
    // Replace this with your actual data fetching mechanism
    // For demonstration purposes, I'm setting dummy data
    const dummySleepPatternData = [
      { date: '2023-01-01', hours: 5.6 },
      { date: '2023-02-01', hours: 5.8 },
      { date: '2023-03-01', hours: 5.4 },
      { date: '2023-04-01', hours: 6.2 },
      { date: '2023-05-01', hours: 6.3 },
      { date: '2023-06-01', hours: 6.8 },
      { date: '2023-07-01', hours: 7.5 },
      { date: '2023-08-01', hours: 7.8 },
      { date: '2023-09-01', hours: 8 },
      { date: '2023-10-01', hours: 8.2 },
      { date: '2023-11-01', hours: 6.6 },
      { date: '2023-12-01', hours: 6.5 },
      // More data for the last month...
    ];

    // Update state with fetched sleep pattern data
    this.setState({ sleepPatternData: dummySleepPatternData }, () => {
      // After state is updated, draw the sleep pattern graph
      this.drawSleepPatternChart();
    });
  }

  fetchMedicineConsistencyData() {
    // Example API call or database query to fetch medicine consistency data
    // Replace this with your actual data fetching mechanism
    // For demonstration purposes, I'm setting dummy data
    const dummyMedicineConsistencyData = [
      { date: '2023-01-01', consistency: 80 },
      { date: '2023-02-01', consistency: 80 },
      { date: '2023-03-01', consistency: 75 },
      { date: '2023-04-01', consistency: 82 },
      { date: '2023-05-01', consistency: 83 },
      { date: '2023-06-01', consistency: 97 },
      { date: '2023-07-01', consistency: 90 },
      { date: '2023-08-01', consistency: 95 },
      { date: '2023-09-01', consistency: 94 },
      { date: '2023-10-01', consistency: 96 },
      { date: '2023-11-01', consistency: 80 },
      { date: '2023-12-01', consistency: 82 },

      // More data for the last month...
    ];

    // Update state with fetched medicine consistency data
    this.setState({ medicineConsistencyData: dummyMedicineConsistencyData }, () => {
      // After state is updated, draw the medicine consistency graph
      this.drawMedicineConsistencyChart();
    });
  }

  fetchStepsCompletedData() {
    // Example API call or database query to fetch medicine consistency data
    // Replace this with your actual data fetching mechanism
    // For demonstration purposes, I'm setting dummy data
    const dummyStepsCompletedData = [
      { date: '2023-01-01', consistency: 2500 },
      { date: '2023-02-01', consistency: 2550 },
      { date: '2023-03-01', consistency: 3005 },
      { date: '2023-04-01', consistency: 3000 },
      { date: '2023-05-01', consistency: 4000 },
      { date: '2023-06-01', consistency: 5000 },
      { date: '2023-07-01', consistency: 4540 },
      { date: '2023-08-01', consistency: 900 },
      { date: '2023-09-01', consistency: 2340 },
      { date: '2023-10-01', consistency: 2454 },
      { date: '2023-11-01', consistency: 4000 },
      { date: '2023-12-01', consistency: 6999 },

      // More data for the last month...
    ];

    // Update state with fetched medicine consistency data
    this.setState({ stepsCompletedData: dummyStepsCompletedData }, () => {
      // After state is updated, draw the medicine consistency graph
      this.drawStepsCompletedChart();
    });
  }

  drawSleepPatternChart() {
    const { sleepPatternData } = this.state;
    const sleepPatternChartRef = this.sleepPatternChartRef.current.getContext('2d');

    // Destroy existing chart if it exists
    if (this.sleepPatternChart) {
      this.sleepPatternChart.destroy();
    }

    this.sleepPatternChart = new Chart(sleepPatternChartRef, {
      type: 'line',
      data: {
        labels: sleepPatternData.map(data => data.date),
        datasets: [{
          label: 'Sleep Hours',
          data: sleepPatternData.map(data => data.hours),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointRadius: 5
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Jane\'s Sleep Pattern Over the Last Month',
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Hours of Sleep'
            },
            beginAtZero: true,
            suggestedMax: 10
          }
        }
      }
    });
  }

  drawMedicineConsistencyChart() {
    const { medicineConsistencyData } = this.state;
    const medicineConsistencyChartRef = this.medicineConsistencyChartRef.current.getContext('2d');

    // Destroy existing chart if it exists
    if (this.medicineConsistencyChart) {
      this.medicineConsistencyChart.destroy();
    }

    this.medicineConsistencyChart = new Chart(medicineConsistencyChartRef, {
      type: 'line',
      data: {
        labels: medicineConsistencyData.map(data => data.date),
        datasets: [{
          label: 'Medicine Consistency',
          data: medicineConsistencyData.map(data => data.consistency),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: '#fff',
          pointRadius: 5
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Jane\'s Medicine Consistency Over the Last Month',
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Consistency (%)'
            },
            beginAtZero: true,
            suggestedMax: 100
          }
        }
      }
    });
  }

  drawStepsCompletedChart() {
    const { stepsCompletedData } = this.state;
    const stepsCompletedChartRef = this.stepsCompletedChartRef.current.getContext('2d');
  
    // Destroy existing chart if it exists
    if (this.stepsCompletedChart) {
      this.stepsCompletedChart.destroy();
    }
  
    this.stepsCompletedChart = new Chart(stepsCompletedChartRef, {
      type: 'line',
      data: {
        labels: stepsCompletedData.map(data => data.date),
        datasets: [{
          label: 'Steps Completed',
          data: stepsCompletedData.map(data => data.consistency), // Change here
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointRadius: 5
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Jane\'s steps completed from the last Month',
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Steps Completed'
            },
            beginAtZero: true,
            suggestedMax: 9000
          }
        }
      }
    });
  }
  


  render() {
    const { sleepHours, stepsCompleted, breathingPatterns, medicineConsistency, heartRate, bloodPressure } = this.state;
  
    return (
      <div>
        <div style={styles.header}>
          <h2 style={styles.headerText}>Metrics</h2>
        </div>
        <div style={styles.container}>
          <div style={styles.metricsContainer}>
            <h3 style={styles.title}>Jane's Metrics for the Week</h3>
            <div style={styles.metric}>
              <strong>Average Sleep Hours:</strong> {sleepHours}
            </div>
            <div style={styles.metric}>
              <strong>Steps Completed:</strong> {stepsCompleted}
            </div>
            <div style={styles.metric}>
              <strong>Breathing Patterns:</strong> {breathingPatterns.join(', ')}
            </div>
            <div style={styles.metric}>
              <strong>Medicine Consistency:</strong> {medicineConsistency}%
            </div>
            <div style={styles.metric}>
              <strong>Heart Rate:</strong> {heartRate} bpm
            </div>
            <div style={styles.metric}>
              <strong>Blood Pressure:</strong> {bloodPressure}
            </div>
            <div style={styles.buttonsContainer}>
              <button style={styles.button}>Call Doctor</button>
              <button style={styles.button}>Call Jane</button>
            </div>
          </div>
          <div style={styles.chartContainer}>
            <canvas ref={this.sleepPatternChartRef}></canvas>
          </div>
          <div style={styles.chartContainer}>
            <canvas ref={this.medicineConsistencyChartRef}></canvas>
          </div>
          <div style={styles.chartContainer}>
            <canvas ref={this.stepsCompletedChartRef}></canvas>
          </div>
        </div>
      </div>
    );
  }
  
}

const styles = {
  header: {
    background: '#E0E0E0',
    padding: '10px',
    textAlign: 'center',
  },
  headerText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0',
  },
  container: {
    background: '#E0F2F1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  metricsContainer: {
    padding: '20px',
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    maxWidth: '600px',
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  metric: {
    marginBottom: '0.5rem',
  },
  chartContainer: {
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    maxWidth: '600px',
    width: '100%',
    boxSizing: 'border-box',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Metrics;
