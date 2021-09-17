import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { ContainerWithDate } from "../components/ContainerWithDate";
import "./Cv.css";

export function Cv() {
  const { t } = useTranslation();
  return (
    <div className="cv">
      <h2>{t("cv.experience.title")}</h2>
      <ContainerWithDate date={t("cv.experience.m19.date")}>
        <h3>
          {t("cv.experience.m19.title")}{" "}
          <a
            className="link"
            href="https://www.m19.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            m19
          </a>
        </h3>
        <p>{t("cv.experience.m19.description")}</p>
        <div className="techstack">
          <FontAwesomeIcon icon={faCogs} className="techstack-icon" />
          Angular, Java, MySQL, Docker, AWS
        </div>
      </ContainerWithDate>
      <ContainerWithDate date={t("cv.experience.criteo.date")}>
        <h3>
          {t("cv.experience.criteo.title")}{" "}
          <a
            className="link"
            href="https://www.criteo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criteo
          </a>
        </h3>
        <p>{t("cv.experience.criteo.description1")}</p>
        <p>{t("cv.experience.criteo.description2")}</p>
        <div className="techstack">
          <FontAwesomeIcon icon={faCogs} className="techstack-icon" />
          C#, Scala, Javascript, Spark, Hadoop, ML, Angular, SQL Server
        </div>
      </ContainerWithDate>
      <ContainerWithDate date={t("cv.experience.amadeus.date")}>
        <h3>
          {t("cv.experience.amadeus.title")}{" "}
          <a
            className="link"
            href="https://www.amadeus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amadeus
          </a>
        </h3>
        <p>{t("cv.experience.amadeus.description1")}</p>
        <p>{t("cv.experience.amadeus.description2")}</p>
        <div className="techstack">
          <FontAwesomeIcon icon={faCogs} className="techstack-icon" />
          Java, Spring, Apache Camel, ActiveMQ, Oracle, JBoss EAP, Apache, RHEL,
          SQL server, Apache Wicket
        </div>
      </ContainerWithDate>
      <ContainerWithDate date={t("cv.experience.amadeus-thesis.date")}>
        <h3>
          {t("cv.experience.amadeus-thesis.title")}{" "}
          <a
            className="link"
            href="https://www.amadeus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amadeus
          </a>
        </h3>
        <p>{t("cv.experience.amadeus-thesis.description1")}</p>
        <p>{t("cv.experience.amadeus-thesis.description2")}</p>
      </ContainerWithDate>
      <ContainerWithDate date={t("cv.experience.sics.date")}>
        <h3>
          {t("cv.experience.sics.title")}{" "}
          <a
            className="link"
            href="https://www.sics.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swedish Institute of Computer Science
          </a>{" "}
          (Stockholm)
        </h3>
        <p>{t("cv.experience.sics.description")}</p>
      </ContainerWithDate>
      <ContainerWithDate date={t("cv.experience.diadeis.date")}>
        <h3>
          {t("cv.experience.diadeis.title")}{" "}
          <a
            className="link"
            href="https://www.diadeis.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diadeis
          </a>{" "}
          (Nancy)
        </h3>
        <p>{t("cv.experience.diadeis.description")}</p>
      </ContainerWithDate>
      <ContainerWithDate date={t("cv.experience.cnrs.date")}>
        <h3>{t("cv.experience.cnrs.title")}</h3>
        <p>{t("cv.experience.cnrs.description")}</p>
      </ContainerWithDate>
      <ContainerWithDate date={t("cv.experience.philips.date")}>
        <h3>{t("cv.experience.philips.title")}</h3>
        <p>{t("cv.experience.philips.description")}</p>
      </ContainerWithDate>
      <h2>{t("cv.education.title")}</h2>
      <ContainerWithDate date="2007–2009">
        <h3>
          {t("cv.education.kth.title")}{" "}
          <a
            className="link"
            href="https://www.kth.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KTH
          </a>{" "}
          (Stockholm)
        </h3>
        <p>{t("cv.education.kth.description")}</p>
      </ContainerWithDate>
      <ContainerWithDate date="2005–2009">
        <h3>
          {t("cv.education.mines.title")}{" "}
          <a
            className="link"
            href="https://mines-nancy.univ-lorraine.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ecole des Mines de Nancy
          </a>
        </h3>
        <p>{t("cv.education.mines.description")}</p>
      </ContainerWithDate>
      <ContainerWithDate date="2003–2005">
        <h3>Classes préparatoires, Lycée Clemenceau (Reims)</h3>
        <p>{t("cv.education.prepas.description")}</p>
      </ContainerWithDate>
      <ContainerWithDate date="2003">
        <h3>{t("cv.education.bac.title")}</h3>
        <p>{t("cv.education.bac.description")}</p>
      </ContainerWithDate>
      <h2>{t("cv.languages.title")}</h2>
      <div className="language">
        <div>🇫🇷</div>
        <div>{t("cv.languages.fr.level")}</div>
        <div className="language-certificate"></div>
      </div>
      <div className="language">
        <div>🇬🇧</div>
        <div>{t("cv.languages.en.level")}</div>
        <div className="language-certificate">
          {t("cv.languages.en.diploma")}
        </div>
      </div>
      <div className="language">
        <div>🇩🇪</div>
        <div>{t("cv.languages.de.level")}</div>
        <div className="language-certificate">
          {t("cv.languages.de.diploma")}
        </div>
      </div>
      <div className="language">{t("cv.languages.other")}</div>
      <h2>{t("cv.misc.title")}</h2>
      <p>{t("cv.misc.part1")}</p>
      <p>{t("cv.misc.part2")}</p>
      <p>{t("cv.misc.part3")}</p>
    </div>
  );
}
