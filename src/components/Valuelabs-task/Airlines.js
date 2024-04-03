import React from 'react';
import myData from './data.json';

function AirLineData() {
//   const [checked, setChecked] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = () => {
    console.log(Object.entries(myData.data.airlines));
  };
  const handleCheckBox = (e, index) => {
    // setChecked(!checked);
    // setSelectedIndex(index);
     e.target.parentNode.parentNode.style.backgroundColor = e.target.checked ? 'grey' : ''
  };
  return (
    <>
      <p>Airline Data</p>
      <button onClick={handleClick}>click</button>
      <table>
        <tr>
          <th>Name</th>
          <th>callsign</th>
          <th>shutdown</th>
        </tr>

        {Object.entries(myData.data.airlines).map(([key, value], index) => {
          return (
            // className = {value.shutdown ? 'grey-background' : ''}
            <tr
              key={index}
            //   className={
            //     checked && selectedIndex == index ? 'grey-background' : ''
            //   }
            >
              <td>{value.name}</td>
              <td>{value.callsign}</td>
              <td>
                <input
                  type="checkbox"
                //   value={checked}
                  onChange={(e) => handleCheckBox(e, index)}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
export default AirLineData;
