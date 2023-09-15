import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let a = "hello";
  console.log(a);
  a = 12;
  console.log(a);

  const c = "constant value";
  console.log(c);

  // arrow function
  const test = () =>{
    console.log("this is a test function");
  }
  test();

  let demo = (name) =>{
    console.log("my name is ",name );
  }
  demo("aniket");

  let arr = ["dog","cat","cow"]
  console.log(arr);

  // for in 
  for(let data in arr){
    console.log(arr[data]);
  }

  // for of
  for(let data of arr){
    console.log(data);
  }

  arr.forEach(ele=>{
    console.log(arr);
  })

  let obj = {
    "name" : "aniket",
    "age" : 21
  }

  console.log(obj);
  console.log(obj.name);
  console.log(obj.age);

  // for in

  for(let data in obj){
    console.log(obj[data]);
  }

  Object.entries(obj).map((ele)=>{
    console.log(ele);
  })

  let spread = ["apple","orange","kiwi","mango","charry"];

  // old method

  console.log(spread[0]);
  console.log(spread[1]);

  // new way of destructuring
  const[one,two,,...three] = spread;
  console.log(two);
  console.log(three);

  // map with key
  spread.map((ele,key)=>{
    console.log(key,ele);
  })

  // filter
  let f = [230,34,5,34,6,2];
  console.log(f.filter(myfunc));

  function myfunc(age) {
    if (age>6) {
      return age;
    }
  }

  // reduce

  console.log(f.reduce
    (total));
  function total(sum,num) {
    return sum-num;
  }

  return (
    <>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum iusto rem est ea veniam accusamus sapiente. Quibusdam fugit, voluptates sequi, facere iusto non hic, rerum est praesentium aspernatur reiciendis voluptate.</p>
    </>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
