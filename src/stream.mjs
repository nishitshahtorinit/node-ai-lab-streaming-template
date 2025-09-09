import OpenAI from 'openai';

/**
 * TODO:
 * - Given an async iterable of chunks, concatenate the text deltas
 *   found at chunk.choices[0].delta.content (if present).
 * - Return the final string.
 */
export async function collectFromStream(asyncIterable) {
  let out = '';
  // for await (const chunk of asyncIterable) { ... }
  throw new Error('TODO: implement collectFromStream()');
}

/**
 * TODO:
 * - Create a client.
 * - Do a streaming chat completion (model can be 'gpt-4o' or similar).
 * - Use collectFromStream(...) to aggregate into a string and return it.
 */
export async function streamPoem(client = new OpenAI()) {
  throw new Error('TODO: implement streamPoem()');
}
