// src/pages/posts/CompCSC
import styles from "./CompCSC_20260109.module.css";

import image from "../../assets/CSC_2026_1.jpg";

function CompCSC_2026_Post() {
	return (
		<article className={styles.articleWrapper}>
			<div className={styles.paperCard}>
				<header className={styles.postHeader}>
					<h1 className={styles.title}>2026 金盾獎決賽：雖然很累但很開心</h1>
					<div className={styles.metaInfo}>
						<span className={styles.date}>📅 2026-01-09</span>
						<span className={styles.category}>🏆 比賽心得</span>
					</div>
				</header>

				<hr className={styles.divider} />

				<div className={styles.content}>
					<div className={styles.introSection}>
						<span className={styles.introLabel}>Intro</span>
						<p>
							在金盾初賽比完後，還很懊惱沒有答對 CVSS
							的英文全稱，幸虧其他題目的作答情況不錯，最後還是有晉級決賽。
						</p>
					</div>

					<div className={styles.imageContainer}>
						<img
							src={image}
							alt="金盾獎比賽現場"
							className={styles.postImage}
						/>
						<span className={styles.caption}>結算畫面 (我是右 3 )</span>
					</div>

					<h2>遇到的困難</h2>
					<p>
						這次比賽由於我們的組員擅長的類別是 WEB + REV ，遇到 pwn
						題基本上無能為力
					</p>

					<h3>解決方案</h3>
					<p>我們正常分工，但是先攻 WEB 和 REV </p>

					<h3>心得</h3>
					<p>
						可惜 WEB 有一題使用 Windows 介面作為 File Explorer
						的題目只有知道存在 path traversal 的漏洞，最後沒能解出題目
						<br></br>
						(按照題目敘述，這題說明了為何不用 Windows base 的 File Explorer)
					</p>
				</div>
			</div>
		</article>
	);
}

export default CompCSC_2026_Post;
