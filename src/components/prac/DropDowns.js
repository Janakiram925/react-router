import React from 'react';
import { useState, useEffect } from 'react';


function DropDowns() {
    const countries = [
        { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
        { name: 'Srilanka', value: 'SL', cities: ['Colombo', 'Galle'] },
        { name: 'Bangladesh', value: 'BAN', cities: ['Dhaka', 'Chittagong'] }
    ];

    const [selectedValue, setselectedValue] = useState([]);

    useEffect(() => {

    }, [selectedValue]);

    const handleSelect = (e) => {
        console.log(e.target.value);
        setselectedValue([e.target.value])
    }
    return (
        <>
            <div>
                <select onChange={(e) => handleSelect(e)} value={selectedValue} >
                    {
                        countries.map((item, index) => {
                            return <option key = {index} value={index}>{item.name}</option>
                        })
                    }
                </select>
                
                <select>
                    {
                        countries[selectedValue] && countries[selectedValue].cities.map((city, index) => {
                            return <option key={index} value={index}>{city}</option>
                        })
                    }
                   
                </select>
                
            </div>
        </>

    )
}

export default DropDowns