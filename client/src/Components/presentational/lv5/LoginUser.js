import React, { useState , useContext} from "react";
import { LOGIN } from "../../../Graphql/Mutation";
import { useMutation } from "@apollo/client";
import StoreContext from '../../Store/Context';
import { useHistory } from 'react-router-dom';
function LoginUser() {
  const [username, setUsername] = useState("");
  const [password, setCurrentPassword] = useState("");   
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
  const [loginUser, { error }] = useMutation(LOGIN,
    {
      onCompleted: (data) => {
        if(data.login.successful){
          setToken(data.login.token);
          return history.push('/');
        }else{          
          alert(data.login.message)
        }        
      },
      onError: (error) => {
        console.log(error)
       alert(error); // the error if that is the case
      },
    }
  );
  
  return (
    <div>      
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Current Password..."
        onChange={(event) => {
          setCurrentPassword(event.target.value);
        }}
      />  
      <button
        onClick={() => {
          loginUser({
            variables: {
              username: username,
              password: password,
            },
          });         
        }}        
      >
        Login
      </button>
      <br/>
      
    </div>
   
  );
}


  

export default LoginUser;