import React, { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee } from '../services/EmployService';
import { useNavigate } from 'react-router-dom';


const Allemployees = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigator('/add-employee');
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    deleteEmployee(id)
      .then(() => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container ">
      
     

      
      <h3 className="text-center">All employees</h3>

     
      <div className="button-container">
        <button className="btn btn-primary btn-sm" onClick={addNewEmployee}>
          Add Employee
        </button>
      </div>

     
      
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <div className="btn-container">
                  <button className="btn btn-primary btn-sm" onClick={() => updateEmployee(employee.id)}>
                    Update
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => removeEmployee(employee.id)}>
                    Delete
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
  );
};

export default Allemployees;
