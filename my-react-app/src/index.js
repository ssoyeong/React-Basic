import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const mySecondElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Soyeong</td>
    </tr>
    <tr>
      <td>Taylor</td>
    </tr>
  </table>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(mySecondElement);
