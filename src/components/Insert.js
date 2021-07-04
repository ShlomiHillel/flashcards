import React from 'react';
import {useState } from 'react';

const Insert = () => {
    
//   console.log(localStorage);
  const [valueQ, setValueQ] = useState('');
  const [valueA, setValueA] = useState('');
  const [error, setError] = useState('');
  
 
  const onChangeQ = event => {setValueQ(event.target.value);setError('') };
  const onChangeA = event => {setValueA(event.target.value);setError('') }; 

  const onSave = () => {
    if (valueQ !== '' && valueA !== '') {
        localStorage.setItem(`Question${(localStorage.length)}`, valueQ);
        localStorage.setItem(`Answer${(localStorage.length)-1}`, valueA);
        setValueQ('');
        setValueA('');
        // console.log('length ' + localStorage.length); 
         for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.key(i)+": "+ localStorage.getItem(localStorage.key(i)));
         }        
    } else {
        setError('no input') 
    }  
  }
  React.useEffect(() => {
  }, [valueQ]);
  React.useEffect(() => {
  }, [valueA]);
  const Reset = () => {
    console.log(localStorage)
    localStorage.clear() 
    }

    return (
        <div className='space'>
            <h5>Insert</h5>
            <section>      
            <label>The Question <input name='que' value={valueQ} type='text' onChange={onChangeQ}/></label>  
            <p></p>
            {/* <p>{valueQ}</p> */}
            <label>The Answer <input name='ans' value={valueA} type='text' onChange={onChangeA}/></label> 
            <p></p>
            {/* <p>{valueA}</p> */}
            <p>{error}</p>
            <button type="submit" onClick={onSave}>Save</button>
            </section>
            <div>
            <p>
            <button type="submit" onClick={Reset}>Reset</button>
            </p>   
            </div>

            
        </div>
    );
}

export default Insert;
