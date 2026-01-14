import React from 'react';
import './Documents.css';

export const TheVault: React.FC = () => {
  return (
    <div className="doc-container">
      <div className="doc-header">
        <div className="doc-meta">
          <span>CLASSIFICATION: TOP SECRET // ARCHITECTURAL</span>
          <span>DATE: 2026-01-15</span>
          <span>REF: AET-ARC-VAULT-001</span>
        </div>
        <h1 className="doc-title">THE VAULT</h1>
        <div className="doc-subtitle">保管施設仕様書 及び 命名の由来</div>
      </div>

      <div className="doc-content">
        <section className="doc-section">
          <h2>1. 命名の由来 (ETYMOLOGY & PHILOSOPHY)</h2>
          <div className="doc-block">
            <p className="quote-text">
              "The Vault" という名称は、単なる機能的な名称を超え、プロジェクトの根幹にある願いや決意を反映している。
            </p>
          </div>

          <div className="doc-grid-card">
            <div className="doc-card">
              <h4>究極の安全性の象徴</h4>
              <p>銀行の金庫室 (Bank Vault) のように、人類の知という最も貴重な遺産を、物理的衝撃や時間から守り抜く絶対的な安全性を表す。</p>
            </div>
            <div className="doc-card">
              <h4>隔離された聖域</h4>
              <p>地下聖堂のニュアンスを含み、静かで外界から隔絶された場所であることを示す。それは知性が凝縮された聖域である。</p>
            </div>
            <div className="doc-card">
              <h4>構造的堅牢性と永続性</h4>
              <p>アーチ構造 (Vault) の強固さは、施設の物理的な耐久性を象徴する。</p>
            </div>
            <div className="doc-card">
              <h4>時間と困難の超越</h4>
              <p>動詞としての "Vault" (跳躍する) は、現在の危機と文明の断絶を飛び越え、未来へ知識を届ける意志を暗示する。</p>
            </div>
          </div>
        </section>

        <hr className="doc-divider" />

        <section className="doc-section">
          <h2>2. 施設構造 (ARCHITECTURAL STRUCTURE)</h2>
          <p>「灰に覆われ固く固く幾重にも閉ざされた鋼鉄の扉」を具現化した多層防御構造。</p>

          <div className="vault-schematic-large">
             <div className="layer-container layer-outer">
               <div className="layer-label">LEVEL 1: OUTER SHELL (AEGIS)</div>
               <div className="layer-detail">
                 偽装岩盤 / 特殊コンクリート / 耐熱金属複合装甲<br/>
                 核兵器直撃、巨大隕石、風化侵食に耐える設計。
               </div>
             </div>
             <div className="layer-connector">↓</div>
             <div className="layer-container layer-mid">
               <div className="layer-label">LEVEL 2: BUFFER ZONE (LABYRINTH)</div>
               <div className="layer-detail">
                 物理的迷路 / 偽装通路 / 重厚な隔壁 / 不活性ガス<br/>
                 意図的な侵入を遅延・阻止。警告碑の設置。
               </div>
             </div>
             <div className="layer-connector">↓</div>
             <div className="layer-container layer-inner">
               <div className="layer-label">LEVEL 3: INNER CORE (SANCTUARY)</div>
               <div className="layer-detail">
                 完全気密 / アメリシウム電源 / NMED・QFLS保管庫<br/>
                 温度・湿度・放射線を厳密に管理制御。人類の叡智の安息地。
               </div>
             </div>
          </div>
        </section>

        <section className="doc-section">
          <h2>3. 立地選定基準 (SITE SELECTION)</h2>
          <ul className="doc-list-styled">
             <li><strong>地質学的超安定性:</strong> 安定陸塊(クラトン)の中心部。地震・火山帯を回避。</li>
             <li><strong>極限的自然災害からの隔離:</strong> 洪水、津波、氷河侵食の影響を受けない高地または地下深部。</li>
             <li><strong>人間活動からの完全隔離:</strong> 文明圏、資源採掘地域から遠く離れた場所。</li>
             <li><strong>資源的価値の極低性:</strong> 未来の文明による採掘対象とならない不毛な地。</li>
          </ul>
          <div className="doc-card small">
            <strong>有力候補地:</strong> 南極大陸氷床下深部 / シベリア卓状地 / 深海平原地下 / 月面地下 (L4/L5)
          </div>
        </section>
      </div>

      <div className="doc-footer">
        <div className="auth-stamp">CLASSIFIED</div>
        <span>FACILITY ENGINEERING DIVISION - 2026</span>
      </div>
    </div>
  );
};
