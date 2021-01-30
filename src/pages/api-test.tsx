import useSWR from 'swr';

// const fetcher = (url: string) =>
//   fetch(url, {
//     method: 'GET',
//     headers: new Headers({ 'Content-Type': 'application/json' }),
//     credentials: 'same-origin',
//   }).then((res) => res.json());

const Test = () => {
  const data = fetch('/api/data');

  console.log(data);

  // const { data, error } = useSWR('/api/data', fetcher);
  //   console.log(data.data);
  //   console.log(data.data);
  const dataSet = Object(data);
  //   console.log(dataSet.data);

  return <h1>test</h1>;
};

export default Test;
