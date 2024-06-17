import { useQuery } from 'react-query';

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

const fetchWeather = async () => {
  await sleep(500);

  // ここでKeyがなくてエラーになるが、Error Boundaryがひろってくれなくて普通の赤いエラー画面になってしまう。
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=YOUR_KEY`);

  if (res.ok) {
    return res.json();
  }

  throw new Error(res.statusText);
};

export default function QuerySuspense() {
  const { data } = useQuery('weather', fetchWeather);

  return (
    <figure>
      <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`} alt={data?.weather?.[0]?.main} />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  )
};
