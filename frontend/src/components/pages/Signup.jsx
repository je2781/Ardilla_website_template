import { json, redirect } from 'react-router-dom';
import SignupForm from '../SignupForm';

function Signup() {
  return <SignupForm />;
}

export default Signup;

export async function action ({request}){
  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  };

  const response = await fetch('https://incandescent-truffle-428201.netlify.app/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if (response.status === 422 || response.status === 401){
    return response;
  }

  if (!response.ok){
    throw json({message: 'Could not authenticate user credentials'}, {
      status: 500
    });
  }

  return redirect('/login');
}