import axios from 'axios';
import { GetStaticProps } from 'next'

export default function Imoveis({ org }) {
  return (
    <div>
      <h1>{org.login}</h1>
      <h3>{org.description}</h3>

      <p>
        site: <a href={org.blog}>{org.blog}</a>
      </p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('http://localhost:3000/imoveis');
  const data = response.data;

  return {
    props: {
      org: data,
    },
    revalidate: 10
  }
};
