import React from 'react';
import '../Documents.css';

export const CodicaCharter: React.FC = () => {
  return (
    <div className="document-container">
      <div className="doc-header">
        <h1>CODICA PROJECT CHARTER</h1>
        <div className="doc-meta">
          <span>DOC ID: CHARTER-1945-2025</span>
          <span>VERSION: 19.3.2</span>
          <span>LAST UPDATED: 2025/05/22</span>
        </div>
      </div>

      <div className="doc-section">
        <h2>1. プロジェクト基本情報 (PROJECT INFORMATION)</h2>
        <dl className="data-list">
          <dt>プロジェクト名</dt>
          <dd>Codica</dd>
          <dt>上位計画</dt>
          <dd>Aeterna プロジェクト</dd>
          <dt>スポンサー</dt>
          <dd>Aeterna評議会 (フェーズ0) / Aeterna実行本部 (フェーズ1)</dd>
          <dt>PM</dt>
          <dd>Seraphina Klein</dd>
          <dt>作成日</dt>
          <dd>1945/08/07</dd>
          <dt>最終更新日</dt>
          <dd>2025/05/22</dd>
        </dl>
      </div>

      <div className="doc-section">
        <h2>2. プロジェクトの目的・正当性</h2>
        
        <h3>2.1. 目的</h3>
        <p>
          人類の「知」の精髄を、文明が途絶えた後、数万年から数百万年、あるいはそれ以上の遠未来において、いかなる形態の知的生命体によっても発見・解読・理解され、活用される可能性を最大化する形で、超長期的に安全かつ確実に保存すること。
        </p>

        <h3>2.2. 正当性・必要性</h3>
        <p>
          地球規模の危機が現実的脅威となり、人類文明の存続が危ぶまれる状況において、我々が築き上げてきた知識、経験、文化、そして過ちの記録を未来へ継承することは、人類という種が宇宙に対して果たしうる最後の、そして最も重要な責務の一つである。
        </p>
        <p>
          この遺産は、未来のいかなる知的生命体にとっても、新たな文明の再建、発展、あるいは我々の過ちを繰り返さないための貴重な教訓となる可能性がある。本プロジェクトは、その可能性を追求するための、現時点で考えうる最善かつ唯一の手段である。
        </p>

        <h3>2.3. 秘匿性</h3>
        <p>
          本プロジェクトは、その準備段階から実行、完了に至るまで、<strong>最高度の機密を保持して遂行される。</strong>
          これは、保存される情報が「パンドラの箱」となるリスク（悪用、誤解、社会的混乱など）や、プロジェクト自体への国内外からの批判・反対・妨害活動を未然に防ぎ、計画の確実な達成を期すための、極めて高度な政治的判断に基づく必須要件である。
        </p>
      </div>

      <div className="doc-section">
        <h2>3. プロジェクト目標 (測定可能な成果)</h2>
        
        <h3>成果物</h3>
        <ul className="bullet-list">
          <li><strong>Codicaアーカイブ:</strong> 選定された人類の「知」の情報を、指定された超長期保存媒体（NMED, QFLS, SSET等）に記録し、階層的に構造化された情報集合体。</li>
          <li><strong>保管施設「The Vault」:</strong> Codicaアーカイブを超長期的に保護するための、指定された立地条件を満たす地下または特殊環境施設。多層防御構造、受動的環境制御システムを備える。</li>
          <li><strong>解読プロトコル:</strong> 未来の発見者がアーカイブ情報を解読するための導入情報、記号体系解説、言語対照表、読み取り装置の設計図等を含む情報群。</li>
          <li><strong>プロジェクト完了報告書 (内部記録用):</strong> プロジェクトの全工程、意思決定プロセス、技術的詳細、参加者リスト、倫理的考察などを記録した文書。これもアーカイブの一部として保存される。</li>
        </ul>

        <h3>成功基準</h3>
        <ul className="bullet-list">
          <li>選定された「知」の主要部分が、指定された媒体に、エラー率許容範囲内で完全に記録されること。</li>
          <li>保管施設「The Vault」が、設計仕様通りの耐久性、安全性、環境維持能力を持って建設・封印されること。</li>
          <li>解読プロトコルが、論理的かつ段階的に情報を開示し、未来の発見者による解読可能性を最大化するよう設計・実装されること。</li>
          <li>プロジェクトが、指定された期間（発動後100年以内）および予算（初期確保資金5000億ドル＋継続的提供資金）の範囲内で、かつ絶対的機密を保持したまま完了すること。</li>
          <li>アーカイブが、予測される数百万年以上の期間、物理的・情報的に安定して存続する蓋然性が極めて高いと評価されること。</li>
        </ul>
      </div>

      <div className="doc-section">
        <h2>4. プロジェクトの範囲</h2>
        
        <h3>4.2. プロジェクトに含まれる作業</h3>
        <div className="sub-project-card">
          <h4>フェーズ0 (秘密準備)</h4>
          <p>コア計画策定、情報選定基礎、技術開発、資金準備、協力者ネットワーク構築、発動トリガー設定、通知システム開発、施設候補地調査。</p>
        </div>
        <div className="sub-project-card highlight">
          <h4>フェーズ1 (緊急実行 - 100年間)</h4>
          <ul className="bullet-list">
            <li>発動通知、組織設立、施設建設。</li>
            <li>全世界からの情報収集、選別、翻訳、エンコード、媒体への記録。</li>
            <li>保存媒体の量産、施設への搬入・設置。</li>
            <li>アーカイブ全体の最終検証、施設の段階的封印。</li>
            <li>（オプション）限定的マーカー設置。</li>
            <li>プロジェクト完了記録作成。</li>
          </ul>
        </div>

        <h3>4.3. プロジェクトに含まれない作業 (範囲外)</h3>
        <ul className="bullet-list" style={{ color: '#aaa' }}>
          <li>プロジェクト完了後のアーカイブの能動的な維持管理・監視。</li>
          <li>アーカイブ発見後の、未来の発見者との直接的なコミュニケーション。</li>
          <li>Aeternaプロジェクト内の他サブプロジェクト（Genoma, Expressa等）の直接的な実行管理（ただし、連携は密に行う）。</li>
          <li>プロジェクトの存在を公にすること（絶対秘匿の原則）。</li>
        </ul>
      </div>

      <div className="doc-section">
        <h2>5. 制約・前提条件</h2>
        <dl className="data-list">
          <dt>期間</dt>
          <dd>発動から100年以内</dd>
          <dt>予算</dt>
          <dd>初期確保資金5000億ドル ＋ 各国からの継続的裏資金</dd>
          <dt>絶対秘匿</dt>
          <dd>全期間を通じて最高度の機密を維持しなければならない。</dd>
        </dl>
      </div>

      <div className="doc-section">
        <h2>7. ステークホルダー</h2>
        <ul className="bullet-list">
          <li><strong>Aeterna評議会 / 実行本部</strong></li>
          <li><strong>プロジェクトマネージャー:</strong> Seraphina Klein</li>
          <li><strong>叡智選定評議会 (CSS)</strong></li>
          <li><strong>技術チーム / 情報処理チーム</strong></li>
          <li><strong>協力者:</strong> 各国政府首脳・軍部・情報機関 / 各分野の最高権威者</li>
          <li><strong>究極の受益者:</strong> 未来の発見者</li>
        </ul>
      </div>

      <div className="doc-section">
        <h2>8. リスク (初期評価)</h2>
        <ul className="bullet-list" style={{ color: '#ff5555' }}>
          <li>機密漏洩リスク</li>
          <li>技術的失敗リスク</li>
          <li>資源不足リスク / 時間的制約リスク</li>
          <li>自然的・人為的災害リスク</li>
          <li>内部対立・士気低下リスク</li>
          <li>情報選定の偏りリスク</li>
          <li>「パンドラの箱」化リスク</li>
          <li>発見されないリスク</li>
        </ul>
      </div>

      <div className="doc-footer" style={{ borderTop: '2px solid #555', paddingTop: '1rem', marginTop: '3rem' }}>
        <h3>承認</h3>
        <p>本プロジェクト憲章は、Aeterna評議会によって承認され、Codicaプロジェクトの正式な開始と、フェーズ0の活動継続、およびフェーズ1への移行準備を許可するものである。</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <div>
            <strong>承認者:</strong> Aeterna評議会 代表 Elias Vance<br/>
            <strong>承認日:</strong> 2025/05/22
          </div>
          <div style={{ border: '2px solid #ff3333', color: '#ff3333', padding: '0.2rem 1rem', transform: 'rotate(-5deg)', fontWeight: 'bold', fontSize: '1.2rem' }}>
            APPROVED
          </div>
        </div>
      </div>
    </div>
  );
};
