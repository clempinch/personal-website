import { useTranslation } from "react-i18next";
import "./Home.css";

export function Home() {
  const { t } = useTranslation();
  return (
    <div className="home">
      <div className="bubble">
        <div>
          {t("home.hello")}{" "}
          <span role="img" aria-label="hello">
            👋
          </span>
        </div>
        <div className="paragraph">
          {t("home.part1")} {t("home.part2")}{" "}
          <a
            className="link"
            href="https://www.m19.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            m19
          </a>
          .
        </div>
        <div className="paragraph">{t("home.part3")}</div>
      </div>
    </div>
  );
}
