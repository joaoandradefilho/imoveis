import { GetStaticProps } from 'next'

export default function Imoveis({ data }) {
  console.log(data)
  return (
    <div>
      <h1>{data.login}</h1>
      <h3>{data.description}</h3>

      <p>
        site: <a href={data.blog}>{data.blog}</a>
      </p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/imoveis');
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 10
  }
};
