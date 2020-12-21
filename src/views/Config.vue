<template>
  <div class="config">
    <div class="card">
      <h2 class="card-header title">
        <div class="btn" @click="before">«</div>
        <span>Configuración</span>
      </h2>
      <div class="card-body">
        <h3 class="card-header">Cambiar tamaño fuente</h3>
        <div class="card-body">
          <p>
            <input
              type="number"
              @keyup="cambiarSize(size)"
              v-model="size"
              placeholder="Ingrese tamaño"
            />
          </p>
          <p>Fuente 16 por defecto</p>
          <h3 class="card-header">Vista previa</h3>
          <div class="card-body" :style="`font-size: ${fontSize}px`">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            odit.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Config",
  data() {
    return {
      size: 0,
    };
  },
  created() {
    this.size = this.fontSize;
  },
  computed: {
    ...mapState(["fontSize"]),
  },
  methods: {
    ...mapMutations(["cambiarSize"]),
    before() {
      this.$router.push("/");
    },
    cambiarFuente() {
      console.log(this.size, this.fontSize);
    },
  },
};
</script>

<style scoped>
.config {
  color: var(--textPrimary);
  padding: 1rem;
  min-height: 100vh;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  display: flex;
  align-items: center;
}
.title span {
  margin-left: 1rem;
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
}
input {
  padding: 0.5rem 1rem;
  outline: none;
}
</style>
