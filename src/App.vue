<template>
  <div class="flex w-screen h-screen bg-slate-50">
    <Sidebar :open="sidebarOpen" @close="sidebarOpen = false"/>
    <div class="flex-1 flex flex-col">
      <Topbar @toggle-sidebar="sidebarOpen = !sidebarOpen"/>
      <router-view class="p-4"/>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: { Topbar, Sidebar },
  data() {
    return {
      sidebarOpen: false
    }
  }
}
</script>
