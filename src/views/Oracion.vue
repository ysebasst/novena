<template>
  <div class="oracion">
    <div class="card">
      <h2 class="card-header title">
        <div class="btn" @click="before">«</div>
        <span>{{ oracion.name }}</span>
      </h2>
      <div class="card-body contenido" v-if="oracion.contenido[0].name">
        <div v-for="(item, i) of oracion.contenido" :key="i">
          <h3
            class="card-header sub-title"
            :class="
              oracion.name === 'CONSIDERACIONES' ||
              oracion.name === 'VILLANCICOS'
                ? 'hidden'
                : ''
            "
          >
            <span>{{ item.name }}</span>
            <div
              class="btn"
              v-if="
                oracion.name === 'CONSIDERACIONES' ||
                  oracion.name === 'VILLANCICOS'
              "
              @click="toggle"
            >
              »
            </div>
          </h3>
          <div
            class="card-body"
            :style="`font-size: ${fontSize}px`"
            v-if="
              oracion.name === 'VILLANCICOS' ||
                oracion.name === 'GOZOS NAVIDEÑOS'
            "
          >
            <p v-for="(parrafo, i) of item.contenido" :key="i">
              <span v-for="(linea, i) of parrafo" :key="i">
                {{ linea }}
              </span>
            </p>
          </div>
          <div class="card-body" :style="`font-size: ${fontSize}px`" v-else>
            <p v-for="(parrafo, i) of item.contenido" :key="i">
              {{ parrafo }}
            </p>
          </div>
        </div>
      </div>
      <div class="card-body" :style="`font-size: ${fontSize}px`" v-else>
        <p v-for="(parrafo, i) of oracion.contenido" :key="i">
          {{ parrafo }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Oracion",
  data() {
    return {
      oracion: {},
    };
  },
  created() {
    this.oracion = this.opciones[this.$route.params.id];
  },
  computed: {
    ...mapState(["opciones", "fontSize"]),
  },
  methods: {
    before() {
      this.$router.push("/");
    },
    toggle(e) {
      if (e.target.textContent === "»" || e.target.textContent === " » ") {
        e.target.textContent = "«";
      } else {
        e.target.textContent = "»";
      }
      e.target.parentElement.classList.toggle("hidden");
    },
  },
};
</script>

<style scoped>
.oracion {
  color: var(--textPrimary);
  padding: 1rem;
  min-height: 100vh;
  max-width: 768px;
  margin: 0 auto;
}
.title {
  display: flex;
  align-items: center;
}
.title span {
  margin-left: 0.5rem;
}
.sub-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h2 {
  font-size: 1.17em;
}
.btn {
  color: var(--textPrimary);
  text-decoration: none;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}
p {
  margin-bottom: 1rem;
  line-height: 1.5em;
}
p span {
  display: block;
  text-align: center;
}
.hidden ~ .card-body {
  display: none;
}
</style>
