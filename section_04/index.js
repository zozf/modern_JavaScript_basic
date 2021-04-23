// * で全部一気に import することができる
// 全てを pokemon とする
// 変数、関数、クラスでも同じようにできる
// import * as pokemon from './pokemon/index.js';

// import の時に default はそのまま使えない（予約語であるため）
// import { default as chuu } from './pokemon/index.js'; などで解決できる

// document.body.textContent = pokemon.pika;

// side effect import について
// 変数や関数を import することなく、そのモジュール自体を import して終わりにすること
import './side_effect.js';