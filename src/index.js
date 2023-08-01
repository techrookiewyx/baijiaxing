import { name,py,pinxie } from './name';
import './index.css'
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Example/>
  </>
);

function Example(){
  const [show, setIsShow] = useState(false);
  return (
  <div>
    <section className='container'>
      <h2>百家姓</h2>
      <div className='show'>
        <label>
            <input type='checkbox' checked={show} onChange={e => {setIsShow(e.target.checked)}} />{" "}
            显示拼音
        </label>
      </div>
      <main>
        {name.map((ele, index) => { 
          const commaPosition =(index + 1) % 4 === 0 && (index + 1) % 8 !== 0 && index < 564;            const periodPosition = (index + 1) % 8 === 0; 
          return <Item key={index} show={show} ele={ele} index={index} com={commaPosition} per={periodPosition} />
        })}
      </main>
    </section>
  </div>
 )
}
function Item({ele,index,com,per,show}){
  return (
   <>
    <div className='item'>
      {show ? <span className='py'>{py[index]}</span> : ''}
      <span>{ele}</span>
    </div>
     {com && '，'}
     {per && '。'}
   </>
  )
}