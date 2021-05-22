<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
    <!-- {{ currentRole }} //adminDashboard -->
    <!-- <DashboardAdmin /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
// import DashboardAdmin from './admin/index.vue'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard }, // DashboardAdmin
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    console.log(this.roles) // admin
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}

</script>
