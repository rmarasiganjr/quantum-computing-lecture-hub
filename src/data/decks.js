export const decks = [
  {
    slug: 'qml',
    title: 'Quantum Machine Learning',
    subtitle: 'From Circuits to Classifiers',
    description: 'Feature maps, the ansatz, and the hybrid training loop — every circuit on these slides really runs.',
    path: '/decks/qml-live/index.html',
    notebook: null,
  },
  {
    slug: 'shors-algorithm',
    title: "Shor's Algorithm",
    subtitle: 'Factoring, Live',
    description: 'Turning factoring into period-finding — the quantum algorithm behind breaking RSA.',
    path: '/decks/shor-live/index.html',
    notebook: '/decks/shor-live/Shors_Algorithm_Factoring_15_Notebook.ipynb',
  },
  {
    slug: 'grovers-algorithm',
    title: "Grover's Algorithm",
    subtitle: 'Beginner Introduction',
    description: 'Searching an unsorted list, sped up — amplitude amplification, live.',
    path: '/decks/grover-live/index.html',
    notebook: '/decks/grover-live/Grovers_Algorithm_Beginner_Notebook.ipynb',
  },
]

export function findDeck(slug) {
  return decks.find((d) => d.slug === slug)
}
