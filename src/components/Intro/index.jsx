import './styles.css';

export function Intro() {
  return (
    <div className="container-intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-welcome">Hello, my name is</h2>
          <h1 className="intro-name">Pedro Giampietro</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Writer</div>
              <div className="intro-title-item">Content Creator</div>
            </div>
          </div>
          <div className="intro-desc">
            I develop services for customers of all sizes, specializing in
            creating stylish, modern websites, web services, and online stores.
          </div>
        </div>
      </div>
      <div className="intro-right">Right</div>
    </div>
  );
}
