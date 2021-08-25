import Main from 'components/Main'

export default function SignIn() {
  return <Main />
}

export const getInitialProps = () => {
  return {
    layout: 'auth'
  }
}
