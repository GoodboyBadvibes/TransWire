import AuthForm from '@/components/AuthForm'
import style from '../../../styles/auth.module.css'; // Ensure to import your CSS file

const SignIn = () => {
  return (
    <section className={`flex-center size-full max-sm:px-6 ${style.authcontainer}`}>
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn