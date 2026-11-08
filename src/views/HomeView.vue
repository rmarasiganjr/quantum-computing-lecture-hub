<script setup>
import { decks } from '../data/decks.js'
</script>

<template>
  <div class="home">
    <p class="eyebrow">A Free Interactive Series</p>
    <h1>Learn Quantum Computing by Doing</h1>
    <p class="lede">Pick a topic from the sidebar — each one opens an interactive guide where the circuits and simulations actually run, not just slides to read.</p>
    <div class="grid">
      <RouterLink v-for="deck in decks" :key="deck.slug" :to="`/d/${deck.slug}`" class="card">
        <h3>{{ deck.title }}</h3>
        <p class="subtitle">{{ deck.subtitle }}</p>
        <p class="description">{{ deck.description }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: clamp(24px, 4vw, 64px);
  max-width: 900px;
}

.eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--maroon);
  margin: 0;
}

h1 {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: clamp(28px, 4vw, 42px);
  margin: 8px 0 0;
  color: var(--ink);
}

.lede {
  color: var(--ink-soft);
  font-size: 16px;
  max-width: 60ch;
  margin: 12px 0 32px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 18px;
}

.card {
  display: block;
  background: var(--surface);
  border: 1px solid var(--ring);
  border-radius: 16px;
  padding: 20px;
  text-decoration: none;
  color: var(--ink);
  transition: transform 0.15s, border-color 0.15s;
}

.card:hover {
  transform: translateY(-2px);
  border-color: var(--maroon);
}

.card h3 {
  margin: 0 0 4px;
  color: var(--maroon);
  font-size: 18px;
}

.subtitle {
  margin: 0 0 10px;
  font-size: 12px;
  font-style: italic;
  color: var(--ink-faint);
}

.description {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-soft);
}
</style>
