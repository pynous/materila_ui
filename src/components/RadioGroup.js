import React from 'react';
import EmployeeForm from './EmployeeForm';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel , Radio} from '@material-ui/core';

export default function RadioGroup(props) {

    const {name, label, value, onChange, items } = props;

    return (
                  <FormControl>
                        <FormLabel>{label}</FormLabel>
                            <MuiRadioGroup row
                            name={name}
                            onChange={onChange}
                            // value={value}
                            >

                                {   
                                  items.map((item) => (
                                    <FormControlLabel key={item.iod} value={item.id} control={<Radio />} label={item.title} />
                                  ))
                                }
                                
                            </MuiRadioGroup>
                       
                    </FormControl>
    )
}

