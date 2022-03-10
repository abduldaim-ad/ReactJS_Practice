// import React from 'react'; //To use JSX
// import ReactDOM from 'react-dom';

// //Babel JS converts modern JavaScript to Old JavaScript

// const name = 'Abdul Daim';

// ReactDOM.render(
//     <>
//     <h1>My name is {name}</h1>
//     <p>The sum of 2 and 3 is {2+3}</p>
//     <p>The sum of 2 and 3 is {Math.random()}</p>
//     </>
//     , document.getElementById("root"));



//////////////////// PRACTICE //////////////
    // import React from 'react';
    // import ReactDOM from 'react-dom';

    // ReactDOM.render(
    //     <>
    //     <h1>Welcome</h1>
    //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    //     <ol>
    //         <li>Item A</li>
    //         <li>Item B</li>
    //         <li>Item C</li>
    //         <li>Item D</li>
    //         <li>Item E</li>
    //     </ol>
    //     </>,document.getElementById("root"))



//////////////// TEMPLATE LITERALS //////////
// import React from 'react'; //To use JSX
// import ReactDOM from 'react-dom';

// //Babel JS converts modern JavaScript to Old JavaScript

// const fname = 'Abdul';
// const lname = ' Daim';

// ReactDOM.render(
//     <>
//     <h1>{`My name is ${fname} ${lname}`}</h1>
//     <p>The sum of 2 and 3 is {2+3}</p>
//     <p>The sum of 2 and 3 is {Math.random()}</p>
//     </>
//     , document.getElementById("root"));



////////////////////// DISPLAY CURRENT DATE AND TIME /////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "Abdul", lname="Daim";
// const currentDate = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//     <h1>{`My name is ${fname} ${lname}`}</h1>
//     <p>Current Date is: {currentDate}</p>
//     <p>Current Time is: {currentTime}</p>
//     </>
//     , document.getElementById('root')
// )



/////////////////////////// JSX ATTRIBUTES //////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/300";
// const img3 = "https://picsum.photos/200/300";
// const img4 = "https://picsum.photos/200/300";
// const img5 = "https://picsum.photos/200/300";
// const links = "https://www.google.com/";

// const name = 'Abdul Daim';

// ReactDOM.render(
//     <>
//         <h2 contentEditable="true">{`My name is ${name}`}</h2>
//         <img src={img1} alt="Image"/>
//         <img src={img2} alt="Image"/>
//         <img src={img3} alt="Image"/>
//         <img src={img4} alt="Image"/>
//         <a href ={links} target="_blank">
//             <img src={img5} alt="Image"/>
//         </a>
//     </>
//     , document.getElementById("root")
// )



//////////////////////// CSS Styling in ReactJS ////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/300";
// const img3 = "https://picsum.photos/200/300";

// const name = 'Abdul Daim';

// const heading = {
//     color: '#91d0fa',
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     fontWeight: 'bold',
//     textShadow: '0px 2px 4px #313333',
//     margin: '50px 0'
// };

// ReactDOM.render(
//     <>
//         <h2 style={heading}>{`My name is ${name}`}</h2>
//         <div className="img_div">
//             <img src={img1} alt="Image"/>
//             <img src={img2} alt="Image"/>
//             <img src={img3} alt="Image"/>
//         </div>
//      </>
//     , document.getElementById("root")
// )



////////////////////// REACT COMPONENTS /////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//         <App/>, document.getElementById('root')
// );


///////////////////// IMPORT/EXPORT ////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';
// import anynamehere_default, {language, myName, myName_func2} from './App';
// //Wild Cards Below: (Not Recommended)
// //import * as question from './App';

// ReactDOM.render(
//   <>
//     <ol>
//       <li>Abdul Daim</li>
//       <li>{anynamehere_default}</li>
//       <li>{language}</li>
//       <li>{myName()}</li>
//       <li>{myName_func2()}</li>
//     </ol>
//   </>, document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

ReactDOM.render(
  <>
    <Navbar/>
  </>, 
  document.getElementById('root'));