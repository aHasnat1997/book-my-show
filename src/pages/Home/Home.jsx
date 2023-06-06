import { useTitle } from "../../hooks/useTitle";
import Hero from "./Hero/Hero";
import Shows from "./Shows/Shows";


const Home = () => {
  useTitle('Welcome');
  return (
    <>
      <Hero />
      <Shows />
    </>
  );
};

export default Home;
