import './SignUp.style.scss';
// Components
import Note from 'src/components/Note';
// Views
import Input from "src/components/Input";
import Button from 'src/components/Button/Button';
// Hooks
import useSignUp from './SignUp.hook';

const SignUp = () => {
  const {
    form,
    isAuthenticated,
    isLoading,
    handleChange,
    signUp,
  } = useSignUp();

  return (
    <div className='signup'>
      <div className='signup-form-container'>
        {/* <Note
          text='Username/Password is invalid. Please try again.'
          view='danger'
        /> */}
        <Input
          type="email"
          placeholder='Email'
          name="email"
          value={form.email}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        <Input
          type="text"
          placeholder='Username'
          name="username"
          value={form.username}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        <Input
          type="password"
          placeholder='Password'
          name="password"
          value={form.password}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        <Input
          type="password"
          placeholder='Confirm Password'
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        <Button
          text={isLoading ? 'Signing Un...' : 'Sign Up'}
          onClick={() => signUp()}
        />
        <a href='/signin'>Sign in instead</a>
      </div>
    </div>
  )
}

export default SignUp;