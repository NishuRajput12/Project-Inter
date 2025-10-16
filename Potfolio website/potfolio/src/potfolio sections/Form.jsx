import { useState } from 'react';
import './Form.css'
export default function Form() {

  let [form, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
    Textarea: ""
  });
  let handleInput = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    console.log(fieldValue);

    console.log(fieldName);
    // setForm(event.target.value);
    setForm((currData)=>{
      // currData[fieldName]=fieldValue;
      return {...currData,[fieldName]:fieldValue};
    })
  }
 
    let handleSubmit=(event)=>{
       event.preventDefault();
       if (!form.Name.trim() || !form.Email.trim() || !form.Password.trim() || !form.Textarea.trim()) {
        alert("Please fill all the fields!");
        return;
      }
      alert("Successful login");
       console.log(form);
       setForm({
        Name: "",
        Email: "",
        Password: " ",
        Textarea: " "
       });
    }
  
  return (
    <>
      <h1>Signup</h1>
      <div id='Login-Form'>
        <form className="Login-Form" onSubmit={handleSubmit}>
          
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder="Enter Your Name" id='Name' onChange={handleInput}
            value={form.Name} 
            name='Name'/>

          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="email@domain.com" id='Email'
          onChange={handleInput}
            value={form.Email}
            name='Email' />

          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="Enter Password" id='Password'
            value={form.Password} 
            onChange={handleInput}
            name='Password'/>

          <label htmlFor="text"> Enter Text</label>
          <textarea placeholder="Enter text" id='Text'
          onChange={handleInput}
            value={form.Textarea}
            name='Textarea' />

          <button className='btn'> Signup now</button>
        </form>
      </div>
    </>
  );
}
