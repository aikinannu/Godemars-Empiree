// Re-export the AuthContext implementation from the JSX file so Vite
// doesn't attempt to parse JSX inside a .js file. Keep this file as
// a thin compatibility layer for any code that imports the .js path.
export * from "./AuthContext.jsx";