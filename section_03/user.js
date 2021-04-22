// default import / export はできるだけ使わないほうが良い（できるだけ named import / export を使う）
// export default は1モジュールに対して1回しか使えない

const name = 'ピカチュウ'

function log(value) {
    console.log(value);
}

// inedx.js にエクスポート
export { log };

// export default は評価された後の値を export する（'ピカチュウ'という値自体が export されている）
export default name;

// 関数の export default
// export default log;

// export default の場合、宣言と一緒に export default できるのは関数だけで、変数は使えない
// 宣言と同時に export default する場合は識別子がいらなくても OK
// export default function log(value) {
//     console.log(value);
// }

// 文字列をそのまま export default することは可能
// export default 'ピカチュウ';