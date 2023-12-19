// import logo from './logo.svg';

import styles from './app.module.css';

import Menu from '../menu/menu';
import Sidebar from '../sidebar/sidebar';
import SearchForm from '../search-form/search-form';
import NotePreview from '../note-preview/note-preview';
import Note from '../notes/note';


function App() {
  return (
    <>
      <div className={styles.page}>
        <Sidebar>
          <SearchForm />
          <NotePreview />
          <NotePreview />
          <NotePreview />
        </Sidebar>
        <div className={styles.content}>
          <Menu />
          <Note />
        </div>
      </div>
    </>
  );
}

export default App;