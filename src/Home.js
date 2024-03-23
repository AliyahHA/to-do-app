import { useState } from 'react';
//useState is a type of function that allows us to see the data in a specific component


const  Home = () => {

  // let name = "Aliyah"

  const [name, setName] = useState('aliyah');
  const [age, setAge] = useState(28);

  const handleClick = () => {
     setName ('mario');
     setAge (31);
 
  }
   return (
    <div className="home">
      <h2>Home page</h2>

       <p> { name } is {age} years old</p>
       <button onClick={handleClick}>Click me </button>
     
    </div>
    );
};

export default Home;
