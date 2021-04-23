// ★★ named の re-export ★★
// pokemon.js から re-export している
export * from './pokemon.js';

// named を全て re-export + エイリアス（名前を付ける）
// export * as pokemon from './pokemon.js';

// named で export するものを選びつつ、re-export
// export { rai } from './pokemon.js';

// named で export するものを選びつつ、re-export + エイリアス
// export { rai as tyuu } from './pokemon.js';
// export { pika as chuu, rai as tyuu } from './pokemon.js';

// ★★ default の re-export ★★
// default export は named export を as default したもの

// default を default のまま re-export
// export { default } from './pokemon.js';

// default を named にして re-export
// export { default as pika } from './pokemon.js';

// named を default にして re-export
// export { pika as default } from './pokemon.js';