import React from "react";

const Result = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    wind,
    pressure,
    err
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <h1>
          Weather for: <em>{city}</em>
        </h1>
        <p>
          Weather from day and time: <span>{date}</span>
        </p>
        <p>
          Temperature: <span>{temp} &#176;C</span>
        </p>
        <p>
          Sunrise today at: <span>{sunriseTime}</span>
        </p>
        <p>
          Sunset today at: <span>{sunsetTime}</span>
        </p>
        <p>
          Wind speed: <span>{wind} m/s</span>
        </p>
        <p>
          Air pressure: <span>{pressure} hPa</span>
        </p>
      </>
    );
  }
  const error = (
    <h2>
      We don't have in the database: <em>{city}</em>
    </h2>
  );
  return <div className="result">{err ? error : content}</div>;
};

export default Result;
