<template>
  <v-container fluid>
    <div class="d-flex mb-4">
      <v-btn icon @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h2 v-if="calendar">
        {{ calendar.title }}
      </h2>
      <v-btn icon @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <v-calendar
      v-model="focus"
      type="month"
      ref="calendar"
      :events="events"
      locale="ja-jp"
      @click:event="editEvent"
      @click:date="showDate"
    />
    <AppDialog
      :is-opened-dialog="isOpenedCreateDialog"
      :dialog-title="isEdit ? '予定を編集' : '予定を追加'"
      :click-action="() => (isOpenedCreateDialog = false)"
    >
      <v-form ref="sealForm" v-model="isValid">
        <v-row>
          <v-col cols="5">
            <v-text-field v-model="eventDetail.name" label="予定" outlined />
          </v-col>
          <v-col>
            <v-switch v-model="eventDetail.repeat" inset label="繰り返し" />
          </v-col>
          <v-col>
            <v-switch v-model="eventDetail.time" inset label="時間指定あり" />
          </v-col>
        </v-row>
        <v-row v-if="eventDetail.time" justify="space-around" align="center">
          <v-time-picker
            v-model="eventDetail.start"
            format="24hr"
            @click:hour="changeStartHours"
            @click:minute="changeStartMinute"
            scrollable
          />
          <v-time-picker
            v-model="eventDetail.end"
            format="24hr"
            @click:hour="changeEndHours"
            @click:minute="changeEndMinute"
            scrollable
          />
        </v-row>
        <AppBtn :click-action="createEvent" :btn-text="isEdit ? '修正' : '追加'" />
      </v-form>
    </AppDialog>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, useFetch, reactive } from '@nuxtjs/composition-api'
import { useTimePicker } from '~/modules/useTimePickers'

export default defineComponent({
  setup() {
    const calendar = ref<any>(null)
    const events = ref<any>([])

    // イベント追加編集フラグ
    const isOpenedCreateDialog = ref(false)
    const isValid = ref(false)
    const isEdit = ref(false)

    const eventDetail = reactive({
      name: '',
      start: null,
      end: null,
      repeat: false,
      time: false,
      repeatEnd: ''
    })
    const eventsInit = () => {
      eventDetail.name = ''
      eventDetail.start = null
      eventDetail.end = null
      eventDetail.repeat = false
      eventDetail.time = false
      eventDetail.repeatEnd = ''
    }

    const focus = ref('')

    const prev = () => {
      console.debug(calendar.value)
      calendar.value.prev()
    }
    const next = () => {
      calendar.value.next()
    }

    // timepicker
    const { time, changeStartHours, changeStartMinute, changeEndHours, changeEndMinute } = useTimePicker()

    const createEvent = (date: CalendarDay) => {
      events.value.push({
        name: eventDetail.name
      })
      eventsInit()
      isOpenedCreateDialog.value = false
    }

    onMounted(() => {
      calendar.value.checkChange()
    })

    // 日付クリック
    const showDate = (date: CalendarDay) => {
      console.debug(date)
      isOpenedCreateDialog.value = true
    }
    // イベントクリック
    const editEvent = (event: any) => {
      isEdit.value = true
      isOpenedCreateDialog.value = true
    }

    // init
    const { $fetchState } = useFetch(async () => {
      // TODO: バックから取ってくる
      // events.value.push()
    })

    return {
      calendar,
      next,
      prev,
      focus,
      events,
      showDate,
      editEvent,
      isOpenedCreateDialog,
      isValid,
      isEdit,
      eventDetail,
      createEvent,
      time,
      changeStartHours,
      changeStartMinute,
      changeEndHours,
      changeEndMinute
    }
  }
})
</script>
