import React from 'react';
import './Documents.css';

export const FinalRecordPackage: React.FC = () => {
  return (
    <div className="doc-container">
      <div className="doc-header">
        <div className="doc-meta">
          <span>CLASSIFICATION: AUTOMATED // CONTINGENCY</span>
          <span>TRIGGER: DEADMAN SWITCH</span>
          <span>REF: AET-REC-FINAL-000</span>
        </div>
        <h1 className="doc-title">THE FINAL RECORD PACKAGE</h1>
        <div className="doc-subtitle">最終記録パッケージ - 敗北と躊躇の記録</div>
      </div>

      <div className="doc-content">
        <div className="doc-intro-box">
          <p>
            本パッケージは、デッドマン・スイッチが作動し、評議会による承認が時間切れ(Time-Out)となった場合にのみ生成される。
            人類の運命を決定すべき指導者たちが、その責務を果たせず沈黙した事実そのものを遺すための、自動生成アーカイブである。
          </p>
        </div>

        <section className="doc-section">
          <h2>生成条件 (TRIGGER CONDITION)</h2>
          <div className="doc-block">
            <p><strong>IF:</strong> デッドマン・スイッチ作動 (W-Hour) から <strong>T+120min</strong> 経過</p>
            <p><strong>AND:</strong> 評議会による「Go-Order (計画発動)」および「Abort (計画中止)」のいずれの決議もなされていない場合。</p>
            <p className="text-accent"><strong>THEN:</strong> プロジェクトAeternaは「不履行(Default)」と判定され、本パッケージがVaultの最終セクタに追記され、物理封鎖が行われる。</p>
          </div>
        </section>

        <section className="doc-section">
          <h2>パッケージ構成 (CONTENTS)</h2>
          
          <div className="doc-card">
            <h4>1. 最終状況ログ (The Final Log)</h4>
            <div className="doc-block">
               カサンドラ・システムが捕捉した「世界が終わる瞬間」の完全なスナップショット。
               <ul className="bullet-list text-sm">
                 <li>全弾道ミサイルの発射・着弾地点予測データ</li>
                 <li>GMD Prime Index 最終計測値</li>
                 <li>主要都市における放射線量、生物化学兵器検知データ</li>
                 <li>世界通信網の途絶マップ</li>
               </ul>
            </div>
          </div>

          <div className="doc-card">
            <h4>2. 評議会の膠着記録 (The Council's Stalemate)</h4>
            <div className="doc-block">
               審議室(The Chamber)における最後の120分間の全音声・映像記録。
               <ul className="bullet-list text-sm">
                 <li>誰が発動に賛成し、誰が反対したか</li>
                 <li>希望的観測、恐怖、倫理的葛藤の克明な記録</li>
                 <li>なぜ結論に至れなかったのかの証明</li>
               </ul>
            </div>
          </div>

          <div className="doc-card">
             <h4>3. 判断不能の碑文 (The Epitaph of Indecision)</h4>
             <div className="quote-box">
               <p>
                 "我々は、人類の知性の限界に直面した。未来を託すための最後の決断を下すことができず、時間切れとなった。<br/>
                 この記録は、我々が最後の瞬間に示した躊躇と失敗の証である。<br/>
                 未来の発見者よ、知性とは、時に決断する勇気そのものであることを知ってほしい。"
               </p>
             </div>
          </div>
        </section>

        <hr className="doc-divider" />

        <div className="doc-footer">
           <div className="doc-block text-sm">
             <strong>OBJECTIVE:</strong> プロジェクトの成功ではなく、「なぜ我々は失敗したのか」という究極の教訓を教えること。<br/>
             Codicaは単なる知識の保存庫ではなく、人類という種の成功と失敗の全てを記録する叙事詩である。
           </div>
           <div className="auth-stamp" style={{borderColor: 'red', color: 'red'}}>AUTOMATED</div>
        </div>
      </div>
    </div>
  );
};
