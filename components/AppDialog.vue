<template>
  <v-dialog
    :value="isOpenedDialog"
    :fullscreen="fullscreen"
    :transition="fullscreen ? 'dialog-bottom-transition' : ''"
    width="50%"
  >
    <v-card class="pa-4">
      <v-row no-gutters class="align-center">
        <v-card-title class="pa-3">
          {{ dialogTitle }}
        </v-card-title>
        <v-spacer />
        <v-btn @click="$emit('close')" icon><v-icon>mdi-close</v-icon></v-btn>
      </v-row>
      <v-divider class="mb-6" />
      <div class="mb-6">
        <slot />
      </div>
      <div v-if="!fullscreen" class="text-right">
        <v-btn
          depressed
          color="primary"
          class="font-weight-bold"
          @click="$emit('close')"
          >とじる</v-btn
        >
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'AppDialog',
  props: {
    isOpenedDialog: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      required: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {}
})
</script>

<style scoped>
.v-dialog--fullscreen > .v-card {
  padding: 12px !important;
}
</style>
