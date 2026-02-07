import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

import useTheme, { type Theme } from "../../hooks/useTheme";

// 定義多語言提示文字
const I18N_TEXT = {
  "zh-TW": {
    toLight: "切換至淺色模式",
    toDark: "切換至深色模式",
    auto: "跟隨系統主題",
  },
  en: {
    toLight: "Switch to Light Mode",
    toDark: "Switch to Dark Mode",
    auto: "System Theme",
  },
};

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [lang, setLang] = useState<"zh-TW" | "en">("zh-TW"); // 預設語言為中文

  useEffect(() => {
    setIsMounted(true);

    // 用路徑判斷當前語言
    if (window.location.pathname.startsWith("/en")) {
      setLang("en");
    } else {
      setLang("zh-TW");
    }
  }, []);
  if (!isMounted) {
    return <></>;
  }

  const handleChange = (theme: Theme) => {
    setTheme(theme);
    document.body.dispatchEvent(
      new CustomEvent("theme-set", {
        detail: {
          theme,
        },
      }),
    );
  };

  const handleClick = () => {
    if (theme === "dark") {
      handleChange("light");
    } else if (theme === "light") {
      handleChange("dark");
    } else {
      handleChange("light");
    }
  };

  const getTitle = () => {
    // 根據當前主題和語言返回對應的提示文字
    const t = I18N_TEXT[lang];

    if (theme === "dark") return t.toLight; // 現在是暗的，提示按下去會變亮
    if (theme === "light") return t.toDark; // 現在是亮的，提示按下去會變暗
    return t.auto;
  };

  return (
    <span
      className={className}
      onClick={handleClick}
      role="button" // 建議補上，增加可訪問性
      aria-label="Toggle Theme"
      title={getTitle()} // 根據當前主題動態設定提示文字
    >
      {theme === "dark" && <FontAwesomeIcon icon={faMoon} scale={20} />}
      {theme === "light" && <FontAwesomeIcon icon={faSun} scale={20} />}
      {theme === "auto" && (
        <FontAwesomeIcon icon={faCircleHalfStroke} scale={20} />
      )}
    </span>
  );
}
