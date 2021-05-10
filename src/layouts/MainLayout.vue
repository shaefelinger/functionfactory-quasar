<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="justify-center bg-grey-9  ">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-md "
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="text-uppercase">
          <span class="text-weight-light">Function</span>
          <span class="text-cyan-8 text-weight-bold">Factory</span>
          <!-- <span class="text-weight-light">.de</span> -->
        </q-toolbar-title>

        <q-tabs v-for="nav in navs" :key="nav.label" shrink stretch>
          <q-route-tab exact :label="nav.label" :to="nav.to" class="gt-sm" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
      :width="150"
    >
      <q-list>
        <!-- <q-item-label header class="text-grey-8">Navigation </q-item-label> -->

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable
        >
          <!-- <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section> -->

          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="q-mb-xl ">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev"
  }
];

export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: "Home",
          icon: "arrow_right_alt",
          to: "/"
        },
        {
          label: "About me",
          icon: "arrow_right_alt",
          to: "/about"
        },
        {
          label: "Projects",
          icon: "arrow_right_alt",
          to: "/projects"
        },
        // {
        //   label: "Quasar",
        //   icon: "arrow_right_alt",
        //   to: "/quasar"
        // },
        {
          label: "Contact",
          icon: "arrow_right_alt",
          to: "/contact"
        }
      ]
    };
  }
};
</script>

<style>
@media screen and (max-width: 1024px) {
  /* .q-tabs {
    display: none;
  } */
  /* .burger-menu {
    display: flex;
  } */
}
</style>
