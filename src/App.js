import React, { useState } from 'react';

const machineData = {
  // 🤡 ジャグラーシリーズ
  'SアイムジャグラーEX-TP': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'Sファンキージャグラー2KT': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 97.0 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 98.2 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 99.8 },
    4: { big: 1 / 265.3, reg: 1 / 312.1, payout: 101.6 },
    5: { big: 1 / 258.0, reg: 1 / 283.7, payout: 103.5 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 108.4 },
  },
  'SマイジャグラーVKD': {
    1: { big: 1 / 273.1, reg: 1 / 431.2, payout: 97.0 },
    2: { big: 1 / 271.9, reg: 1 / 364.1, payout: 98.0 },
    3: { big: 1 / 273.1, reg: 1 / 318.1, payout: 99.9 },
    4: { big: 1 / 264.3, reg: 1 / 292.6, payout: 102.8 },
    5: { big: 1 / 258.0, reg: 1 / 273.1, payout: 105.3 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 109.4 },
  },
  'SハッピージャグラーVⅢEA': {
    1: { big: 1 / 273.1, reg: 1 / 409.6, payout: 97.0 },
    2: { big: 1 / 271.9, reg: 1 / 336.1, payout: 98.2 },
    3: { big: 1 / 273.1, reg: 1 / 299.3, payout: 100.2 },
    4: { big: 1 / 264.3, reg: 1 / 273.1, payout: 102.5 },
    5: { big: 1 / 258.0, reg: 1 / 256.0, payout: 104.7 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 108.4 },
  },
  'Sゴーゴージャグラー3KA': {
    1: { big: 1 / 273.1, reg: 1 / 409.6, payout: 97.0 },
    2: { big: 1 / 271.9, reg: 1 / 336.1, payout: 98.0 },
    3: { big: 1 / 273.1, reg: 1 / 299.3, payout: 99.8 },
    4: { big: 1 / 264.3, reg: 1 / 273.1, payout: 102.0 },
    5: { big: 1 / 258.0, reg: 1 / 256.0, payout: 104.3 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 108.0 },
  },
  'SジャグラーガールズSS-KH': {
    1: { big: 1 / 287.4, reg: 1 / 431.2, payout: 96.1 },
    2: { big: 1 / 282.5, reg: 1 / 364.1, payout: 97.8 },
    3: { big: 1 / 273.1, reg: 1 / 318.1, payout: 99.5 },
    4: { big: 1 / 264.3, reg: 1 / 292.6, payout: 102.0 },
    5: { big: 1 / 258.0, reg: 1 / 273.1, payout: 104.3 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 108.3 },
  },
  'SミスタージャグラーKK': {
    1: { big: 1 / 287.4, reg: 1 / 431.2, payout: 96.5 },
    2: { big: 1 / 282.5, reg: 1 / 364.1, payout: 97.7 },
    3: { big: 1 / 273.1, reg: 1 / 318.1, payout: 99.7 },
    4: { big: 1 / 264.3, reg: 1 / 292.6, payout: 102.2 },
    5: { big: 1 / 258.0, reg: 1 / 273.1, payout: 104.7 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 108.3 },
  },
  'SウルトラミラクルジャグラーKT': {
    1: { big: 1 / 287.4, reg: 1 / 455.1, payout: 96.1 },
    2: { big: 1 / 282.5, reg: 1 / 399.6, payout: 97.6 },
    3: { big: 1 / 273.1, reg: 1 / 336.1, payout: 99.4 },
    4: { big: 1 / 264.3, reg: 1 / 299.3, payout: 102.2 },
    5: { big: 1 / 258.0, reg: 1 / 273.1, payout: 104.6 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 108.2 },
  }
  },

  // 🌺 ハナハナシリーズ（6機種）
  'LスターハナハナMX': {
    1: { big: 1 / 270, reg: 1 / 387, payout: 97.0 },
    2: { big: 1 / 262, reg: 1 / 354, payout: 99.0 },
    3: { big: 1 / 252, reg: 1 / 322, payout: 101.0 },
    4: { big: 1 / 240, reg: 1 / 293, payout: 104.0 },
    5: { big: 1 / 229, reg: 1 / 267, payout: 107.0 },
    6: { big: 1 / 218, reg: 1 / 242, payout: 110.0 },
  },
  'L超華祭PB': {
    1: { big: 1 / 274, reg: 1 / 384, payout: 97.9 },
    2: { big: 1 / 266, reg: 1 / 364, payout: 99.8 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 248, reg: 1 / 331, payout: 103.3 },
    5: { big: 1 / 234, reg: 1 / 304, payout: 106.3 },
    6: { big: 1 / 221, reg: 1 / 279, payout: 110.0 },
  },
  'Sドラゴンハナハナ〜閃光〜DX': {
    1: { big: 1 / 256, reg: 1 / 642, payout: 97.0 },
    2: { big: 1 / 246, reg: 1 / 585, payout: 99.0 },
    3: { big: 1 / 235, reg: 1 / 537, payout: 101.0 },
    4: { big: 1 / 224, reg: 1 / 489, payout: 104.0 },
    5: { big: 1 / 212, reg: 1 / 442, payout: 107.0 },
    6: { big: 1 / 199, reg: 1 / 399, payout: 110.0 },
  },
  'Lドラゴンハナハナ〜閃光〜JP': {
    1: { big: 1 / 256, reg: 1 / 642, payout: 97.0 },
    2: { big: 1 / 246, reg: 1 / 585, payout: 99.0 },
    3: { big: 1 / 235, reg: 1 / 537, payout: 101.0 },
    4: { big: 1 / 224, reg: 1 / 489, payout: 104.0 },
    5: { big: 1 / 212, reg: 1 / 442, payout: 107.0 },
    6: { big: 1 / 199, reg: 1 / 399, payout: 110.0 },
  },
  'Sドラゴンハナハナ〜閃光〜SP-30': {
    1: { big: 1 / 256, reg: 1 / 642, payout: 97.0 },
    2: { big: 1 / 246, reg: 1 / 585, payout: 99.0 },
    3: { big: 1 / 235, reg: 1 / 537, payout: 101.0 },
    4: { big: 1 / 224, reg: 1 / 489, payout: 104.0 },
    5: { big: 1 / 212, reg: 1 / 442, payout: 107.0 },
    6: { big: 1 / 199, reg: 1 / 399, payout: 110.0 },
  },
  'SキングハナハナSP-30': {
    1: { big: 1 / 292, reg: 1 / 489, payout: 97.0 },
    2: { big: 1 / 280, reg: 1 / 452, payout: 99.0 },
    3: { big: 1 / 268, reg: 1 / 420, payout: 101.0 },
    4: { big: 1 / 257, reg: 1 / 390, payout: 104.0 },
    5: { big: 1 / 244, reg: 1 / 360, payout: 107.0 },
    6: { big: 1 / 232, reg: 1 / 332, payout: 110.0 },
  },
 

  // 📀 ディスクアップシリーズ（2機種）
  'L DISCUPウルトラリミックス XR': {
    1: { big: 1 / 287.2, reg: 1 / 495.3, payout: 99.3 },
    2: { big: 1 / 284.3, reg: 1 / 477.2, payout: 100.2 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    5: { big: 1 / 273.8, reg: 1 / 398.6, payout: 103.6 },
    6: { big: 1 / 260.9, reg: 1 / 334.1, payout: 107.7 }
  },
  'S ディスクアップ2 ZF': {
    1: { big: 1 / 287.4, reg: 1 / 496.5, payout: 99.4 },
    2: { big: 1 / 286.2, reg: 1 / 436.9, payout: 101.2 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    5: { big: 1 / 278.9, reg: 1 / 422.8, payout: 104.2 },
    6: { big: 1 / 276.5, reg: 1 / 397.2, payout: 105.3 }
  },

  // 🟡 ユニバ系（6機種）
  'S/ファミスタ回胴版!!/FB': {
    1: { big: 1 / 303.4, reg: 1 / 455.1, payout: 98.3 },
    2: { big: 1 / 302.0, reg: 1 / 414.8, payout: 99.7 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    5: { big: 1 / 300.6, reg: 1 / 381.0, payout: 102.3 },
    6: { big: 1 / 299.3, reg: 1 / 356.2, payout: 104.2 }
  },
  'S/クランキークレスト/CR': {
    1: { big: 1 / 275.4, reg: 1 / 407.1, payout: 100.5 },
    2: { big: 1 / 275.4, reg: 1 / 370.3, payout: 102.0 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    5: { big: 1 / 262.1, reg: 1 / 336.1, payout: 105.2 },
    6: { big: 1 / 254.0, reg: 1 / 304.8, payout: 108.0 }
  },
  'S/バーサスリヴァイズ/HS': {
    1: { big: 1 / 292.6, reg: 1 / 374.5, payout: 99.3 },
    2: { big: 1 / 284.9, reg: 1 / 341.3, payout: 101.1 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    5: { big: 1 / 275.4, reg: 1 / 319.7, payout: 103.5 },
    6: { big: 1 / 264.3, reg: 1 / 292.6, payout: 105.8 }
  },
  'S/ワードオブライツⅡ/WF': {
    1: { big: 1 / 224.4, reg: 1 / 0, payout: 98.2 },
    2: { big: 1 / 208.7, reg: 1 / 0, payout: 99.9 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    5: { big: 1 / 193.9, reg: 1 / 0, payout: 102.9 },
    6: { big: 1 / 179.1, reg: 1 / 0, payout: 106.1 }
  },
  'S/ニューゲッターマウス/CG': {
    1: { big: 1 / 240.9, reg: 1 / 252.1, payout: 97.7 },
    2: { big: 1 / 234.1, reg: 1 / 240.1, payout: 99.4 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    5: { big: 1 / 215.6, reg: 1 / 221.4, payout: 103.7 },
    6: { big: 1 / 199.2, reg: 1 / 199.2, payout: 108.2 }
  },
  'S/新ハナビR/HA': {
    1: { big: 1 / 277.7, reg: 1 / 356.2, payout: 98.1 },
    2: { big: 1 / 268.6, reg: 1 / 331.0, payout: 99.9 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    5: { big: 1 / 256.0, reg: 1 / 306.2, payout: 102.3 },
    6: { big: 1 / 248.2, reg: 1 / 280.1, payout: 104.6 }
  },

  // 🐸 山佐系（4機種）
  'SニューパルサーSP4SLE8': {
    1: { big: 1 / 287.4, reg: 1 / 344.9, payout: 97.8 },
    2: { big: 1 / 280.1, reg: 1 / 336.1, payout: 98.8 },
    3: { big: 1 / 273.1, reg: 1 / 327.7, payout: 99.9 },
    4: { big: 1 / 260.1, reg: 1 / 312.1, payout: 102.5 },
    5: { big: 1 / 248.2, reg: 1 / 297.9, payout: 105.0 },
    6: { big: 1 / 237.4, reg: 1 / 284.9, payout: 108.3 }
  },
  'SハイパーラッシュSLC8': {
    1: { big: 1 / 259.3, reg: 1 / 527.3, payout: 98.9 },
    2: { big: 1 / 254.1, reg: 1 / 511.8, payout: 99.9 },
    3: { big: 1 / 243.6, reg: 1 / 489.0, payout: 102.0 },
    4: { big: 1 / 233.9, reg: 1 / 468.6, payout: 104.0 },
    5: { big: 1 / 225.7, reg: 1 / 450.1, payout: 105.9 },
    6: { big: 1 / 216.5, reg: 1 / 430.5, payout: 108.1 }
  },
  'SピンクパンサーSPXX': {
    1: { big: 1 / 278.9, reg: 1 / 374.5, payout: 103.2 },
    2: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    3: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    4: { big: 1 / 277.7, reg: 1 / 358.1, payout: 104.4 },
    5: { big: 1 / 275.4, reg: 1 / 334.4, payout: 105.6 },
    6: { big: 1 / 274.2, reg: 1 / 307.7, payout: 107.3 }
  },
  'SニューパルサーSP3CC': {
    1: { big: 1 / 295.2, reg: 1 / 428.3, payout: 97.1 },
    2: { big: 1 / 293.9, reg: 1 / 414.8, payout: 98.3 },
    3: { big: 1 / 292.6, reg: 1 / 385.5, payout: 100.0 },
    4: { big: 1 / 280.1, reg: 1 / 306.2, payout: 104.1 },
    5: { big: 1 / 0, reg: 1 / 0, payout: 0.0 },
    6: { big: 1 / 267.5, reg: 1 / 267.5, payout: 108.1 }
  }
};

const App = () => {
  const [selectedMachine, setSelectedMachine] = useState('SアイムジャグラーEX-TP');
  const [searchText, setSearchText] = useState('');
  const [games, setGames] = useState('');
  const [big, setBig] = useState('');
  const [reg, setReg] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    const g = parseInt(games);
    const b = parseInt(big);
    const r = parseInt(reg);
    if (g <= 0 || b < 0 || r < 0) return;
    const actualBigProb = g / b;
    const actualRegProb = g / r;
    const actualTotalProb = g / (b + r);
    const payout = ((b * 312 + r * 104) / g) * 100;
    setResult({ actualBigProb, actualRegProb, actualTotalProb, payout });
  };

  return (
    <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', fontFamily: 'sans-serif', maxWidth: '400px', margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem' }}>理論 vs 現実</h1>
        <h2 style={{ fontWeight: 'normal', fontStyle: 'italic', fontSize: '1rem' }}>
          -あなたの判断は正しいか？-<br />スロットAタイプver
        </h2>
      </div>

      <div style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '10px', borderRadius: '6px' }}>
        <label>機種名：</label>
        <input
          type="text"
          placeholder="機種名を検索..."
          style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '6px', width: '100%', fontSize: '1rem' }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          value={selectedMachine}
          onChange={(e) => setSelectedMachine(e.target.value)}
          style={{ width: '100%', padding: '8px', fontSize: '1rem', backgroundColor: '#fefefe', border: '1px solid #aaa', borderRadius: '4px', marginTop: '0.5rem' }}
        >
          {Object.keys(machineData)
            .filter(name => name.includes(searchText))
            .map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
        </select>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px', marginBottom: '10px' }}>
        回転数：<input type="number" style={{ width: '100%', fontSize: '1rem' }} value={games} onChange={e => setGames(e.target.value)} />
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px', marginBottom: '10px' }}>
        BIG回数：<input type="number" style={{ width: '100%', fontSize: '1rem' }} value={big} onChange={e => setBig(e.target.value)} />
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px', marginBottom: '10px' }}>
        REG回数：<input type="number" style={{ width: '100%', fontSize: '1rem' }} value={reg} onChange={e => setReg(e.target.value)} />
      </div>

      <button style={{ width: '100%', fontSize: '1rem' }} onClick={handleAnalyze}>分析する</button>

      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h3>📊 理論値一覧（全設定）</h3>
          <table border="1" cellPadding="8" style={{ width: '100%', fontSize: '0.9rem', marginBottom: '1rem' }}>
            <thead>
              <tr>
                <th>設定</th>
                <th>BIG</th>
                <th>REG</th>
                <th>合算</th>
                <th>出玉率</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(machineData[selectedMachine]).map(([set, val]) => {
                const total = 1 / (val.big + val.reg);
                return (
                  <tr key={set}>
                    <td>設定{set}</td>
                    <td>1/{(1 / val.big).toFixed(1)}</td>
                    <td>1/{(1 / val.reg).toFixed(1)}</td>
                    <td>1/{total.toFixed(1)}</td>
                    <td style={{ color: val.payout > 100 ? 'blue' : 'red' }}>{val.payout.toFixed(1)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <h3>📊 実測値</h3>
          <table border="1" cellPadding="8" style={{ width: '100%', fontSize: '0.9rem' }}>
            <tbody>
              <tr>
                <td>BIG確率</td>
                <td>1/{result.actualBigProb.toFixed(1)}</td>
              </tr>
              <tr>
                <td>REG確率</td>
                <td>1/{result.actualRegProb.toFixed(1)}</td>
              </tr>
              <tr>
                <td>合算確率</td>
                <td>1/{result.actualTotalProb.toFixed(1)}</td>
              </tr>
              <tr>
                <td>出玉率</td>
                <td style={{ color: result.payout > 100 ? 'blue' : 'red' }}>{result.payout.toFixed(2)}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
        📎 <a href="https://p-town.dmm.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>DMMぱちタウンで機種情報を見る</a>
      </div>
    </div>
  );
};

export default App;
