import type { Country } from '../types';

export default function Card({
  name,
  flags,
  population,
  currencies,
  capital,
}: Country) {
  const currencyCode = Object.keys(currencies ?? {});
  const currenciesInfo = currencies?.[currencyCode[0]];

  return (
    <div>
      <img src={flags?.png} alt={name.common} />
      <h2>{name.common}</h2>
      <p>{population}</p>
      <p>
        {currenciesInfo?.name} ({currenciesInfo?.symbol})
      </p>
      <p>{capital?.[0]}</p>
    </div>
  );
}
