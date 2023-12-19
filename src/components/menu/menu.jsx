import Button from "../button/button";

import styles from "./menu.module.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineAddBox } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineBrightness4 } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function Menu() {
    return (
        <>
        <div className={styles.conteiner}>
            <div className={styles.wrapper}>
                <Button className={styles.left}>
                    <RxHamburgerMenu />
                </Button>
                <div className={styles.title}>NotesApp</div>
                <div className={styles.right}>
                    <Button>
                        <MdOutlineAddBox />
                    </Button>
                    <Button>
                        <IoIosArrowForward />
                    </Button>
                    <Button>
                        <MdOutlineBrightness4 />
                    </Button>
                    <Button>
                        <RiDeleteBin6Line />
                    </Button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Menu;