import styles from "../../styles/navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.navbarBackground}>
			<div>
				<div>
					<div className={styles.navbarMainFont}>PORTFOLIO</div>
					<div className={styles.navbarMiniFont}>정윤환</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
