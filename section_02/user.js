// named import・named export について
// 複数の import・export が可能
const name = 'cat';
const name2 = 'dog';

// 変数宣言と同時に export も可能
// export const name = 'dog';
// export const name2 = 'cat';

// 関数の場合
function log(value) {
    console.log(value);
}

// 関数宣言と同時に export も可能
// export function log(value) {
//     console.log(value);
// }

// エイリアス（別名）について
// エイリアスは識別子（ 例 name、name2、log ）に対して自分で新たに別名を付けることができる
// 同じ識別子名で被ってしまってエラーが発生することを防ぐ役目がある
// named export / import 両方でエイリアスを使用することも可能
// どちらかと言うと、import 側でエイリアスが使用される場合が多い

// inedx.js にエクスポート
// name は cat という名前としてエクスポートされる
export { name as cat, name2, log };