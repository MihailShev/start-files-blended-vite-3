import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import Section from '../components/Section/Section';
import { fetchCountry } from '../service/countryApi';
import Loader from '../components/Loader/Loader';
import { useParams } from 'react-router-dom';

const Country = () => {
  const [loader, setLoader] = useState(false);
  const [country, setCountry] = useState('');
  const { countryId } = useParams();

  useEffect(() => {
    async function getCountryId() {
      try {
        setLoader(true);
        const data = await fetchCountry(countryId);
        setCountry(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    }

    getCountryId();
  }, [countryId]);

  return (
    <Section>
      <Container>
        {loader && <Loader />}
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};

export default Country;
