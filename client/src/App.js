// Frontend - React
import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/employees')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
      <div>
          <h1>Data from MySQL Database</h1>
          <table>
              <thead className='tableHead'>
                  <tr>
                      <th>Employee Number</th>
                      <th>Job Title</th>
                      <th>Office Code</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map(employee => (
                      <tr key={employee.employeeNumber}>
                          <td>{employee.employeeNumber}</td>
                          <td>{employee.jobTitle}</td>
                          <td>{employee.officeCode}</td>
                          <td>{employee.firstName}</td>
                          <td>{employee.lastName}</td>
                          <td>{employee.email}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    );
}

export default App;
