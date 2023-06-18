import Note from 'src/components/Note';
import './SignIn.style.scss';
// Views
import Input from "src/components/Input";
import Button from 'src/components/Button/Button';
// Hooks
import useSignIn from './SignIn.hook';

const SignIn = () => {
  const {
    form,
    isAuthenticated,
    isLoading,
    handleChange,
    signIn,
  } = useSignIn();

  return (
    <div className='signin'>
      <div className='signin-form-container'>
        {isAuthenticated !== null && !isAuthenticated && (
          <Note
            text='Username/Password is invalid. Please try again.'
            view='danger'
          />
        )}
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
        <Button
          text={isLoading ? 'Signing In...' : 'Sign In'}
          onClick={() => signIn({ username: form.username, password: form.password })}
        />
        <a href='/signup'>Sign up instead</a>
      </div>
    </div>
  )
}

export default SignIn;