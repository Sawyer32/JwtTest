import { useState } from "react";
import axios from "axios";

const apiUrl = "http://localhost:5134";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = sessionStorage.getItem("token");

    if (allowedOrigins.includes(origin)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

function Contact() {
  const storedJwt = localStorage.getItem("token");
  const [jwt, setJwt] = useState(storedJwt || null);
  const [forecasts, setForecasts] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const getJwt = async () => {
    const body = { email: "test@test.com", password: "secret123" };
    axios.post(`${apiUrl}/api/Auth/login`, body).then((res) => {
      sessionStorage.setItem("token", res.data.token);
      setJwt(res.data.token);
    });
  };

  const getForecasts = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/WeatherForecast`);
      setForecasts(data);
      setFetchError(null);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  return (
    <>
      <section style={{ marginBottom: "10px" }}>
        <button onClick={getJwt}>Login</button>
        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section>
      <section>
        <button onClick={() => getForecasts()}>Get Forecasts</button>
        <ul>
          {forecasts.map((forecast, i) => (
            <li key={i}>
              {forecast.date} {forecast.temperatureC} {forecast.temperatureF}{" "}
              {forecast.summary}
            </li>
          ))}
        </ul>
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </section>
    </>
  );
}
export default Contact;
