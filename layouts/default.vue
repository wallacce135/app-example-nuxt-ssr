<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/" class="logo">Nuxt SSR</NuxtLink>
        <NuxtLink to="/about">О проекте</NuxtLink>
      </nav>
    </header>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
}

.header {
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 1.5rem;
}

.nav {
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav a {
  color: #374151;
  text-decoration: none;
}

.nav a:hover {
  color: #111827;
}

.nav a.router-link-active {
  color: #2563eb;
  font-weight: 600;
}

.logo {
  font-weight: 700;
  margin-right: auto;
}

.main {
  flex: 1;
  max-width: 48rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  width: 100%;
}
</style>
