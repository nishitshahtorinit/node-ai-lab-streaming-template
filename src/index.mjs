import { streamPoem } from './stream.mjs';

const out = await streamPoem().catch((e) => `Error: ${e.message}`);
console.log(out);
