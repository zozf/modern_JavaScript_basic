// user.js からインポート
// import 側からエイリアスを使用することも可能
// name2 を dog という名前としてインポート
import { cat, name2 as dog, log } from "./user.js";

log(cat);

// body タグ内に name、name2 を書き込み
document.body.textContent = cat + dog;