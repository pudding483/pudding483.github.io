// src/pages/posts/CompCSC
import styles from "./CompCSC_20260109.module.css"; // 如果需要樣式

function CompCSC_2026_Post() {
	return (
		<article className={styles.articleContainer}>
			<h1>2026 金盾獎決賽心得：與許多高手同台競技</h1>
			<p className={styles.date}>2026-01-09</p>

			<div className={styles.content}>
				<p>
					在金盾初賽比完後，還很懊惱沒有答對 CVSS
					的英文全稱，很幸運的最後還是有晉級決賽
				</p>
				<h2>遇到的困難</h2>
				<p>我們在比賽中遇到了...</p>
				{/* 圖片可以直接 import 進來用 */}
				{/* <img src={...} /> */}
			</div>
		</article>
	);
}

export default CompCSC_2026_Post;
