import styles from './note-preview.module.css';

function NotePreview() {
    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Title</h2>
                <p className={styles.text}>text text text</p>
            </div>

        </>
    );
}

export default NotePreview;