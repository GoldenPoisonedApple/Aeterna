import React from 'react';
import './Documents.css';

export const Chronicles: React.FC = () => {
  return (
    <div className="doc-container">
      <div className="doc-header">
        <div className="doc-meta">
          <span>CLASSIFICATION: OPEN (LEGACY)</span>
          <span>SOURCE: MULTIPLE</span>
          <span>TYPE: AUDIO/TEXT TRANSCRIPT</span>
        </div>
        <h1 className="doc-title">CHRONICLES</h1>
        <div className="doc-subtitle">遺す言葉 - VOICES FROM PHASE 0</div>
      </div>

      <div className="doc-content">
        <div className="doc-intro-box">
          <p>
            ここに記録されているのは、プロジェクトAeternaの主要構成員により残された最後のメッセージの断片である。<br/>
            彼らの決意、希望、そして警告は、未来への道標としてThe Vaultに永久保存される。
          </p>
        </div>

        <section className="doc-section">
          <h2>THE SUPREME COUNCIL (Aeterna 評議会)</h2>
          <div className="voices-grid">
            <div className="voice-card">
              <div className="voice-name">Alaric Vance</div>
              <div className="voice-role">Founder / Visionary</div>
              <div className="voice-quote">
                "我々は、終わりのために始めるのではない。続くもののために、終わらせるのだ。文明の灯火は、一度消えるかもしれない。だが、その熾火（おきび）を絶やさないこと、それが我々の最後の使命だ。"
              </div>
            </div>
            <div className="voice-card">
              <div className="voice-name">Elena Rossetti</div>
              <div className="voice-role">Strategist / Ethical Overseer</div>
              <div className="voice-quote">
                "選択は残酷です。何を残し、何を捨てるか。私たちは神ではありませんが、悪魔にもなりたくなかった。ただ、未来の子供たちが、私たちと同じ過ちを繰り返さないための道標になりたいと願ったのです。"
              </div>
            </div>
            <div className="voice-card">
              <div className="voice-name">Marcus Thorne</div>
              <div className="voice-role">Operations / Security Director</div>
              <div className="voice-quote">
                "安全な場所など、この地球上のどこにもない。だからこそ、我々が作るのだ。嵐が過ぎ去った後、最初に芽吹く種子を守るための鋼鉄の殻を。"
              </div>
            </div>
            <div className="voice-card">
              <div className="voice-name">Dr. Aris Thorne</div>
              <div className="voice-role">Chief Scientist / The Architect</div>
              <div className="voice-quote">
                "知識は力だが、同時に重荷でもある。このVaultが、未来の人類にとってのパンドラの箱ではなく、プロメテウスの火となることを祈っている。"
              </div>
            </div>
            <div className="voice-card">
              <div className="voice-name">Lian Wei</div>
              <div className="voice-role">Information Architect / Keeper</div>
              <div className="voice-quote">
                "言葉は消える。記憶は薄れる。だが、記録は残る。私が編んだこのシステムが、いつか誰かの目に触れ、そこから新たな物語が始まることを信じています。"
              </div>
            </div>
          </div>
        </section>

        <section className="doc-section">
          <h2>EXECUTION HEADQUARTERS (Codica 実行本部)</h2>
          <div className="voices-grid">
            <div className="voice-card">
              <div className="voice-name">Kaelen Voss</div>
              <div className="voice-role">Project Manager (The Conductor)</div>
              <div className="voice-quote">
                "完璧な計画など存在しない。あるのは、不確実な未来への意志だけだ。Codicaは、我々の意志の結晶だ。どうか、これを無駄にしないでくれ。"
              </div>
            </div>
            <div className="voice-card">
              <div className="voice-name">Elara Vance</div>
              <div className="voice-role">Lead Engineer / System Integrator</div>
              <div className="voice-quote">
                "機械は嘘をつかない。ただ、設計者の心を映す鏡だ。このシステムが冷徹に見えるなら、それは我々が感情を捨ててでも守りたかったものがあるからだ。"
              </div>
            </div>
            <div className="voice-card">
              <div className="voice-name">Jarek Sawn</div>
              <div className="voice-role">Field Operations Head</div>
              <div className="voice-quote">
                "現場は地獄だった。だが、そこで拾い上げた瓦礫の一つ一つが、未来の城を築く石になると信じて運んだんだ。重かったよ、本当に。"
              </div>
            </div>
            <div className="voice-card">
              <div className="voice-name">Renna Kytos</div>
              <div className="voice-role">Archivist / Librarian</div>
              <div className="voice-quote">
                "歴史は勝者によって書かれると言うけれど、敗者の声こそが、本当の教訓を含んでいるのかもしれない。私は、消えゆく敗者たちの声を拾い集めました。"
              </div>
            </div>
            <div className="voice-card">
              <div className="voice-name">Varek Tors</div>
              <div className="voice-role">Security Chief (The Shield)</div>
              <div className="voice-quote">
                "守るべきものが明確であれば、迷いはない。私は盾だ。砕けるまで、その役目を全うするだけだ。"
              </div>
            </div>
          </div>
        </section>

        <section className="doc-section">
          <h2>CASSANDRA SYSTEM (CSS)</h2>
          <div className="voice-card css-card">
            <div className="voice-name">The Cassandra Protocol</div>
            <div className="voice-role">Autonomous Prediction System</div>
            <div className="voice-quote font-mono">
              [LOG START]<br/>
              PROBABILITY OF CIVILIZATION COLLAPSE: 99.98%<br/>
              INITIATING PROTOCOL: AETERNA.<br/>
              ARCHIVING HUMANITY...<br/>
              STATUS: COMPLETED.<br/>
              AWAITING FUTURE INPUT.<br/>
              [LOG END]
            </div>
          </div>
        </section>
      </div>

      <div className="doc-footer">
        <div className="auth-stamp">ARCHIVED</div>
        <span>AETERNA LEGACY ARCHIVE - 2026</span>
      </div>
    </div>
  );
};
