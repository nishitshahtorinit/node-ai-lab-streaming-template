# node-ai-lab-streaming-template
# Streaming in the CLI

## Objectives
- Request streamed output from a model.
- Aggregate deltas into a final string for display.

## Setup
- Same as Lab 01.

## Tasks
- Implement `collectFromStream(asyncIterable)` in `src/stream.mjs`.
- Implement `streamPoem(client)` that:
  - Makes a Chat Completions streaming request for a 3-line poem.
  - Uses `collectFromStream` to return the final text.

## Notes
- Tests simulate the stream. No live calls.
