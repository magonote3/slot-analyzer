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
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'SマイジャグラーVKD': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'SハッピージャグラーVⅢEA': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'Sゴーゴージャグラー3KA': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'SジャグラーガールズSS-KH': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'SミスタージャグラーKK': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'SウルトラミラクルジャグラーKT': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },

  // 🌺 ハナハナシリーズ
  'LスターハナハナMX': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'L超華祭PB': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'Sドラゴンハナハナ〜閃光〜DX': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'Lドラゴンハナハナ〜閃光〜JP': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'Sドラゴンハナハナ〜閃光〜SP-30': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'SキングハナハナSP-30': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },

  // 📀 ディスクアップシリーズ
  'L DISCUPウルトラリミックス XR': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'S ディスクアップ2 ZF': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },

  // 🟡 ユニバ系
  'S/ファミスタ回胴版!!/FB': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'S/クランキークレスト/CR': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'S/バーサスリヴァイズ/HS': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'S/ワードオブライツⅡ/WF': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'S/ニューゲッターマウス/CG': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'S/新ハナビR/HA': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },

  // 🐸 山佐系
  'SニューパルサーSP4SLE8': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'SハイパーラッシュSLC8': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'SピンクパンサーSPXX': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },
  'SニューパルサーSP3CC': {
    1: { big: 1 / 273.1, reg: 1 / 439.8, payout: 95.9 },
    2: { big: 1 / 271.9, reg: 1 / 399.6, payout: 96.7 },
    3: { big: 1 / 273.1, reg: 1 / 331.0, payout: 98.0 },
    4: { big: 1 / 265.3, reg: 1 / 315.0, payout: 99.5 },
    5: { big: 1 / 258.0, reg: 1 / 281.3, payout: 101.1 },
    6: { big: 1 / 255.0, reg: 1 / 255.0, payout: 105.5 },
  },

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
