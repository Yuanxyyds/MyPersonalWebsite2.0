import './../../style/home/code-card.css';

export default function CodeCard() {
  return (
    <div className="code-card">
      <div className="card-header">
        <div className="dot red" />
        <div className="dot yellow" />
        <div className="dot green" />
      </div>
      <pre className="code-block">
        <code>
          <span className="keyword">import</span> React <span className="keyword">from</span> 'react';
          {'\n\n'}
          <span className="comment">(//) 🧩 Hobbies that make me whole</span>
          {'\n'}
          <span className="keyword">export default function</span> MyHobbies() {'{'}
          {'\n    '}
          console.<span className='highlight'>log</span>(<span className="string">"🐱 Timi and Chocho"</span>);
          {'\n    '}
          console.<span className='highlight'>log</span>(<span className="string">"👩‍❤️‍💋‍👨 Winnie"</span>);
          {'\n    '}
          console.<span className='highlight'>log</span>(<span className="string">"⚽🏀🏒 Sports"</span>);
          {'\n    '}
          console.<span className='highlight'>log</span>(<span className="string">"🎮 HoK FM24"</span>);
          {'\n    '}
          console.<span className='highlight'>log</span>(<span className="string">"📷 Nikon Z30"</span>);
          {'\n    '}
          console.<span className='highlight'>log</span>(<span className="string">"🇨🇳🇨🇦 Beijing Toronto"</span>);
          {'\n\n    '}
          <span className="keyword">return</span> <span className="neon-text">"I love software engineering"</span>;
          {'\n}\n'}
        </code>
      </pre>
    </div>
  );
}
