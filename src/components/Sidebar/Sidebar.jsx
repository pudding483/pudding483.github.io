import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";
import avatarImg from "../../assets/playing_the_piano_comp.jpg";

function Sidebar() {
	// Test case
	const categories = [
		{ id: 1, name: "Frontend", count: 12 },
		{ id: 2, name: "Backend", count: 5 },
		{ id: 3, name: "Life", count: 8 },
	];

	// Test case
	const tags = ["React", "CSS", "JavaScript", "Food", "Travel"];

	return (
		<aside className={styles.sidebar}>
			{/* 放大頭貼/文章類別/標籤 */}
			<ProfileSection />

			<hr className={styles.divider} />

			<CategorySection list={categories} />

			<hr className={styles.divider} />

			<TagSection tags={tags} />
		</aside>
	);
}

function ProfileSection() {
	return (
		<div className={styles.profileSection}>
			<div className={styles.avatarWrapper}>
				<img src={avatarImg} alt="Avatar" className={styles.avatar} />
			</div>
			<h3 className={styles.name}>沈柏安</h3>
			<p className={styles.bio}>資安工程師 | 象棋愛好者</p>
		</div>
	);
}

function CategorySection({ list }) {
	return (
		<div className={styles.section}>
			<h4 className={styles.title}>文章分類</h4>
			<ul className={styles.list}>
				{list.map((item) => (
					<li key={item.id} className={styles.listItem}>
						{item.name}
						<span className={styles.count}>({item.count})</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function TagSection({ tags }) {
	return (
		<div className={styles.section}>
			<h4 className={styles.title}>標籤</h4>
			<div className={styles.tagCloud}>
				{tags.map((tag, index) => (
					<span key={index} className={styles.tag}>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
