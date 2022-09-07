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

// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
// const myElement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// )

// const myElement = <h1 className="myclass">Hello World</h1>;

const x = 5;
let text = "Goodbye";
if(x < 10) {
  text = "Hello";
}
// const myElement = <h1>{text}</h1>

function Car(props) {
  return <h2>Hi, I am a {props.color} Car!</h2>;
}

function Garage() {
  return (
    <>
    <h1>Who lives in my Garage?</h1>
    <Car />
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Garage color="red"/>);
