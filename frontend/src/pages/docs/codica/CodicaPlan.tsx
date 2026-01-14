import React from 'react';
import '../Documents.css';

export const CodicaPlan: React.FC = () => {
  return (
    <div className="doc-container">
      <div className="doc-header">
        <div className="doc-meta">
          <span>CLASSIFICATION: TOP SECRET // CODICA-EYES ONLY</span>
          <span>DATE: 2026-01-15</span>
          <span>REF: AETERNA-CODICA-PLAN-V2</span>
        </div>
        <h1 className="doc-title">CODICA PROJECT PLAN</h1>
        <div className="doc-subtitle">拡張版計画書 - FINAL DRAFT</div>
      </div>

      <div className="doc-content">
        <section className="doc-section">
          <h2>1. プロジェクト概要</h2>
          <div className="doc-grid-2col">
            <div className="doc-field">
              <label>プロジェクト名</label>
              <div className="doc-value">Codica (コディカ)</div>
            </div>
            <div className="doc-field">
              <label>上位プロジェクト</label>
              <div className="doc-value">Aeterna プロジェクト</div>
            </div>
          </div>

          <div className="doc-block">
            <h3>1.3. プロジェクトの使命</h3>
            <p>
              人類の「知」の精髄を、文明が途絶えた後、数万年から数百万年、あるいはそれ以上の遠未来において、いかなる形態の知的生命体によっても発見・解読・理解され、活用される可能性を最大化する形で保存すること。これは、未来の文明への単なる贈り物に留まらず、宇宙における生命の多様性の中で、人類という種が到達した知性の高みと、その探求の軌跡を示す存在証明でもある。
            </p>
          </div>

          <div className="doc-alert-box">
            <h3>1.3.1. 緊急発動・秘匿プロトコル</h3>
            <p>
              本計画は、地球規模の危機（世界終末時計が残り60秒を切り、事前に設定された複数の客観的指標に基づく複合的判断）が現実的脅威として認識された時点で、秘密裏に準備された計画を一斉に発動させることを前提とする。
            </p>
            <p className="highlight-text">
              <strong>計画の存在及び実行は、発動の瞬間から完了に至るまで、ごく一部の立案者および事前内諾を得た中核的協力者を除き、完全に秘匿される。これは、保存される情報が「パンドラの箱」となるリスクや、プロジェクト自体への批判・妨害工作といったリスクを最大限に回避するための、極めて高度な政治的判断に基づく措置である。</strong>
            </p>
          </div>

          <div className="doc-block">
            <h3>1.4. 基本理念</h3>
            <ul className="doc-list-styled">
              <li>
                <strong>永続性 (Perdurability):</strong> 考えうるあらゆる時間スケールにおける情報の物理的保存を追求する。
              </li>
              <li>
                <strong>普遍性 (Universality):</strong> 特定の文化や言語に依存せず、物理法則や数学的論理を基盤とした情報伝達を目指す。
              </li>
              <li>
                <strong>階層性 (Hierarchy):</strong> ピクトグラムから専門的詳細情報まで、段階的に理解可能な構造とする。
              </li>
              <li>
                <strong>自己完結性 (Self-Containment):</strong> 解読に必要な知識や読み取り装置の設計図自体をアーカイブに含める。
              </li>
              <li>
                <strong>受動的安全性 (Passive Safety):</strong> 外部からの破壊や自然災害に対し、最大限の物理的・情報的堅牢性を有する設計。
              </li>
              <li>
                <strong>緊急性・絶対秘匿性 (Urgency & Absolute Secrecy):</strong> 最大限の機密を保持しつつ、計画を断行する。
              </li>
            </ul>
          </div>
        </section>

        <hr className="doc-divider" />

        <section className="doc-section">
          <h2>2. 保存対象「知」の選定</h2>
          <p className="doc-intro">
            国際的かつ学際的な恒久委員会「叡智選定評議会 (CSS)」により選定される。
          </p>

          <div className="doc-grid-card">
            <div className="doc-card">
              <h4>I. 宇宙と地球</h4>
              <p>太陽系データ、地球物理特性、生命誕生仮説、宇宙論、天文学、地球外生命探査史。</p>
            </div>
            <div className="doc-card">
              <h4>II. 生命</h4>
              <p>DNA/RNA構造、進化メカニズム、細胞生物学、解剖生理学、医学知識、生態学、脳科学。</p>
            </div>
            <div className="doc-card">
              <h4>III. 物質とエネルギー</h4>
              <p>原子構造、化学結合、物理法則(ニュートン/量子/相対性)、エネルギー変換、物性物理。</p>
            </div>
            <div className="doc-card">
              <h4>IV. 数学と論理</h4>
              <p>算術、幾何、代数、解析、論理学、計算理論、暗号理論、未解決問題。</p>
            </div>
            <div className="doc-card">
              <h4>V. 技術</h4>
              <p>道具史、農業、建築、情報通信、材料科学、輸送技術、計測技術。</p>
            </div>
            <div className="doc-card">
              <h4>VI. 歴史と社会</h4>
              <p>世界史、社会構造、経済システム、法体系、政治思想、戦争と平和、文化人類学。</p>
            </div>
            <div className="doc-card">
              <h4>VII. 言語と記号</h4>
              <p>主要言語、比較言語学、文字体系、記号論、人口言語、ピクトグラム。</p>
            </div>
            <div className="doc-card">
              <h4>VIII. 哲学と思想</h4>
              <p>哲学的概念、東西哲学史、倫理学、科学哲学、認識論、美学。</p>
            </div>
            <div className="doc-card emphasize">
              <h4>IX. 解読ガイド</h4>
              <p>メタ情報、基本物理定数、単位系、視覚/聴覚情報、倫理指針、発見者への問いかけ。</p>
            </div>
          </div>
        </section>

        <hr className="doc-divider" />

        <section className="doc-section">
          <h2>3. 保存媒体と記録方法</h2>
          <h3>3.2. 主要保存媒体</h3>
          
          <div className="media-spec-container">
            <div className="media-spec">
              <h4>TYPE-A: NMED</h4>
              <div className="spec-details">
                <span className="spec-label">名称:</span> ニッケル・マイクロエッチング・ディスク<br/>
                <span className="spec-label">素材:</span> 純度99.99%以上高純度ニッケル合金 + DLC保護膜<br/>
                <span className="spec-label">寿命:</span> 数百万年<br/>
                <span className="spec-label">用途:</span> 最重要情報、図像、ピクトグラム、ロゼッタストーン
              </div>
            </div>

            <div className="media-spec">
              <h4>TYPE-B: QFLS</h4>
              <div className="spec-details">
                <span className="spec-label">名称:</span> 石英ガラス・フェムト秒レーザー・ストレージ<br/>
                <span className="spec-label">素材:</span> 合成石英ガラス (不純物ppbレベル)<br/>
                <span className="spec-label">寿命:</span> 数十億年 (理論値)<br/>
                <span className="spec-label">用途:</span> 大容量デジタルデータ、全ゲノム、シミュレーション
              </div>
            </div>

            <div className="media-spec">
              <h4>TYPE-C: SSET</h4>
              <div className="spec-details">
                <span className="spec-label">名称:</span> 合成サファイア・エングレービング・タブレット<br/>
                <span className="spec-label">素材:</span> 単結晶サファイア (Al2O3)<br/>
                <span className="spec-label">寿命:</span> 数百万年以上<br/>
                <span className="spec-label">用途:</span> 導入情報、シンボリックメッセージ、肉眼判読可能データ
              </div>
            </div>

            <div className="media-spec experimental">
              <h4>TYPE-D: DNA STORAGE</h4>
              <div className="spec-details">
                <span className="spec-label">状態:</span> 研究開発段階 / 限定的採用<br/>
                <span className="spec-label">特徴:</span> 極高密度 (エクサバイト級/g)<br/>
                <span className="spec-label">用途:</span> 生物学的情報の冗長バックアップ
              </div>
            </div>
          </div>

          <h3>3.3. 記録フォーマット階層</h3>
          <ul className="layer-list">
            <li><strong>LEVEL 0 (The Rosetta Layer):</strong> 直感的・視覚的導入 (SSET主体)</li>
            <li><strong>LEVEL 1 (The Primer Layer):</strong> 基礎科学・言語対照表 (NMED/SSET)</li>
            <li><strong>LEVEL 2 (The Core Knowledge Layer):</strong> 詳細テキスト・データ (NMED/QFLS)</li>
            <li><strong>LEVEL 3 (The Deep Archive Layer):</strong> 完全版デジタルアーカイブ (QFLS)</li>
          </ul>
        </section>

        <hr className="doc-divider" />

        <section className="doc-section">
          <h2>4. 保管施設「The Vault (ザ・ヴォールト)」</h2>
          
          <div className="vault-schematic">
            <div className="vault-layer outer">
              <span className="layer-name">OUTER SHELL (AEGIS)</span>
              <span className="layer-desc">偽装岩盤 / 特殊コンクリート / 耐熱金属複合装甲</span>
            </div>
            <div className="vault-layer mid">
              <span className="layer-name">BUFFER ZONE (LABYRINTH)</span>
              <span className="layer-desc">物理的迷路 / 偽装通路 / 不活性ガス充填</span>
            </div>
            <div className="vault-layer inner">
              <span className="layer-name">INNER CORE (SANCTUARY)</span>
              <span className="layer-desc">完全気密 / アメリシウム電源 / NMED・QFLS保管庫</span>
            </div>
          </div>

          <div className="doc-block">
            <h3>4.1. 立地選定基準</h3>
            <p>地質学的超安定性、極限的自然災害からの隔離、人間活動からの完全隔離、資源的価値の極低性。</p>
            <p><strong>候補地:</strong> 南極氷床下、シベリア/カナダ楯状地、深海平原地下、月面地下(L4/L5)</p>
          </div>
        </section>
      </div>

      <div className="doc-footer">
        <div className="auth-stamp">APPROVED</div>
        <span>CODICA PROJECT COMMITTEE - 2026</span>
      </div>
    </div>
  );
};
