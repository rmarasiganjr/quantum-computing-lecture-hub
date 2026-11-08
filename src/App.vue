<script setup>
import { decks } from './data/decks.js'
</script>

<template>
  <div class="shell">
    <aside class="sidebar">
      <RouterLink to="/" class="brand">
        <span class="brand-mark">Q</span>
        <span class="brand-text">Quantum Explained</span>
      </RouterLink>
      <nav class="topics">
        <p class="topics-label">Topics</p>
        <RouterLink
          v-for="deck in decks"
          :key="deck.slug"
          :to="`/d/${deck.slug}`"
          class="topic-link"
          active-class="topic-link-active"
        >
          <span class="topic-title">{{ deck.title }}</span>
          <span class="topic-subtitle">{{ deck.subtitle }}</span>
        </RouterLink>
      </nav>
    </aside>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.shell {
  display: flex;
  height: 100%;
}

.sidebar {
  flex: 0 0 260px;
  background: var(--maroon);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 18px;
  overflow-y: auto;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  padding: 0 6px;
}

.brand-mark {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--gold);
  color: var(--maroon-deep);
  font-family: 'Libre Baskerville', Georgia, serif;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.brand-text {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-weight: 700;
  font-size: 18px;
}

.topics {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.topics-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin: 8px 6px 4px;
}

.topic-link {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  transition: background 0.15s;
}

.topic-link:hover {
  background: rgba(255, 255, 255, 0.08);
}

.topic-link-active {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}

.topic-title {
  font-weight: 600;
  font-size: 14px;
}

.topic-subtitle {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
}

.content {
  flex: 1;
  min-width: 0;
  overflow: auto;
}
</style>
