import React,{ useEffect, useState}from 'react'
import { createEmployee, updateEmployee, getEmployee } from '../services/EmployService'
import { useNavigate, useParams  } from 'react-router-dom'


const EmployeeComponent = () => {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
 
  const {id}= useParams();
 const [errors, setErrors] = useState({
     firstName: '',
     lastName: '',
     email:''
})



const navigator = useNavigate();

useEffect(() => {

    if(id){
        getEmployee(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        }).catch(error =>{
            console.error(error);
        })
    }

}, [id]);

function saveOrUpdateEmployee(e){
    e.preventDefault();

    if(validateForm()){

        const employee = {firstName, lastName, email}
        console.log(employee)

       if(id){
        updateEmployee(id, employee).then((response) => {
            console.log(response.data);
            navigator('/employees');
        }).catch(error => {
            console.error(error);
        })
       }else {
        createEmployee(employee).then((response) => {
            console.log(response.data);
    
            navigator('/employees')
        }).catch(error => {
            console.error(error);
       })

        
       }
        

    }


 
}

function validateForm(){
    let valid = true;
     
    const errorscopy ={... errors}
    
    if(firstName.trim()){
        errorscopy.firstName='';
    } else {
        errorscopy.firstName = 'First name is required';
        valid = false;
    }
    if(lastName.trim()){
        errorscopy.lastName='';
    } else {
        errorscopy.lastName = 'last name is required';
        valid = false;
    }
    if(email.trim()){
        errorscopy.email='';
    } else {
        errorscopy.email = 'email is required';
        valid = false;
    }
    setErrors(errorscopy);
    return valid;

}

function pageTitle(){
   if(id){
     return <h3 className='text-center'>Update Employee</h3>
   }else{
    <h2 className='text-center'>Add Employee</h2>
   }
}



return (
  
    <div className='container'>
      <div className='row'>
        <h3 className='text-center mb-4'>
          {
            pageTitle()
          }
          </h3>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input
                  type='text'
                  placeholder='Enter Employee First Name'
                  value={firstName}
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>

              <div className='mb-3'>
                <label className='form-label'>Last Name:</label>
                <input
                  type='text'
                  placeholder='Enter Employee Last Name'
                  value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>

              <div className='mb-3'>
                <label className='form-label'>Email:</label>
                <input
                  type='text'
                  placeholder='Enter Employee Email'
                  value={email}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>
              <div className='text-center'>
              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
  );
};

export default EmployeeComponent;

