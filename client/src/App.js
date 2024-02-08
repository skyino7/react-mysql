// Frontend - React
import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/customers')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
      <div className='main'>
          <h1>Data from MySQL Database</h1>
          <table>
              <thead className='tableHead'>
                  <tr>
                      <th>customer Number</th>
                      <th>Customer Name</th>
                      <th>Customer Lastname</th>
                      <th>Customer Firstname</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Postal Code</th>
                      <th>Sales Rep Employee Number</th>
                      <th>Credit Limit</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map(customer => (
                      <tr key={customer.customerNumber}>
                          <td>{customer.customerNumber}</td>
                          <td>{customer.customerName}</td>
                          <td>{customer.contactLastName}</td>
                          <td>{customer.contactFirstName}</td>
                          <td>{customer.phone}</td>
                          <td>{customer.addressLine1}</td>
                          <td>{customer.city}</td>
                          <td>{customer.state}</td>
                          <td>{customer.country}</td>
                          <td>{customer.postalCode}</td>
                          <td>{customer.salesRepEmployeeNumber}</td>
                          <td>{customer.creditLimit}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    );
}

export default App;
