<template>
  <aside
    :class="[
      '  bg-white border-r border-slate-200 p-4 z-40 transform transition-transform duration-300 ease-in-out fixed md:relative',
      open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    ]"
  >
    <!-- Logo Section -->
    <div class="flex items-center gap-3 mb-8">
      <div
        class="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold"
      >
        S
      </div>
      <div>
        <div class="text-2xl font-bold">Panha</div>
        <div class="text-xs text-slate-400">Admin Dashboard</div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="space-y-2">
      <router-link
        to="/"
        class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100"
        @click="$emit('close')"
      >
        <svg
          class="w-7 h-7 text-indigo-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 12h18M3 6h18M3 18h18"
          />
        </svg>
        <span class="font-medium">Overview</span>
      </router-link>

      <router-link
        to="/users"
        class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100"
        @click="$emit('close')"
      >
        <svg
          class="w-7 h-7 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M16 11c1.657 0 3-1.343 3-3S17.657 5 16 5s-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zM8 13a6 6 0 0110 4v1H5v-1a6 6 0 013-4z"
          />
        </svg>
        <span class="font-medium">Users</span>
      </router-link>

      <router-link
        to="/reports"
        class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100"
        @click="$emit('close')"
      >
        <svg
          class="w-7 h-7 text-yellow-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 7h18M7 7v14m10-14v14"
          />
        </svg>
        <span class="font-medium">Reports</span>
      </router-link>

      <router-link
        to="/settings"
        class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100"
        @click="$emit('close')"
      >
        <svg
          class="w-7 h-7 text-slate-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="font-medium">Settings</span>
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

<style scoped>
/* Full HD 1920x1080 responsiveness tweaks */
@media (min-width: 1920px) {
  aside {
    width: 300px; /* slightly bigger sidebar for large screens */
    padding: 2rem;
  }
  nav span {
    font-size: 1.1rem;
  }
  .text-2xl {
    font-size: 2.5rem;
  }
}
</style>
