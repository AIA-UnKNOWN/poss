import Note from 'src/components/Note';
import './SignIn.style.scss';
// Views
import Input from "src/components/Input";
import Button from 'src/components/Button/Button';

const SignIn = props => {

  return (
    <div className='signin'>
      <div className='signin-form-container'>
        <Note
          text='Username/Password is invalid. Please try again.'
          view='danger'
        />
        <Input
          type="text"
          placeholder='Username'
        />
        <Input
          type="password"
          placeholder='Password'
        />
        <Button
          text='Sign In'
        />
        <a>Sign up instead</a>
      </div>
    </div>
  )
}

export default SignIn;