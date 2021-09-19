<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Weather App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item :to="menuItem.link" :exact="menuItem.exact" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const menuList = [
  {
    icon: 'inbox',
    label: 'Current Weather',
    separator: true,
    link: '/',
    exact: true,
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false,
    link: '/feedback',
    exact: false,
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false,
    link: '/help',
    exact: false,
  },
];

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {
      drawer: ref(false),
      menuList,
    };
  },
});
</script>
