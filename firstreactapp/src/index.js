import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
const tableelements=(
  <table>
<tr>
  <th>Name</th>
  <th>Address</th>
  <th>Calculation</th>
</tr>
<tr>
  <td>Prasun Neupane </td>
  <td>Dang,Deukhuri,Gadhawa</td>
  <td>{5+5}</td>
</tr>
</table>

)
const createElement= React.createElement('h1',{},'I do not use JSX')
const fragelement=(
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  fragelement
  
);
console.log(tableelements);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Default exports does not need curly braces but normal export when imported should use curly braces
