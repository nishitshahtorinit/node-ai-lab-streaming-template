import { describe, it, expect, vi } from 'vitest';

// Build a fake async iterator that yields three "token" chunks
function makeFakeStream(parts) {
  return {
    async *[Symbol.asyncIterator]() {
      for (const p of parts) {
        yield { choices: [{ delta: { content: p } }] };
      }
    }
  };
}

vi.mock('openai', () => ({
  default: class OpenAI {
    chat = {
      completions: {
        create: vi.fn(async (_args) => makeFakeStream(['one ', 'two ', 'three']))
      }
    };
  }
}));

import { collectFromStream, streamPoem } from '../src/stream.mjs';

describe('Lab 02', () => {
  it('collectFromStream aggregates deltas', async () => {
    const s = makeFakeStream(['a', 'b', 'c']);
    const out = await collectFromStream(s);
    expect(out).toBe('abc');
  });

  it('streamPoem returns the aggregated poem', async () => {
    const out = await streamPoem();
    expect(out.trim()).toBe('one two three');
  });
});
