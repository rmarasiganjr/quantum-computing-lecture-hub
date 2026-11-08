<script setup>
import { computed } from 'vue'
import { findDeck } from '../data/decks.js'

const props = defineProps({ slug: String })
const deck = computed(() => findDeck(props.slug))
</script>

<template>
  <div v-if="deck" class="deck-wrap">
    <div class="topbar">
      <div>
        <h2>{{ deck.title }}</h2>
        <p class="subtitle">{{ deck.subtitle }}</p>
      </div>
      <div class="actions">
        <a v-if="deck.notebook" :href="deck.notebook" download class="btn">Download notebook</a>
        <a :href="deck.path" target="_blank" rel="noopener" class="btn btn-primary">Open fullscreen ↗</a>
      </div>
    </div>
    <iframe :src="deck.path" class="deck-frame" title="Lecture deck" allowfullscreen></iframe>
  </div>
  <div v-else class="not-found">
    <p>Topic not found.</p>
  </div>
</template>

<style scoped>
.deck-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.topbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--ring);
  background: var(--surface);
}

.topbar h2 {
  margin: 0;
  font-size: 18px;
  color: var(--maroon);
}

.subtitle {
  margin: 2px 0 0;
  font-size: 12px;
  color: var(--ink-faint);
  font-style: italic;
}

.actions {
  display: flex;
  gap: 10px;
  flex: 0 0 auto;
}

.btn {
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--ring);
  color: var(--ink);
  white-space: nowrap;
}

.btn-primary {
  background: var(--maroon);
  color: #fff;
  border-color: var(--maroon);
}

.deck-frame {
  flex: 1;
  width: 100%;
  border: none;
}

.not-found {
  padding: 40px;
  color: var(--ink-soft);
}
</style>
