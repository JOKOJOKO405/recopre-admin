<template>
  <div>
    <v-app-bar color="primary" flat>
      <v-app-bar-nav-icon
        @click.stop="
          () => {
            isOpened = !isOpened
          }
        "
        color="white"
        app
      />
      <v-col>
        <h1 class="white--text text-center" style="font-size: 1.5rem">{{ pageTitle }}</h1>
      </v-col>
    </v-app-bar>
    <v-navigation-drawer v-model="isOpened" absolute left temporary>
      <v-list nav>
        <v-list-item-group v-model="navGroup" active-class="primary--text">
          <v-list-item v-for="(list, index) in menuList" :key="index">
            <v-list-item-content>
              <NuxtLink :to="list.link">
                <v-list-item-title v-text="list.text" />
              </NuxtLink>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, useRoute } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Header',
  props: {
    pageTitle: String
  },
  setup() {
    const route = useRoute()
    const pageId = parseInt(route.value.params.id)
    const menuList = [
      {
        text: '時間割',
        link: `/${pageId}/timetable`
      },
      {
        text: '持ち物',
        link: `/${pageId}/items`
      },
      {
        text: 'シール',
        link: `/${pageId}/seal`
      }
    ]
    const isOpened = ref(false)
    const navGroup = ref(false)
    watch(
      () => navGroup.value,
      () => {
        isOpened.value = false
      }
    )
    return { isOpened, navGroup, menuList, pageId }
  }
})
</script>

<style scoped>
.v-navigation-drawer >>> a {
  text-decoration: none;
}
</style>
