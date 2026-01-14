import React from 'react';
import './Documents.css';

export const SecurityProtocols: React.FC = () => {
  return (
    <div className="doc-container">
      <div className="doc-header">
        <div className="doc-meta">
          <span>CLASSIFICATION: UNCLASSIFIED // INTERNAL REGULATION</span>
          <span>DATE: 2026-01-15</span>
          <span>REF: AET-SEC-PRO-001</span>
        </div>
        <h1 className="doc-title">SECURITY PROTOCOLS & NON-DISCLOSURE</h1>
        <div className="doc-subtitle">秘密保持プロトコル規定 及び 誓約</div>
      </div>

      <div className="doc-content">
        <section className="doc-section">
          <h2>第1章 総則 (GENERAL PROVISIONS)</h2>
          <div className="doc-block">
            <p><strong>第1条 (目的):</strong> 本プロジェクトの成果が「パンドラの箱」となるリスクを防ぎ、プロジェクトの安全かつ確実な遂行を保証するため、絶対的な秘密保持を最優先事項とする。</p>
            <p><strong>第2条 (適用範囲):</strong> 本規程は、Aeterna評議会、実行本部、CSS、協力関係者を含む全参加者に適用される。</p>
          </div>
          
          <div className="doc-alert-box warning">
            <h3>第3条 秘密保持の基本原則</h3>
            <ul className="bullet-list">
              <li><strong>絶対秘匿の原則:</strong> 存在、目的、内容、参加者、施設、技術等、一切の情報は最高機密。</li>
              <li><strong>Need-to-Know:</strong> アクセスは業務遂行上真に必要とする最小限の範囲に限定。</li>
              <li><strong>最小権限の原則:</strong> 業務に必要な最小限の権限のみ付与。</li>
              <li><strong>個人責任の原則:</strong> 各参加者は秘密保持について個人的な責任を負う。</li>
            </ul>
          </div>
        </section>

        <section className="doc-section">
          <h2>第2章 情報の分類 (CLASSIFICATION)</h2>
          <table className="doc-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Designation</th>
                <th>Description</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-critical">
                <td className="level-3">LEVEL Ω</td>
                <td>OMEGA (絶対機密)</td>
                <td>プロジェクトの根幹、最終目的、施設位置、議事録など。</td>
                <td>最高評議会、総責任者のみ</td>
              </tr>
              <tr>
                <td className="level-2">LEVEL A</td>
                <td>ALPHA (高度機密)</td>
                <td>運営、技術詳細、CSS主要議論、保安計画など。</td>
                <td>部門長、FLリーダーのみ</td>
              </tr>
              <tr>
                <td className="level-1">LEVEL B</td>
                <td>BETA (機密)</td>
                <td>特定業務の遂行に必要な情報。</td>
                <td>担当職員</td>
              </tr>
              <tr>
                <td className="level-0">LEVEL Γ</td>
                <td>GAMMA (注意)</td>
                <td>内部連絡事項など。外部開示禁止。</td>
                <td>全参加者</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="doc-divider" />

        <section className="doc-section">
          <h2>第3章 情報の取り扱い (HANDLING)</h2>
          
          <div className="doc-grid-2col">
            <div className="doc-card">
              <h4>物理的情報 (Physical)</h4>
              <ul className="bullet-list text-sm">
                <li>Lv.Ω/A文書は耐火保管庫(セーフ)にて管理。</li>
                <li>複製・配布は許可制かつ最小限。</li>
                <li>持ち出しは原則禁止。例外時は追跡装置必須。</li>
                <li>廃棄はシュレッダー(クロスカット)、焼却、溶解。</li>
              </ul>
            </div>
            <div className="doc-card">
              <h4>電子的情報 (Digital)</h4>
              <ul className="bullet-list text-sm">
                <li>強力なパスワード、多要素認証によるアクセス制御。</li>
                <li>Lv.Ω/AデータはAES-256以上で暗号化。</li>
                <li>外部記憶媒体(USB等)使用禁止。例外は支給品のみ。</li>
                <li>廃棄はDoD準拠消去または物理破壊。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="doc-section">
          <h2>第4章 施設管理 (FACILITY SECURITY)</h2>
          <p>
            セキュリティ区域 (Zone Ω / A / B / Γ) を設定し、多重認証システムによる入退室管理を実施。<br/>
            Zone Ω/A では所持品検査及び通信デバイス持ち込み禁止。
          </p>
        </section>

        <section className="doc-section">
          <h2>第7章 罰則 (PENALTIES)</h2>
          <div className="doc-alert-box error">
             <p>違反者に対しては、即時解任、立ち入り禁止、並びに刑事告発・損害賠償請求を含む最も厳しい法的措置を講じる。違反事実は永久に記録され、関係各国政府機関へ通知される。</p>
          </div>
        </section>

        <hr className="doc-divider" />

        <section className="doc-section display-only-print">
          <div className="oath-paper">
            <h2>秘密保持誓約書 (OATH OF SECRECY)</h2>
            <p className="oath-text">
              私、<span className="oath-input">____________________</span> は、Codicaプロジェクト秘密保持プロトコル規定の全条項を熟読し、
              その内容を完全に理解した上で、本規程を遵守し、本プロジェクトに関する一切の情報を、
              プロジェクト参加期間中および参加後も永続的に保持することを固く誓約いたします。
              本誓約に違反した場合には、本規程に定めるいかなる措置も甘受いたします。
            </p>
            <div className="oath-signature-area">
              <div>
                <label>Date:</label>
                <div className="oath-input-line"></div>
              </div>
              <div>
                <label>Signature:</label>
                <div className="oath-input-line"></div>
              </div>
            </div>
            <div className="oath-watermark">TOP SECRET</div>
          </div>
        </section>
      </div>

      <div className="doc-footer">
        <div className="auth-stamp">ENFORCED</div>
        <span>INTERNAL SECURITY DEPARTMENT - 2026</span>
      </div>
    </div>
  );
};
