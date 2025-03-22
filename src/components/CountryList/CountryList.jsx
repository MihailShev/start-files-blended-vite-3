import { Link } from 'react-router-dom';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(countrie => (
        <GridItem key={countrie.id}>
          <Link to={`country/${countrie.id}`}>
            <img src={countrie.flag} alt="country flag" />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
export default CountryList;
