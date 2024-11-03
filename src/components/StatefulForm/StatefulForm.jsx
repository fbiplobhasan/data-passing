import { useState } from "react";

const StatefulForm = () => {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState (null);
    const [name,setName] = useState ('Biplob Hasan');
    const [error,setError] = useState ('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('password must be 6 characters or longer');
        } else{
            setError('');
            console.log(name,email,password);
        }
        

    }

    const handleNameChange = e => {
        setName(e.target.value);
    }


    const handleEmailChange = e => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
       setPassword(e.target.value);
    }

  return (
    <div>
      <form value={name} onSubmit={handleSubmit}>
        <input
        onChange={handleNameChange}
        type="text" name="name" />
        <br />
        <input
        onChange={handleEmailChange}
        type="email" name="email" />
        <br />
        <input
        onChange={handlePasswordChange}
        type="password" name="password" required/>
        <br />
        <input type="submit" value="submit" />

        {
            error && <p>{error}</p>
        }

      </form>
    </div>
  );
};

export default StatefulForm;
