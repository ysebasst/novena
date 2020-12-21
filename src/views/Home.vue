<template>
  <div class="home">
    <section class="menu">
      <div class="card">
        <h1 class="card-header menu-title">Novena de aguinaldos</h1>
        <div class="card-body">
          <router-link
            :to="{ name: 'Oracion', params: { id: i } }"
            class="menu-option"
            v-for="(opcion, i) of opciones"
            :key="i"
          >
            <div class="menu-option-title">
              {{ i + 1 }}. {{ opcion.name.toLowerCase() }}
            </div>
          </router-link>
          <router-link to="/config" class="menu-option">
            <div class="menu-option-title">Configuración</div></router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      // opciones: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    };
  },
  methods: {},
  computed: {
    ...mapState(["opciones"]),
  },
};
</script>

<style scoped>
.home {
  /* background-color: var(--bgPrimary); */
  color: var(--textPrimary);
  min-height: 100vh;
  padding: 1rem;
}
.menu {
  display: grid;
  gap: 1rem;
  max-width: 768px;
  margin: 0 auto;
}
.menu-title {
  text-align: center;
  font-weight: bold;
}
.menu-option {
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  color: var(--textPrimary);
  text-decoration: none;
}
.menu-option-title {
  font-weight: bold;
  text-transform: capitalize;
}
.menu-option-contenido {
  margin-top: 1rem;
}
</style>
