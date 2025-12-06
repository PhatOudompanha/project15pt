<template>
  <header class="bg-white border-b border-slate-200 flex justify-between items-center p-4 w-full">
    <!-- Left: Sidebar toggle + Dashboard info -->
    <div class="flex items-center gap-4">
      <!-- Mobile toggle button -->
      <button
        class="md:hidden p-2 rounded-md hover:bg-slate-100"
        @click="$emit('toggle-sidebar')"
        aria-label="Toggle sidebar"
      >
        <svg class="w-6 h-6 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Dashboard info -->
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xl font-semibold">
          S
        </div>
        <div>
          <h1 class="text-xl font-semibold">Dashboard Overview</h1>
          <p class="text-xs text-slate-400">Welcome back — here's what's happening</p>
        </div>
      </div>
    </div>

    <!-- Right: Notifications + User info -->
    <div class="flex items-center gap-4">
      <!-- Notification button -->
      <button class="p-2 rounded-md hover:bg-slate-100">
        <svg class="w-7 h-7 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1"/>
        </svg>
      </button>

      <!-- User info -->
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center text-sm font-medium">
          SS
        </div>
        <div class="text-right">
          <p class="text-sm font-medium">Panha</p>
          <p class="text-xs text-slate-400">Admin</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Topbar',
  emits: ['toggle-sidebar'],
};
</script>

<style scoped>
/* Optional: Full HD tweaks */
@media (min-width: 1920px) {
  h1.text-xl {
    font-size: 2rem;
  }
  p.text-xs {
    font-size: 0.875rem;
  }
}
</style>
