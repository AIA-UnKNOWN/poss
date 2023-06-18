import './SignUp.style.scss';
// Views
import Input from "src/components/Input";
import Button from 'src/components/Button/Button';
// Hooks
import useSignUp from './SignUp.hook';

const SignUp = () => {
  const {
    form,
    formError,
    isAuthenticated,
    isLoading,
    handleChange,
    signUp,
  } = useSignUp();

  return (
    <div className='signup'>
      <div className='signup-form-container'>
        <div>
          <Input
            type="email"
            placeholder='Email'
            name="email"
            value={form.email}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {formError.email && (
            <span className='input-error-message'>{formError.email}</span>
          )}
        </div>
        <div>
          <Input
            type="text"
            placeholder='Username'
            name="username"
            value={form.username}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {formError.username && (
            <span className='input-error-message'>{formError.username}</span>
          )}
        </div>
        <div>
          <Input
            type="password"
            placeholder='Password'
            name="password"
            value={form.password}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {formError.password && (
            <span className='input-error-message'>{formError.password}</span>
          )}
        </div>
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