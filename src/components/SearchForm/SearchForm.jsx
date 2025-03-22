import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onAdd }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const region = form.elements.region.value;
    if (!region) alert('enter value');

    onAdd(region);

    form.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <button className={styles.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <select
          aria-label="select"
          className={styles.select}
          name="region"
          required
          defaultValue="default"
        >
          <option disabled value="default">
            Select a region
          </option>
          {regions.map(region => (
            <option value={region.value} key={region.id}>
              {region.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default SearchForm;
