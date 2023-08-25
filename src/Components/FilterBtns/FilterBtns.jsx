
import styles from './FilterBtns.module.css';

const FilterBtns = ({ mode, setMode }) => {
  
  

  return (
    <div className={styles.filterBtns}>
      <button className={`${styles.alltodosBtn} ${mode === 'all' ? styles.active : ''}`} onClick={() => setMode('all')}>
        ALL TODOS
      </button>
      <button className={`${styles.importantTodosBtn} ${mode !== 'all' ? styles.active : ''}`}  onClick={()=> setMode('important')}>
        IMPORTANT TODOS
      </button>
    </div>
  );
};

export default FilterBtns;
