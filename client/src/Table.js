import React, { useState, useEffect } from 'react';

function TablePagination({ data, itemsPerPage }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1); // Reset to the first page when data changes
    }, [data]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <table>
                <thead>
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
                    {currentItems.map(customer => (
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

            <p>Total customers: {data.length}</p>
            <p>Customers per page: {currentItems === 0 ? 0 : currentItems.length}</p>
            <p>Total pages: {totalPages}</p>
            <p>Items per page: {itemsPerPage}</p>
            <p>Current page: {currentPage}</p>

            <div>
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}

export default TablePagination;
