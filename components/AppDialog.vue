<template>
  <v-dialog :value="isOpenedDialog" width="50%">
    <v-card class="pa-3">
      <v-row no-gutters class="align-center">
        <v-card-title class="pa-3">
          {{ dialogTitle }}
        </v-card-title>
        <v-spacer />
        <v-btn @click="$emit('close')" icon><v-icon>mdi-close</v-icon></v-btn>
      </v-row>
      <v-divider class="mb-6" />
      <v-card-text>
        <slot />
      </v-card-text>
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
    }
  },
  setup(props) {}
})
</script>
