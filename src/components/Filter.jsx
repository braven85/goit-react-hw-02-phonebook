import styles from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter }) => {
  return (
    <div className={styles.Filter__container}>
      <label className={styles.Filter__label}>
        Find contact by name:
        <br />
        <input className={styles.Filter__input} type="text" onChange={filter} />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.func,
};
