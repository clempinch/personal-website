import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContainerWithDate } from "../components/ContainerWithDate";
import "./Cv.css";

export function Cv() {
  return (
    <div className="cv">
      <h2>Experience</h2>
      <ContainerWithDate date="since 2021">
        <h3>
          Lead Software Engineer at{" "}
          <a
            className="link"
            href="https://www.m19.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            m19
          </a>
        </h3>
        <p>Developing tools to help brands with Amazon ads.</p>
        <div className="techstack">
          <FontAwesomeIcon icon={faCogs} className="techstack-icon" />
          Angular, Java, MySQL, Docker, AWS
        </div>
      </ContainerWithDate>
      <ContainerWithDate date="2014–2021">
        <h3>
          Dev lead at{" "}
          <a
            className="link"
            href="https://www.criteo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criteo
          </a>
        </h3>
        <p>
          From 2019, led a team of 6 engineers, providing applications and tools
          to serve a library of banner components (text, images, videos,
          scripts...) with a uniform quality across browsers and devices.
        </p>
        <p>
          Started as a software engineer and joined multiple projects in the
          company: new inventory (native ads, video retargeting...), new
          products for brands, dynamic creative...
        </p>
        <div className="techstack">
          <FontAwesomeIcon icon={faCogs} className="techstack-icon" />
          C#, Scala, Javascript, Spark, Hadoop, ML, Angular, SQL Server
        </div>
      </ContainerWithDate>
      <ContainerWithDate date="2009–2014">
        <h3>
          Software engineer at{" "}
          <a
            className="link"
            href="https://www.amadeus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amadeus
          </a>
        </h3>
        <p>
          From 2012, worked in Airport IT division to work on an highly
          available mediation layer and airport service bus.
        </p>
        <p>
          Started as a software engineer working on internal tools for the
          e-commerce division.
        </p>
        <div className="techstack">
          <FontAwesomeIcon icon={faCogs} className="techstack-icon" />
          Java, Spring, Apache Camel, ActiveMQ, Oracle, JBoss EAP, Apache, RHEL,
          SQL server, Apache Wicket
        </div>
      </ContainerWithDate>
      <ContainerWithDate date="2009">
        <h3>
          Master Thesis at{" "}
          <a
            className="link"
            href="https://www.amadeus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amadeus
          </a>
        </h3>
        <p>
          Design and implementation of a high-throughput distributed task
          execution system to improve the releasing process of the Amadeus
          e-commerce products.
        </p>
        <p>Grade A. Finalist of the Amadeus Intern Contest (4th).</p>
      </ContainerWithDate>
      <ContainerWithDate date="Sep–Dec 2008">
        <h3>
          Developer at the{" "}
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
        <p>
          Persistent messaging in Java using MySQL Cluster. 4 months assignment.
          Development of a persistence plugin for Apache ActiveMQ
        </p>
      </ContainerWithDate>
      <ContainerWithDate date="Summer 2008">
        <h3>
          Intern at{" "}
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
        <p>
          For the publication of the Official Journal of the European Union,
          design and development of a performant XSL-FO processor in C# for
          Arbortext Advanced Print Publisher (AAPP). The engine can handle the
          XSL-FO and the MathML standards.
        </p>
      </ContainerWithDate>
      <ContainerWithDate date="Summer 2007">
        <h3>Intern at CNRS (Versailles)</h3>
        <p>
          Design and implementation in Java of a résumé "search engine" coupled
          to an XML extraction Swing UI for analyzis. This internship was part
          of a sociology research project (analysis of the W3C standardization
          processes)
        </p>
      </ContainerWithDate>
      <ContainerWithDate date="Feb–Mar 2007">
        <h3>Assembly line worker at Philips Lighting (Aachen)</h3>
        <p>
          After several assignments on the assembly line, wrote a report about
          quality management in the industry
        </p>
      </ContainerWithDate>
      <h2>Education</h2>
      <ContainerWithDate date="2007–2009">
        <h3>
          Master of Science{" "}
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
        <p>Software engineering of distributed systems</p>
      </ContainerWithDate>
      <ContainerWithDate date="2005–2009">
        <h3>
          Ingénieur civil des Mines{" "}
          <a
            className="link"
            href="https://mines-nancy.univ-lorraine.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ecole des Mines de Nancy
          </a>
        </h3>
        <p>IT engineering</p>
      </ContainerWithDate>
      <ContainerWithDate date="2003–2005">
        <h3>Classe préparatoires, Lycée Clemenceau (Reims)</h3>
        <p>
          Preparation for the competitive entrance examination to prestigious
          French engineering universities
        </p>
      </ContainerWithDate>
      <ContainerWithDate date="2003">
        <h3>Scientific Baccalauréat</h3>
        <p>National high school leaving diploma passed with honour</p>
      </ContainerWithDate>
      <h2>Languages</h2>
      <div className="language">
        <div>🇫🇷</div>
        <div>Mother tongue</div>
        <div className="language-certificate"></div>
      </div>
      <div className="language">
        <div>🇬🇧</div>
        <div className="language-level">Good level</div>
        <div className="language-certificate">
          Cambridge Certificated of advanced English awarded in 2007
        </div>
      </div>
      <div className="language">
        <div>🇩🇪</div>
        <div className="language-level">Fair level</div>
        <div className="language-certificate">
          Zentrale Mittelstufenprüfung (Goethe-Institut) awarded in 2006
        </div>
      </div>
      <div className="language">Notions of 🇸🇪, 🇪🇸 and 🇨🇳</div>
      <h2>Other interests</h2>
      <p>Hiking, swimming, running</p>
      <p>Art history (ex-student at the "Ecole du Louvre")</p>
      <p>
        Flute/Piccolo, ex-treasurer of the Student Orchestra of Nancy
        (organization of concerts and trips)
      </p>
    </div>
  );
}
