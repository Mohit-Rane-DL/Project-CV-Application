import { useState } from 'react';
import '../styles/section.css'

function GeneralInfo (){
  const [editing, setEditing] = useState(false);
  const [info, setInfo] = useState({name: '', email: '', phone: ''});

  const handleChange = (e) => {
    setInfo({...info, [e.target.name]: e.target.value});
  };

  const handleEdit = () => setEditing(!editing);

  return (
    <div className='section'>
      <h2>General Information</h2>
      {
        editing ? (
          <div>
            <input type="text" name='name' value={info.name} onChange={handleChange} placeholder='Name' />
            <input type="email" name='email' value={info.email} onChange={handleChange} placeholder='Email' />
            <input type="tel" name='phone' value={info.phone} onChange={handleChange} placeholder='Phone' />
            <button onClick={handleEdit}>Submit</button>
          </div>
        ) : (
          <div>
            <p>Name: {info.name}</p>
            <p>Email: {info.email}</p>
            <p>Phone: {info.phone}</p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )
      }
    </div>
  );
}


export {GeneralInfo};