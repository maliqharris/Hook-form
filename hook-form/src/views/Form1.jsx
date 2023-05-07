import React, {useState} from 'react'




// form input: onChange, variable that keeps changing
const Form1 = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  return (


   <div>
    <form>
        <div>
            <label>Firstname: </label>
            <input type="text" name = "first" value={firstname} onChange={(e)=> setFirstname(e.target.value)} />
            {
                firstname.length <2?
                <p style={{color: "red"}}>First Name must be at least 2 characters!!!</p>:
                <p></p>
            }
        </div>

    </form>
    <form>
        <div>
            <label>Lastname: </label>
            <input type="text" name = "last" value={lastname} onChange={(e)=> setLastname(e.target.value)} />
            {
                lastname.length <2?
                <p style={{color: "red"}}>Last Name must be at least 2 characters!!!</p>:
                <p></p>
            }
        </div>
    </form>
    <form>
        <div>
            <label>Email: </label>
            <input type="text" name = "last" value={email} onChange={(e)=> setEmail(e.target.value)} />
            {
                email.length <2?
                <p style={{color: "red"}}>Email must be at least 2 characters!!!</p>:
                <p></p>
            }
        </div>
    </form>
    <form>
        <div>
            <label>Password: </label>
            <input type="text" name = "last" value={password} onChange={(e)=> setPassword(e.target.value)} />
            {
                password.length <8?
                <p style={{color: "red"}}>Password must be at least 8 characters!!!</p>:
                <p></p>
            }
            {
                password !== confirmpassword ?
                <p style={{color: "red"}}>Passwords must match!!!</p>:
                <p></p>
            }
            
        </div>
    </form>
    <form>
        <div>
            <label>Confirm Password: </label>
            <input type="text" name = "last" value={confirmpassword} onChange={(e)=> setConfirmpassword(e.target.value)} />
        </div>
    </form>
    <p>Firstname  -   {firstname} </p>
    <p>Lastname  -   {lastname} </p>
    <p>Email  -   {email} </p>
    <p>Password  -   {password} </p>
    <p>Confirm Password  -   {confirmpassword} </p>
   </div>

  )
}

export default Form1