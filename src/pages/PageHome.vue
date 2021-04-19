<template>
  <q-page>
    <div class="flex flex-center wrap">
      <section
        style="min-height: 30vh;max-width: 700px;"
        class="text-center "
        ref="home"
      >
        <h1>
          <span>web...</span>
          <br />
          <span class="text-cyan-8 ">...apps</span>
        </h1>

        <q-avatar size="240px">
          <img src="~assets/sh.png" />
        </q-avatar>

        <div ref="about">
          <!-- <div class="mt-12  text-center text-grey-8  "> -->
          <h4>
            Hi, i am
            <span class="text-cyan-8  ">Steffen Häfelinger</span>
          </h4>

          <div class="mt-10 text-body1">
            <p>
              I'm a software developer located in Hamburg, Germany. I build
              websites, webapps and multiplattform apps.
            </p>
            <p>
              I am interested in all things Javascript and i have a faible for
              the Vue.js-Ecosystem - especially for the great Quasar-Framework.
            </p>
            <p>
              I love good user interfaces and software that has great user
              experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>
