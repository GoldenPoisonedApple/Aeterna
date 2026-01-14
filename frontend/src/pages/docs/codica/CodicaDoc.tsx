import React from 'react';

export const CodicaDoc: React.FC = () => {
  return (
    <div className="document-container">
       <div className="doc-header">
        <h1>PROJECT: CODICA</h1>
        <div className="doc-meta">
          <span>PRIORITY: HIGHEST</span>
          <span>REF ID: CODEX-ALPHA</span>
        </div>
      </div>

      <div className="doc-section">
        <h2>1. 概要 (Codex)</h2>
        <p>Aeterna プロジェクトの一部。</p>
        <p>本計画における中核プロジェクトと位置づけられる。</p>
      </div>

      <div className="doc-section">
        <h2>2. プロジェクト名意味</h2>
        <dl className="data-list">
          <dt>語源</dt>
          <dd>ラテン語 <em>codex, codicis</em>（写本）の語幹 <em>codic-</em> に名詞化接尾辞 <em>-a</em> を付与。</dd>
          <dt>意味</dt>
          <dd>書物の集合。古典的な知の蔵書を表象。</dd>
          <dt>関連語</dt>
          <dd>コード（code：暗号・規範）、デコード（decode：解読）</dd>
        </dl>
      </div>

      <div className="doc-section">
        <h2>3. 付随情報</h2>
        <p>知を遺すプロジェクトである。</p>
        <ul className="bullet-list">
          <li>人類の大きな功績の一つである文字(記号)を表す。</li>
          <li>遠い未来、code(暗号)を読み解く過程を表す。</li>
        </ul>
      </div>

      <div className="doc-section">
        <h2>4. 込めた想い</h2>
        <blockquote className="quote-box">
          <p>知識こそ人類の歩みであり、その足跡を一冊一冊遺し続ける意志の結晶。</p>
          <p>あらゆる言葉と記録が、未来で再び読み解かれることを信じて。</p>
          <p>知るという行為がこの世界に確かに存在した証として。</p>
          <p>学びと記録を繰り返した、幾億の者たちの誇りの積層。</p>
          <p>あらゆる言葉と記録が、未来で再び読み解かれることを信じて。</p>

          <p style={{ marginTop: '1.5rem', fontStyle: 'normal', fontSize: '0.9em', borderTop: '1px solid #444', paddingTop: '0.5rem' }}>
            文明の知が一冊の本として再生しうると悟った瞬間、主人公はそっと手を合わせ、静かに涙をこぼす。
          </p>
        </blockquote>
      </div>

      <hr style={{ borderColor: '#333', margin: '2rem 0' }} />

      <div className="doc-section">
        <h2>5. 保管場所 "The Vault"</h2>
        <div className="vault-schematic">
           FACILITY SCHEMATIC: THE VAULT
        </div>
        
        <h3>名称規定</h3>
        <dl className="data-list">
          <dt>語源</dt>
          <dd>英語</dd>
          <dt>意味</dt>
          <dd>保管室、金庫室、地下室</dd>
        </dl>

        <h3>選定理由</h3>
        <ul className="bullet-list">
          <li>
            <strong>究極の安全性の象徴</strong><br/>
            外部からの物理的衝撃、環境変動、そして時間の経過そのものに対しても、内部の情報を守り抜くという絶対的な安全性を担保する。
          </li>
          <li>
            <strong>Vault (跳躍する)</strong><br/>
            遠い未来へ飛び越えて知識を届ける意を含む。
          </li>
        </ul>

        <h3>込めた想い</h3>
        <blockquote className="quote-box">
          <p>来るべき時まで静かに、しかし確実に内部の情報を守り続ける「守護者」であれ。</p>
          <p>未来の発見者が慎重かつ敬意を持ってその扉を開くことを願う。</p>
          <p>そして、中にある知識が、彼らの文明にとって有益なものとなることを期待する。</p>
        </blockquote>
      </div>
    </div>
  );
};
