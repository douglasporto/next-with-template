import Main from 'components/Main'

export default function Dashboard() {
  return <Main />
}

export const getServerSideProps = () => {
  return {
    props: {
      layout: 'admin'
    }
  }
}
