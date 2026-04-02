// This file re-exports the main App implementation from App.jsx to avoid
// duplicate JSX parsing errors when running Vite. Keep this lightweight
// so other tools that import ./App (without extension) continue to work.
export { default } from "./App.jsx";