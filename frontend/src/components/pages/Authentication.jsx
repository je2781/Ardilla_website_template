import { json, redirect } from 'react-router-dom';
import AuthForm from '../AuthForm';

function Authentication() {
  return <AuthForm />;
}

export default Authentication;

export async function action ({request}){
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  const data = await request.formData();

  if (mode !== 'login' && mode !== 'signup'){
    throw json({message: 'unsupported mode'}, {status: 422});
  }

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  };

  const response = await fetch('https://beamish-dolphin-bdf3fc.netlify.app/' + mode, {
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

  return redirect('/');
}