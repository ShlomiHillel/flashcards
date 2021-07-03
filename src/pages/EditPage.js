import React from 'react';
// import {useState } from 'react';
import Insert from '../components/Insert';
import CardList from '../components/CardList';
const EditPage = () => {

 return (    
    <div className=''>
            
                
    <CardList/>        
    <Insert/> 
    </div>    
        );
}

export default EditPage;


/* <form onSubmit={}>
            <label>
                User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
            </label>
            <label>
                <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
            </label>
            <button type="submit">Sign In</button>
            </form> */