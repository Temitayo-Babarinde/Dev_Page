export type Choice = { cell: number; value: number };
export type Round = { question: string; answer: number; choices: Choice[] };
export type GameState = { seed: number; position: number; score: number; misses: number; started: boolean; running: boolean; round: Round; message: string };
export type Action = { type: "start"; seed: number } | { type: "move"; dx: number; dy: number } | { type: "pause" } | { type: "resume" };
export const initialGame: GameState = { seed: 1, position: 17, score: 0, misses: 0, started: false, running: false, round: { question: "Ready for a little mental maths?", answer: 0, choices: [] }, message: "An endless walk through the margins." };

export function makeRound(seed: number, excluded: number, previous = ""): { seed: number; round: Round } {
  let current = seed >>> 0 || 1;
  const random = () => { current ^= current << 13; current ^= current >>> 17; current ^= current << 5; current >>>= 0; return current / 4294967296; };
  const integer = (min: number, max: number) => min + Math.floor(random() * (max - min + 1));
  let question = "", answer = 0;
  for (let attempt = 0; attempt < 12; attempt++) {
    const a = integer(2, 14), b = integer(2, 9), kind = integer(0, 5);
    if (kind === 0) { question = a + " + " + b; answer = a + b; }
    else if (kind === 1) { question = (a + b) + " − " + b; answer = a; }
    else if (kind === 2) { question = a + " × " + b; answer = a * b; }
    else if (kind === 3) { question = (a * b) + " ÷ " + b; answer = a; }
    else if (kind === 4) { question = b + "²"; answer = b * b; }
    else { question = a + " mod " + b; answer = a % b; }
    if (question !== previous) break;
  }
  const values = [answer];
  while (values.length < 4) { const candidate = Math.max(0, answer + integer(-10, 10)); if (!values.includes(candidate)) values.push(candidate); }
  const cells = Array.from({ length: 35 }, (_, i) => i).filter(i => i !== excluded);
  for (let i = cells.length - 1; i > 0; i--) { const j = integer(0, i); [cells[i], cells[j]] = [cells[j], cells[i]]; }
  return { seed: current, round: { question, answer, choices: values.map((value, i) => ({ value, cell: cells[i] })) } };
}
export function gameReducer(state: GameState, action: Action): GameState {
  if (action.type === "start") { const next = makeRound(action.seed, 17); return { ...initialGame, ...next, started: true, running: true, message: "Walk onto the correct answer." }; }
  if (action.type === "pause") return { ...state, running: false };
  if (action.type === "resume") return state.started ? { ...state, running: true } : state;
  if (!state.running) return state;
  const x = state.position % 7 + action.dx, y = Math.floor(state.position / 7) + action.dy;
  if (x < 0 || x > 6 || y < 0 || y > 4) return state;
  const position = y * 7 + x;
  const choice = state.round.choices.find(item => item.cell === position);
  if (!choice) return { ...state, position };
  if (choice.value !== state.round.answer) return { ...state, position, misses: state.misses + 1, round: { ...state.round, choices: state.round.choices.filter(item => item.cell !== position) }, message: "Not that one. Keep exploring." };
  const next = makeRound(state.seed, position, state.round.question);
  return { ...state, ...next, position, score: state.score + 1, message: "Got it. Here comes another." };
}
