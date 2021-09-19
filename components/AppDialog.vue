<template>
  <v-dialog :value="isOpenedDialog" width="50%">
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
      <div class="text-right">
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
    }
  },
  setup(props) {}
})
</script>
