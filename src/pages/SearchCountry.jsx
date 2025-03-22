import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/countryApi';
import { useSearchParams } from 'react-router-dom';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const SearchCountry = () => {
  const [loader, setLoader] = useState(false);
  const [countrys, setCountrys] = useState([]);
  const [searchCountry, setSearchCountry] = useSearchParams();
  const country = searchCountry.get('country') ?? '';

  const onAdd = newValue => setSearchCountry({ country: newValue });
  useEffect(() => {
    if (country === '') return;

    async function getRegionCountrie() {
      try {
        setLoader(true);
        const data = await fetchByRegion(country);
        setCountrys(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    }

    getRegionCountrie();
  }, [country]);

  return (
    <Section>
      <Container>
        <SearchForm onAdd={onAdd} />
        {loader && <Loader />}
        <CountryList countries={countrys} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
