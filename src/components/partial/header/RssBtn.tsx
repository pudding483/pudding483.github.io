import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

// 定義不同語言的提示文字
const I18N_TEXT = {
  "zh-TW": "訂閱 RSS",
  en: "Subscribe to RSS",
};

export default function RssBtn({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const [title, setTitle] = useState(I18N_TEXT["zh-TW"]);
  useEffect(() => {
    if (window.location.pathname.startsWith("/en")) {
      setTitle(I18N_TEXT["en"]);
    } else {
      setTitle(I18N_TEXT["zh-TW"]);
    }
  }, []);

  return (
    <a
      href={`${url}/rss.xml`}
      target="_blank"
      aria-label="RSS"
      rel="noreferrer"
      className={className}
      title={title} // 動態文字
    >
      <FontAwesomeIcon icon={faRss} scale={20} />
    </a>
  );
}
