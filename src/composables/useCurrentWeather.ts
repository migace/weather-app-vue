import useSWRV from 'swrv';

type CurrentWeatherResponseDTO = {
  weather: {
    description: string;
  };
  main: {
    temp: string;
  };
  name: string;
};

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = useSWRV<CurrentWeatherResponseDTO>(
    'http://api.openweathermap.org/data/2.5/weather?appid=5d2cf00736f2345277b08574727d3311&q=cracow',
    undefined
  );

  return {
    data,
    error,
  };
};
