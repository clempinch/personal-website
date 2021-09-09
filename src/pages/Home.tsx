import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <div className="bubble">
        <div>
          Hello!{" "}
          <span role="img" aria-label="hello">
            👋
          </span>
        </div>
        <div className="paragraph">
          My name is Clément Pinchedez. I am a software engineer at{" "}
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
        <div className="paragraph">
          I am interested in many different things, I program, I stroll, I
          travel, I read comic books.
        </div>
      </div>
    </div>
  );
}
