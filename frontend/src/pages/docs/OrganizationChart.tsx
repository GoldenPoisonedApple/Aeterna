import React from 'react';
import './Documents.css';

export const OrganizationChart: React.FC = () => {
  return (
    <div className="doc-container">
      <div className="doc-header">
        <div className="doc-meta">
          <span>CLASSIFICATION: CONFIDENTIAL // INTERNAL USE</span>
          <span>DATE: 2026-01-15</span>
          <span>REF: AETERNA-ORG-STR-V4</span>
        </div>
        <h1 className="doc-title">ORGANIZATION STRUCTURE & PERSONNEL</h1>
        <div className="doc-subtitle">主要構成員名簿及び組織図</div>
      </div>

      <div className="doc-content">
        <p className="doc-intro">
          <strong>フェーズ0 (秘密準備段階) から フェーズ1 (緊急実行段階)</strong><br/>
          本組織図は、Aeternaプロジェクトの指揮命令系統および主要な役割分担を示すものである。
        </p>

        <section className="doc-section">
          <h2>I. Aeterna最高評議会 (Aeterna Supreme Council)</h2>
          <div className="doc-block">
            <p>
              プロジェクト全体の最高意思決定機関。フェーズ0における「Aeterna評議会」が発展・継続する形で、プロジェクトの監督、基本方針の承認、倫理的指導を行う。
            </p>
          </div>
          
          <div className="org-card high-level">
            <div className="org-role">議長 (Chairperson)</div>
            <div className="org-name">Dr. Elias Vance</div>
            <div className="org-desc">哲学者、元国連高等弁務官</div>
          </div>
          <div className="org-card high-level">
            <div className="org-role">副議長 (Vice-Chairperson)</div>
            <div className="org-name">Dr. Lena Hanson</div>
            <div className="org-desc">宇宙物理学者、ノーベル賞受賞者</div>
          </div>

          <div className="org-grid-card">
            <div className="org-card">
              <div className="org-role">評議員 (歴史哲学)</div>
              <div className="org-name">Professor Kenjiro Mori</div>
              <div className="org-desc">比較文化学者、歴史哲学者</div>
            </div>
            <div className="org-card">
              <div className="org-role">評議員 (生命倫理・国際法)</div>
              <div className="org-name">Dr. Aisha Al-Jamil</div>
              <div className="org-desc">生命倫理学者、国際法専門家</div>
            </div>
            <div className="org-card">
              <div className="org-role">評議員 (軍戦略・危機管理)</div>
              <div className="org-name">General (Ret.) Marcus Thorne</div>
              <div className="org-desc">元戦略軍司令官、危機管理専門家</div>
            </div>
            <div className="org-card">
              <div className="org-role">評議員 (国際金融)</div>
              <div className="org-name">Ms. Sofia Rostova</div>
              <div className="org-desc">国際金融専門家</div>
            </div>
            <div className="org-card">
              <div className="org-role">評議員 (環境科学)</div>
              <div className="org-name">Dr. Chukwudi Adebayo</div>
              <div className="org-desc">環境科学者、持続可能性システム論</div>
            </div>
          </div>
        </section>

        <hr className="doc-divider" />

        <section className="doc-section">
          <h2>II. Aeterna実行本部 (Aeterna Execution Headquarters)</h2>
          <div className="doc-block">
             <p>プロジェクト発動後 (フェーズ1) における実働組織。</p>
          </div>

          <div className="org-tree-root">
             <div className="org-card exec-level">
              <div className="org-role">総責任者 (Director-General)</div>
              <div className="org-name">Dr. Seraphina Klein</div>
              <div className="org-desc">システム工学者、超大規模PM専門家</div>
            </div>
             <div className="org-card exec-level">
              <div className="org-role">副総責任者 (Deputy DG)</div>
              <div className="org-name">Mr. Rajan Singh</div>
              <div className="org-desc">元国際機関事務次長、オペレーション管理</div>
            </div>
          </div>

          <div className="org-division-container">
            <div className="org-division">
              <h3>A. 事務局 (Secretariat)</h3>
              <div className="org-card leader">
                <div className="org-role">事務局長 (Chief of Staff)</div>
                <div className="org-name">Ms. Isabelle Moreau</div>
              </div>
              
              <ul className="org-list">
                <li>
                  <strong>1. 総務・渉外部門</strong>
                  <ul>
                    <li>部長: Mr. Carlos Ruiz</li>
                    <li>渉外調整官: Ms. Mei Lin Wang</li>
                  </ul>
                </li>
                <li>
                  <strong>2. 法務・倫理部門</strong>
                  <ul>
                    <li>部長 (法務顧問): Dr. Eleanor Vance</li>
                    <li>倫理審査官: Professor Omar Hassan</li>
                  </ul>
                </li>
                <li>
                  <strong>3. 内部記録・情報管理部門</strong>
                  <ul>
                    <li>部長: Dr. Yuri Volkov</li>
                    <li>コーディネーター: Ms. Hana Kim</li>
                  </ul>
                </li>
                <li>
                  <strong>4. 機密保持・保安部門</strong>
                  <ul>
                    <li>部長 (保安最高責任者): Colonel (Ret.) Viktor Orlov</li>
                    <li>内部監査官: Ms. Anja Schmidt</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="org-division">
              <h3>B. Codicaプロジェクト部門</h3>
               <div className="org-card leader">
                <div className="org-role">部門長 (Head of Division)</div>
                <div className="org-name">Dr. Aris Thorne</div>
                <div className="org-desc">考古学者・情報科学者</div>
              </div>

              <div className="org-sub-division">
                <h4>1. 叡智選定評議会 (CSS)</h4>
                <div className="org-card sub-leader">
                   <div className="org-role">議長</div>
                   <div className="org-name">Prof. Evelyn Reed</div>
                </div>
                <ul className="org-list dense">
                  <li>宇宙・地球: Dr. Rajesh Koothrappali</li>
                  <li>生命・医学: Prof. Lena Dubois</li>
                  <li>物質・エネ: Dr. Kenjiro Tanaka</li>
                  <li>数・論・計: Prof. Sofia Rostova</li>
                  <li>技術・工学: Dr. Omar bin Hassan Al-Saidi</li>
                  <li>歴史・考古: Prof. Isabelle Moreau</li>
                  <li>社会・法学: Dr. Carlos Silva</li>
                  <li>言語・記号: Prof. Anya Petrova</li>
                  <li>哲学・倫理: Dr. Mei Lin Chen</li>
                  <li>芸術・文学: Ms. Gabriella Conti</li>
                  <li>解読ガイド: Dr. David Benioff</li>
                </ul>
              </div>

              <div className="org-sub-division">
                <h4>2. 情報処理・アーカイブ部門</h4>
                <div className="org-card sub-leader">
                   <div className="org-role">部長</div>
                   <div className="org-name">Dr. Jian Li</div>
                </div>
                <ul className="org-list">
                  <li>情報収集・検証チーム (Dr. Samuel Green)</li>
                  <li>翻訳・エンコードチーム (Dr. Elena Petrova / Dr. Niklas Weber)</li>
                  <li>記録媒体製造・記録チーム (Ms. Priya Sharma)</li>
                  <li>アーカイブシステム管理チーム (Mr. Kenji Tanaka)</li>
                </ul>
              </div>
              
              <div className="org-sub-division-simple">
                 <h4>その他の部門</h4>
                 <ul>
                   <li>3. 施設工学部門 (Dr. Astrid Nielsen)</li>
                   <li>4. 技術開発・研究部門</li>
                   <li>5. ロジスティクス・資源管理部門</li>
                   <li>6. 医療・心理支援部門</li>
                 </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="doc-footer">
        <div className="auth-stamp">CONFIDENTIAL</div>
        <span>AETERNA HUMAN RESOURCES - V4.0</span>
      </div>
    </div>
  );
};
