
import Head from "next/head";
import WeatherTable from "./WeatherTable";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Weather App</h1>
        <WeatherTable />
      </main>

      <footer>
        <p>&copy; Weather App </p>
      </footer>
    </div>
  );
}
