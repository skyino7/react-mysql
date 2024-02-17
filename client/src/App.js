// Frontend - React
import React, { useState, useEffect } from 'react';
import CreditLimitChart from './CreditLimitChart';
import TablePagination from './Table';

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
          <h1>Customers</h1>
          <TablePagination data={data} itemsPerPage={10} />

          <h1>Credit Limit Chart</h1>
          <CreditLimitChart />

      </div>
    );
}

export default App;
