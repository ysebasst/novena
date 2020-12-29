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
          <form @submit="cambiarSize(size)">
            <input type="number" v-model="size" placeholder="Ingrese tamaño" />
            <button type="submit" class="btn">Cambiar</button>
          </form>
          <p>Fuente 16 por defecto</p>
          <hr />
          <h3 class="vista-previa">Vista previa</h3>
          <p :style="`font-size: ${fontSize}px`">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            quidem.
          </p>
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
form {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}
form .btn {
  color: #000;
}
input {
  display: flex;
  width: 180px;
  padding: 0.5rem 1rem;
  outline: none;
}
.vista-previa {
  padding: 0.5rem 0;
}
</style>
