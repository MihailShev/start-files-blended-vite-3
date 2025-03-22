import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCounters() {
      try {
        setLoader(true);
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    }
    getCounters();
  }, []);

  return (
    <Section>
      <Container>
        {loader && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
export default Home;
