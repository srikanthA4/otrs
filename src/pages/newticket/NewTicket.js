import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css";
import './newTicket.css';
import NavBarPanel from '../../NavBarPanel';

const NewTicket = () => {
    const [value,setValue] = useState('');
  return (
    <main>
        <NavBarPanel/>
    <div className='newTicket'>
        <div className="drop ">
            <label htmlFor="" className='title-left ticketlabel'>To :</label>
            <select name="" id="" required className='options'>
                <option value="">Alpha</option>
                <option value="">Awinlin</option>
                <option value="">Bash</option>
                <option value="">Bashs</option>
                <option value="">Junk</option>
                <option value="">linux</option>
                <option value="">linx</option>
            </select>
        </div>
        <div className="subject">
            <label htmlFor="" className='ticketlabel'>Subject :</label>
            <input type="text" required className='sub'/>
        </div>
        <div className="editor">
            <label htmlFor="" className='ticketlabel'>Text :</label>
            <ReactQuill
                theme="snow"
                className='quill' 
                value={value}
                onChange={setValue} 
            />
        </div>
        <div className="attachments">
            <label htmlFor="" className='ticketlabel'>Attachments :</label>
            <input type="file" className='file'/>
        </div>
        <div className="priority">
            <label htmlFor="" className='ticketlabel'>Priority :</label>
            <select name="" id="" required className='options'>
                <option value="">1 Very Low</option>
                <option value="">2 Low</option>
                <option value="">3 Normal</option>
                <option value="">4 High</option>
                <option value="">5 Very High</option>
            </select>
        </div>
        <button>Submit</button>
    </div>
    </main>
  )
}

export default NewTicket