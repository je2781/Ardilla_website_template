import { Form, Link, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

function SignupForm() {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const data = useActionData();
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Create a new user</h1>
        {data && data.message && <p className={classes.error}>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          {data && data.errors && <p className={classes.error}>{data.errors['email']}</p>}
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
          {data && data.errors && <p className={classes.error}>{data.errors['password']}</p>}
        </p>
        <div className={classes.actions}>
          <Link to='/login' className={classes.btn}>
            Log in
          </Link>
          <button disabled={isSubmitting} >{isSubmitting ? 'Submitting...' : 'Submit'}</button>
        </div>
      </Form>
    </>
  );
}

export default SignupForm;
