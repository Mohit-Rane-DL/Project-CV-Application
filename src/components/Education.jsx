import { useState } from 'react';
import '../styles/section.css'

function Education (){
  const [editing, setEditing] = useState(false);
  const [education, setEducation] = useState({ school: '', degree: '', date: '' });

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setEditing(!editing);

  return (
    <div className="section">
      <h2>Education</h2>
      {editing ? (
        <div>
          <input name="school" value={education.school} onChange={handleChange} placeholder="School Name" />
          <input name="degree" value={education.degree} onChange={handleChange} placeholder="Degree" />
          <input name="date" value={education.date} onChange={handleChange} placeholder="Date" />
          <button onClick={handleEdit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Degree: {education.degree}</p>
          <p>Date: {education.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export {Education};