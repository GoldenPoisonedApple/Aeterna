import React from 'react';

export const AeternaDoc: React.FC = () => {
  return (
    <div className="document-container">
      <div className="doc-header">
        <h1>PROJECT AETERNA</h1>
        <div className="doc-meta">
          <span>CLASSIFICATION: TOP SECRET</span>
          <span>PROJECT ID: AETERNA-001</span>
        </div>
      </div>

      <div className="doc-section">
        <h2>1. 概要</h2>
        <p>
          <strong>人類の記憶を遺す。</strong>
        </p>
        <p>
          現状推移において、戦争等の要因により人類が一度死滅し、文明が失われる可能性が危惧される状況にある。
          これに対し、世界中から選抜された極めて優秀な知性たちが、遠い将来における復元可能性をも網羅的に検討し、文明を後世へ遺すためのプロジェクト。
        </p>
        <p>
          生命や知の保管など、多岐にわたるサブプロジェクトを統括する。
        </p>
      </div>

      <div className="doc-section">
        <h2>2. プロジェクト名</h2>
        <dl className="data-list">
          <dt>名称</dt>
          <dd>Aeterna</dd>
          <dt>語源</dt>
          <dd>ラテン語 <em>aeternus</em>（永遠の）の女性形 <em>aeterna</em></dd>
          <dt>意味</dt>
          <dd>永遠、不朽。時間を超えて存続することを示唆。</dd>
          <dt>関連語</dt>
          <dd>エターナル（eternal：英語）、パーペチュアル（perpetual：永続的な）</dd>
        </dl>
      </div>

      <div className="doc-section">
        <h2>3. 理念</h2>
        <blockquote className="quote-box">
          不滅を願い、今世まで命を紡いできた先達の祈りを込めて<br/>
          そして文明の埋火を守り続ける、最後の炎として。
        </blockquote>
      </div>

      <div className="doc-section">
        <h2>4. サブプロジェクト一覧</h2>
        
        <div className="sub-project-card">
          <h3>Genoma（ジェノマ） - 命の保管</h3>
          <p>地球上の生物を保管する計画。</p>
          
          <h4>プロジェクト名規定</h4>
          <ul className="bullet-list">
            <li><strong>語源:</strong> ギリシャ語 <em>genos</em>（種族）＋ラテン語接尾辞 <em>-oma</em>（集合体）</li>
            <li><strong>意味:</strong> 種の集合体。地球上のあらゆる生物種の遺伝情報。</li>
            <li><strong>関連語:</strong> genome（ゲノム、全遺伝情報）、genealogy（系譜学）</li>
          </ul>

          <h4>理念</h4>
          <p className="philosophy-text">
            「命の設計図をこの箱舟に託す。<br/>
            すべての種が、再び芽吹く大地を夢見て。」
          </p>

          <h4>目的保管物</h4>
          <ul className="bullet-list">
            <li>全生物種のゲノム配列</li>
            <li>種子・胞子サンプル</li>
            <li>食事 等</li>
          </ul>
        </div>

        <div className="sub-project-card highlight">
          <h3>Codica（コディカ） - 知の保管</h3>
          <div style={{ textAlign: 'right', fontSize: '0.8rem' }}><a href="/docs/codica" style={{ color: '#ff3333' }}>[詳細文書へのアクセス制限解除]</a></div>
          
          <h4>プロジェクト名規定</h4>
          <ul className="bullet-list">
            <li><strong>語源:</strong> ラテン語 <em>codex, codicis</em>（写本）の語幹 <em>codic-</em> に名詞化接尾辞 <em>-a</em> を付与</li>
            <li><strong>意味:</strong> 書物の集合、古典的な知の蔵書を表象。人類が築き上げてきた知識文書。</li>
            <li><strong>関連語:</strong> コード（code：暗号・規範）、デコード（decode：解読）</li>
          </ul>

          <h4>理念</h4>
          <p className="philosophy-text">
            「幾億の者達による知の積層が、この世界に確かに存在した証として<br/>
            そして未来で再び読み解かれることを信じて。」
          </p>

          <h4>目的保管物</h4>
          <ul className="bullet-list">
            <li>歴史</li>
            <li>理論</li>
            <li>学問</li>
            <li>技術 等</li>
          </ul>
        </div>

        <div className="sub-project-card">
          <h3>Expressa（エクスプレッサ） - 表現の保管</h3>
          
          <h4>プロジェクト名規定</h4>
          <ul className="bullet-list">
            <li><strong>語源:</strong> ラテン語 <em>expressio</em>（表現）の語幹 <em>express-</em> に接尾辞 <em>-a</em> を付与</li>
            <li><strong>意味:</strong> 顕現された表現。人類のすべての創造的顕現。</li>
            <li><strong>関連語:</strong> express（表す）、expressive（表現力豊かな）</li>
          </ul>

          <h4>理念</h4>
          <p className="philosophy-text">
            「言葉にならない感情も、形なき衝動も、未来の誰かに響くことを願って。」
          </p>

          <h4>目的保管物</h4>
          <ul className="bullet-list">
            <li>哲学書・文芸作品・大衆小説・官能小説など全ての文芸</li>
            <li>音楽・口承音声</li>
            <li>絵画・写真・マンガコミックス</li>
            <li>映画・アニメ・ドキュメンタリー</li>
            <li>ゲーム・エンタメ・スポーツ</li>
            <li>建築・プロダクトデザイン 等</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
