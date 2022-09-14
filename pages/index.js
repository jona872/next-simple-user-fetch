import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Container from '../components/Container/Container'
import User from '../components/User/User';


export default function Home({ users }) {
  console.log(users);

  return (
    <Container>
      <h1>Index</h1>
      <User users={users.data} />
    </Container>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const res = await fetch('https://reqres.in/api/users')
  const users = await res.json()

  // Pass users to the page via props
  return { props: { users } }
}




// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const users = await res.json()
//   // By returning { props: { users } }, the Blog component
//   // will receive `users` as a prop at build time
//   return {
//     props: {
//       users,
//     },
//   }
// }
