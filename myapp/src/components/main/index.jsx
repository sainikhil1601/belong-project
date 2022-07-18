import styles from "./styles.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";



const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  const [dropdown, setDropdown] = useState(false);

	return (
    <>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				

				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

		</div>
    </>
	)
};

export default Main;