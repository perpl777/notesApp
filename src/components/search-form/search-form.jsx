import styles from './search-form.module.css';

function SearchForm() {
    return (
        <>
        <div className={styles.conteiner}>
            <input type="search" className={styles.input} placeholder="Search"></input>
        </div>
        </>
    );
}

export default SearchForm;