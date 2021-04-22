// user.js からインポート
// default import は {} ではなくむき出しの状態で書く必要がある
import name, { log } from "./user.js";

log(name);

document.body.textContent = name;