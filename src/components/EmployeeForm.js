import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import './Employee.css';
import { useForm, Form } from './useForm';
import Input from './Input';
import Controls from './Controls';
import * as EmployeeService from './EmployeeServies';


const genderItems = [
    {id:'male',title:'Male'},
    {id:'female',title:'Female'},
    {id:'other',title:'Other'},
]



const initialValues = {
    id: 0,
    fullname: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isParmanent: false


}

export default function EmployeeForm() {
    
   const { values,
           setValues,
            handleInputChange  } = useForm(initialValues);


    return (
        <Form>
            <Grid container className="congrid">
                <Grid item xs={6}>
                    <Input
                    label="Full Name"
                    name="fullname"
                    value={values.fullname}
                    onChange={handleInputChange}
                    />
                    <Input 
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}                 
                    />
                     <Input 
                    label="Mobile"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleInputChange}                 
                    />
                     <Input 
                    label="City"
                    name="city"
                    value={values.city}
                    onChange={handleInputChange}                 
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup 
                    label="Gender"
                    name="gender"
                    // value={values.gender}
                    onChange={handleInputChange}
                    items={genderItems}
                    />
                      <Controls.Select 
                name="departmentId" 
                label="Department" 
                value={values.departmentId} 
                onChange={handleInputChange}
                options={EmployeeService.getDepartmentCollection()}
                />
                <Controls.DatePicker 
                 name="hireDate"
                 label="Hire Date"
                 value={values.hireDate}
                 onChange={handleInputChange}
                 />
                <Controls.Checkbox 
                 name="isParmanent"
                 label="Parmanent Employee"
                 value={values.isParmanent}
                 onChange={handleInputChange}
                />

                <div>
                    <Controls.Button
                    // variant="contained"
                    // color="primary"
                    // size="large"
                    type="submit"
                    text="Submit"
                    />
                  <Controls.Button
                    text="Reset"
                    color="default"
                    />

                </div>
                </Grid>
              
            </Grid>

         </Form>
    )
}
