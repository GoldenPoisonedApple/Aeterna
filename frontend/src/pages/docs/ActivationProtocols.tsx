import React from 'react';
import './Documents.css';

export const ActivationProtocols: React.FC = () => {
  return (
    <div className="doc-container">
      <div className="doc-header">
        <div className="doc-meta">
          <span>CLASSIFICATION: ABSOLUTE SECRET (LEVEL Ω)</span>
          <span>DATE: 2026-01-15</span>
          <span>REF: AET-COD-SOP-001 / 001-M</span>
        </div>
        <h1 className="doc-title">ACTIVATION PROTOCOLS</h1>
        <div className="doc-subtitle">発動トリガー計画書 及び カサンドラ・システム規定</div>
      </div>

      <div className="doc-content">
        <section className="doc-section">
          <h2>1. 序文 (PREFACE)</h2>
          <p>
            本計画書は、Aeternaプロジェクトの中核「Codica」の発動を、政治的思惑や希望的観測を排除し、客観的データと論理に基づいて判断するためのフレームワークを定義する。
            <br/>
            <strong>「不可逆性の原則」</strong>に基づき、文明の存続がもはや修復不可能な段階にあると判断された場合にのみ発動される。
          </p>
        </section>

        <hr className="doc-divider" />

        <section className="doc-section">
          <h2>2. カサンドラ・システム (THE CASSANDRA SYSTEM)</h2>
          <div className="doc-block">
             <p><strong>自律的統合危機監視システム</strong></p>
             <p>4つの階層で構成され、世界中の情報をリアルタイムで収集・分析する。</p>
          </div>
          
          <div className="system-diagram">
             <div className="sys-layer">1. データ収集層 (Acquisition) - 感覚器</div>
             <div className="sys-arrow">↓</div>
             <div className="sys-layer">2. データ分析層 (Analysis) - 神経網</div>
             <div className="sys-arrow">↓</div>
             <div className="sys-layer">3. 統合評価層 (Assessment) - 大脳皮質</div>
             <div className="sys-arrow">↓</div>
             <div className="sys-layer final">4. 最終判断層 (Final Judgment) - Aeterna最高評議会</div>
          </div>
        </section>

        <section className="doc-section">
          <h2>3. 危機指標 (CRISIS INDICES)</h2>

          <div className="doc-tabs-container">
            <h3>A. 複合危機指標 「Aeterna Index」</h3>
             <p>以下の4ドメインを統合し、0-100の指数を算出。</p>
             <div className="doc-grid-2col">
                <div className="doc-card small">
                   <h4>I. 地政学・軍事 (GMD)</h4>
                   <ul>
                     <li>核兵器使用確率 (P-Nuke)</li>
                     <li>大国間紛争指数 (GPC)</li>
                     <li>破綻国家指数 (FSI)</li>
                   </ul>
                </div>
                <div className="doc-card small">
                   <h4>II. 地球環境 (PED)</h4>
                   <ul>
                     <li>気候ティッピングポイント接近度</li>
                     <li>生物多様性損失速度 (BLR)</li>
                     <li>成層圏健全性指数 (SSI)</li>
                   </ul>
                </div>
                <div className="doc-card small">
                   <h4>III. 生物学的脅威 (BTD)</h4>
                   <ul>
                     <li>新規高病原性病原体出現頻度</li>
                     <li>予測致死・伝播指数 (PLTI)</li>
                     <li>合成生物学脅威指数</li>
                   </ul>
                </div>
                <div className="doc-card small">
                   <h4>IV. 文明基盤 (CID)</h4>
                   <ul>
                     <li>重要戦略資源枯渇予測</li>
                     <li>グローバル食糧生産安定性</li>
                     <li>科学的合理性崩壊指数</li>
                   </ul>
                </div>
             </div>
          </div>

          <div className="doc-alert-box warning">
             <h3>B. 軍事特化指標 「GMD Prime Index」</h3>
             <p>軍事危機・核戦争シナリオにおける特化指標。</p>
             <ul className="bullet-list">
               <li><strong>指標1: 戦略的核兵器使用確率 (P-SNuke):</strong> ICBM/SLBMの発射熱源探知、NC3システム状況。</li>
               <li><strong>指標2: 戦術的核兵器使用インシデント:</strong> 地震波、空中音波、放射線量の急変。</li>
               <li><strong>指標3: 大国間直接戦闘レベル:</strong> 主要国軍隊の直接交戦規模。</li>
               <li><strong>指標4: LAWS暴走リスク:</strong> AI兵器の制御不能事例。</li>
             </ul>
             <p className="note">※ 他ドメイン(PED, BTD, CID)の危機レベルは「紛争増幅係数 (CAC)」として作用する。</p>
          </div>
        </section>

        <hr className="doc-divider" />

        <section className="doc-section">
          <h2>4. 警戒レベル (ALERT LEVELS)</h2>
          <table className="doc-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Index Criteria</th>
                <th>Action Definitions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="level-0">PHASE 0</td>
                <td>&lt; 50</td>
                <td>平常時監視。定常データ収集。資金準備。</td>
              </tr>
              <tr>
                <td className="level-1">ALERT 1</td>
                <td>50 - 69</td>
                <td><strong>推奨: 黄信号</strong><br/>準備資金5%流動化。自動警告通知。</td>
              </tr>
              <tr>
                <td className="level-2">ALERT 2</td>
                <td>70 - 89</td>
                <td><strong>推奨: 橙信号</strong><br/>実行本部仮設営。The Vault掘削開始。全候補者待機命令(Standby)。</td>
              </tr>
              <tr className="row-critical">
                <td className="level-3">ALERT 3</td>
                <td>&ge; 90</td>
                <td><strong>警告: 赤信号 // RED ALERT</strong><br/>最高評議会による最終判断プロセス即時開始。</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="doc-section">
          <h2>5. 最終判断プロセス (THE FINAL JUDGMENT)</h2>
          
          <div className="protocol-step">
             <h4>STEP 1: トリガー条件 (Trigger)</h4>
             <p>カサンドラ・AIが、99.9%以上の信頼度で「不可逆的崩壊の開始」を認定。<br/>(軍事特化時: 戦略核の相互発射実行確認、または発射不可避判断)</p>
          </div>
          
          <div className="protocol-step">
             <h4>STEP 2: 評議会召集 (Assembly)</h4>
             <p>地下「審議室 (The Chamber)」への緊急召集。外部接続遮断。</p>
          </div>

          <div className="protocol-step">
             <h4>STEP 3: 二重鍵・三分の二承認 (Two-Keys & Two-Thirds)</h4>
             <ol>
               <li><strong>二重鍵認証:</strong> 議長・副議長による物理鍵認証でシステム起動。</li>
               <li><strong>三分の二投票:</strong> 残る評議員による匿名電子投票。2/3以上の賛成で可決。</li>
             </ol>
             <div className="note-box">
                <strong>デッドマン・スイッチ:</strong><br/>
                通常時: 72時間 / 軍事危機時: 24時間。<br/>
                時間内に結論が出ない場合、もしくは機能不全時は「発動中止 (通常)」または「判断不能・最終記録 (軍事)」となる。
             </div>
          </div>

          <div className="protocol-step final">
             <h4>STEP 4: 発動宣言 (Go-Order)</h4>
             <p>総責任者へ「発動命令書」伝達。Codicaプロジェクト Phase 1 移行。</p>
          </div>
        </section>
      </div>

      <div className="doc-footer">
        <div className="auth-stamp-red">TOP SECRET</div>
        <span>AETERNA SECURITY COUNCIL - 2026</span>
      </div>
    </div>
  );
};
