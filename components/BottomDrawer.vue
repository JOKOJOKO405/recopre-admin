<template>
  <v-bottom-navigation background-color="primary" color="primary" grow>
    <v-btn :to="`/${parentId}/${childId}/home`" nuxt>
      <span>ホーム</span>
      <v-icon class="nav-icon">mdi-home</v-icon>
    </v-btn>
    <v-btn :to="`/${parentId}/${childId}/todo`" nuxt>
      <span>やること</span>
      <v-icon class="nav-icon">mdi-pencil-outline</v-icon>
    </v-btn>
    <v-btn :to="`/${parentId}/${childId}/seal`" nuxt>
      <span>シール</span>
      <v-icon class="nav-icon">mdi-seal-variant</v-icon>
    </v-btn>
    <v-btn :to="`/${parentId}/${childId}/item`" nuxt>
      <span>持ち物</span>
      <v-icon class="nav-icon">mdi-bag-personal</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'BottomDrawer',
  setup() {
    const route = useRoute()
    const parentId = route.value.params.id
    const childId = route.value.params.childId
    return { parentId, childId }
  }
})
</script>

<style scoped>
.v-item-group.v-bottom-navigation {
  box-shadow: none !important;
}
.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before,
.v-item-group.v-bottom-navigation .v-btn.v-btn--active:not(:hover):before {
  opacity: 1;
  background-color: #f1f8ff;
}
.v-btn > .v-btn__content .v-icon,
.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: white !important;
}
.v-item-group.v-bottom-navigation .v-btn.v-btn--active,
.v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-icon {
  color: #5ea0ff !important;
}
</style>
