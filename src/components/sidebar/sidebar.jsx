import styles from "./sidebar.module.css";

function Sidebar({children}) {
    return(
        <>
            <div className={styles.wrapper}>
                {children}
            </div>
        </>
    );
}

export default Sidebar;