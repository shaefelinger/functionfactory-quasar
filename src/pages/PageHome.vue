<template>
  <q-page>
    <div>
      <!-- <section
        style="min-height: 30vh;max-width: 700px;"
        class="text-center "
        ref="home"
      > -->
      <section class="row">
        <div class="offset-3 col-6 q-mt-xl">
          <div>
            <div class="row q-my-xl">
              <span class="text-h1 offset-3 col-3">web</span>
              <span class="text-cyan-8 text-h1 col-6">apps</span>
              <!-- <h1>
                <br />
              </h1> -->
            </div>
            <div class="row justify-center">
              <q-avatar size="240px" class="text-center ">
                <img src="~assets/sh.png" />
              </q-avatar>
            </div>
          </div>

          <!-- <div> -->
          <div class="mt-12  text-center text-grey-8  ">
            <h4>
              Hi, i am
              <span class="text-cyan-8  ">Steffen Häfelinger</span>
            </h4>

            <div class="mt-10 text-body1">
              <!-- <p>
                I'm a software developer located in Hamburg, Germany. I build
                websites and multiplattform applications using modern web
                technologies.
              </p> -->
              <p>
                I'm a software developer located in Hamburg, Germany. I build
                websites, webapps and multiplattform apps.
              </p>
              <p>
                I am interested in all things Javascript and i have a faible for
                the Vue.js-Ecosystem - especially for the great
                Quasar-Framework.
              </p>
              <!-- <p>
                I am interested in all things Javascript and i have a faible for
                the Vue.js-Ecosystem - especially for the great
                Quasar-Framework.
              </p> -->

              <p>
                I love good user interfaces and software that provides a great
                user experience.
              </p>
              <!-- <p>
                I am always looking for new challenges. Say Hi
              </p> -->
            </div>
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

<style>
.animation-element {
  transition: all 5s;
}
</style>
