import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="matrix-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Philip Hilm</h1>
          
          <div className="profile-container">
            <Image
              src="/philip.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="profile-image"
              priority
            />
            <div className="profile-overlay"></div>
            <div className="profile-glitch"></div>
          </div>

          <p className="hero-subtitle">AI Researcher | DeFi Innovator | Game Theory Specialist</p>
          
          <div className="bio">
            <div className="line-numbers">
              {[...Array(9)].map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <p>
              {">"} My journey has taken me from <span className="highlight">high-level poker</span> to developing&nbsp;
              <span className="highlight">proprietary neural networks</span> for Nash Equilibrium calculations, 
              and now to the forefront of <span className="highlight">DeFi innovation</span>. 
            </p>
            <p>
              {">"} This unique path has equipped me with deep expertise in <strong>C++</strong>, <strong>Python</strong>, 
              and <strong>Solidity</strong>.
            </p>
            <p>
              {">"} I specialize in transforming complex theoretical concepts into practical solutions,
              particularly at the intersection of <span className="highlight">game theory</span>,{" "}
              <span className="highlight">AI</span>, and <span className="highlight">decentralized finance</span>
              <span className="typing-cursor"></span>
            </p>
          </div>

          <div className="expertise">
            <span className="expertise-tag">C++</span>
            <span className="expertise-tag">Python</span>
            <span className="expertise-tag">Solidity</span>
            <span className="expertise-tag">Neural_Networks</span>
            <span className="expertise-tag">Game_Theory</span>
            <span className="expertise-tag">DeFi</span>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a href="mailto:me@zilliun.org" className="contact-button">
              $ contact --init
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 