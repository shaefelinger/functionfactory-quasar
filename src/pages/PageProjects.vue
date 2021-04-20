<template>
  <q-page class="flex flex-center ">
    <div style="max-width: 700px;  ">
      <div class="text-center">
        <h1>some <span class="text-cyan-8">projects</span></h1>
      </div>

      <div class="q-pa-md row items-start q-gutter-md ">
        <q-card class="my-card">
          <img src="~/assets/codepedia_screenshot.png" />
          <!-- <figure>
            <q-zoom restore-on-scroll>
              <img
                src="~/assets/codepedia_screenshot.png"
                alt="QZoom basic"
                class="my-image"
                width="100%"
              />
            </q-zoom>
          </figure> -->
          <q-card-section class="q-mt-md">
            <a href="https://www.codepedia.de/" target="_blank">
              <div class="text-h5">codepedia.de</div>
            </a>
            <div class="text-subtitle2">
              My personal coding reference
            </div>
          </q-card-section>

          <!-- <q-img src="~/assets/codepedia_screenshot.png" width="700px">
            <div class="absolute-bottom">
              <div class="text-h6">codepedia.de</div>
              <div class="text-subtitle2">
                my personal little coding reference
              </div>
            </div>
          </q-img> -->

          <q-card-section class="q-pt-none ">
            Theese are notes i took for myself from the moment i started
            learning to code. <br />
            I converted my Markdown-Files into a Vuepress-Page. This is (and
            will always be) work in progress... And it is still a bit of a
            mess...😉 But it contains a lot of information and i find it very
            usefull.
          </q-card-section>

          <q-card-actions>
            <a href="https://www.codepedia.de/" target="_blank">
              <q-btn flat>
                <!-- <q-icon name="language" left /> -->
                View page Live</q-btn
              >
            </a>
            <a href="https://github.com/shaefelinger/codepedia" target="_blank">
              <q-btn flat>
                <!-- <q-icon name="open_in_new" left /> -->
                View on Github</q-btn
              ></a
            >
          </q-card-actions>
        </q-card>

        <q-card class="my-card q-mt-xl">
          <img src="~/assets/travelblog_screenshot.png" />
          <!-- <figure>
            <q-zoom restore-on-scroll>
              <img
                src="~/assets/codepedia_screenshot.png"
                alt="QZoom basic"
                class="my-image"
                width="100%"
              />
            </q-zoom>
          </figure> -->
          <q-card-section class="q-mt-md">
            <a
              href="https://aroundtheworld-blog-server.herokuapp.com/#/home"
              target="_blank"
            >
              <div class="text-h5">Around the world - Travel Blog</div>
            </a>
            <div class="text-subtitle2">
              Blog Site - My final project at the Hamburg Coding School
            </div>
          </q-card-section>

          <!-- <q-img src="~/assets/codepedia_screenshot.png" width="700px">
            <div class="absolute-bottom">
              <div class="text-h6">codepedia.de</div>
              <div class="text-subtitle2">
                my personal little coding reference
              </div>
            </div>
          </q-img> -->

          <q-card-section class="q-pt-none">
            <ul>
              <li>
                The Frontend is using Vue.js (incl. Router and Vuex) and
                Tailwind CSS
              </li>
              <li>
                The Backend is a Node/Express Server running on Heroku
              </li>
              <li>
                The Data is stored in a Mongo DB-Atlas Cloud Database handled by
                the Server using mongoose
              </li>
              <li>
                The Server provides a REST API for the Blog-Posts and User-Data
              </li>
              <li>
                Authentification is handled by the Server using passport.js
              </li>
            </ul>
          </q-card-section>
          <q-card-actions>
            <a
              href="https://aroundtheworld-blog-server.herokuapp.com/#/home"
              target="_blank"
            >
              <q-btn flat>
                <!-- <q-icon name="language" left /> -->
                View page Live</q-btn
              >
            </a>
            <a
              href="https://github.com/shaefelinger/HCS-Project2-TravelBlogVue"
              target="_blank"
            >
              <q-btn flat>
                <!-- <q-icon name="open_in_new" left /> -->
                View on Github</q-btn
              ></a
            >
            <a
              href="https://github.com/shaefelinger/HCS-Project2-Backend"
              target="_blank"
            >
              <q-btn flat>
                <!-- <q-icon name="open_in_new" left /> -->
                View Backend on Github</q-btn
              ></a
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from "quasar";
export default {
  methods: {}
};
</script>

<style></style>
