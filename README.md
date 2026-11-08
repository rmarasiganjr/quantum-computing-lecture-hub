# Quantum Computing Lecture Hub

A small Vue 3 + Vite site that hosts interactive, self-contained quantum-computing lecture decks — every circuit and simulation on the slides actually runs in the browser.

- **Quantum Machine Learning** — feature maps, the ansatz, and the hybrid training loop
- **Grover's Algorithm** — how it works, where it's used, and how it's built in Qiskit

Each deck lives as a standalone static page under `public/decks/`, embedded into the sidebar/content shell via an iframe. No backend, no database — static hosting only (Firebase Hosting).

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```
