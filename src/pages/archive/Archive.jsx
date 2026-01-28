import { Link } from "react-router-dom";
import styles from "./Archive.module.css";

function Archive() {
  const blogPosts = [
    {
      id: 1,
      title: "2026 金盾獎決賽",
      date: "2026/01/09",
      description:
        "從早上 10:30 開始一路激戰到下午 3:30 的 CTF 競賽，三人小組共同合作...",
      path: "/posts/CompCSC_20260109.jsx",
    },
  ];

  return (
    <div className={styles.archiveContainer}>
      <h2 className={styles.pageTitle}>文章歸檔</h2>

      <div className={styles.listGrid}>
        {/* 用 map 遍歷 blogPosts 的資料變成卡片 */}
        {blogPosts.map((post) => (
          // 用 blogPosts 裡面的 key 對應
          <Link to={post.path} key={post.id} className={styles.postCard}>
            <h3 className={styles.title}>{post.title}</h3>
            <div className={styles.cardTag}>
              <span className={styles.date}>{post.date}</span>
            </div>
            <p className={styles.description}>{post.description}</p>
            <span className={styles.readMore}>閱讀更多 &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Archive;
