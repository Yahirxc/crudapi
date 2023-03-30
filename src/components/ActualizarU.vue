<template>
  <div class="container">
    <div class="card">
      <div class="card-header">actualizar usuario</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="">User:</label>
            <input
              type="text"
              class="form-control"
              name="User"
              id="User"
              v-model="form.user"
              aria-describedby="helpId"
              placeholder="User"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del usuario</small
            >
          </div>
          <div class="form-group">
            <label for="">Password:</label>
            <input
              type="text"
              class="form-control"
              name="Password"
              id="Password"
              v-model="form.password"
              aria-describedby="helpId"
              placeholder="Password"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la contraseña</small
            >
          </div>
          <div class="form-group">
            <label for="">Fecha de registro:</label>
            <input
              type="text"
              class="form-control"
              name="fechaRegistro"
              v-model="form.fechaRegistro"
              aria-describedby="helpId"
              id="fechaRegistro"
              placeholder="Fecha de registro"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del usuario</small
            >
          </div>
          <div class="form-group">
            <label for="">FkEmpleado:</label>
            <input
              type="text"
              class="form-control"
              name="FkEmpleado"
              id="FkEmpleado"
              v-model="form.fkEmpleado"
              aria-describedby="helpId"
              placeholder="FkEmpleado"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el id del empleado</small
            >
          </div>
          <div class="form-group">
            <label for="">FkRol:</label>
            <input
              type="text"
              class="form-control"
              name="FkRol"
              id="FkRol"
              v-model="form.fkRol"
              aria-describedby="helpId"
              placeholder="FkRol"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la id del Rol</small
            >
          </div>
         

          <br />

          <div class="btn-group" role="group">
            <button type="submit" class="btn btn-success" v-on:click="editar()">Editar</button>
            <router-link to="/dashboard" class="btn btn-danger"
              >Cancelar</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usuari: null,
      form:{
        "user":"",
        "password":"",
        "fechaRegistro":"",
        "fkEmpleado":"",
        "fkRol":"",
       
      }
    };
  },
  methods:{
    editar(){
     
      axios.put("https://localhost:7241/Usuarios/" + this.usuari, this.form)
      .then(data =>{
        console.log(data);
      });
      this.$router.push("/dashboard");
    }
  },
  mounted:function(){
    this.usuari = this.$route.params.pkUsuario;
    console.log(this.usuari);
    axios.get("https://localhost:7241/Usuarios/" + this.usuari)
    .then(datos =>{
      console.log(datos);
      this.form.user = datos.data.value.result.user;
      this.form.password = datos.data.value.result.password;
      this.form.fechaRegistro = datos.data.value.result.fechaRegistro;
      this.form.fkEmpleado = datos.data.value.result.fkEmpleado;
      this.form.fkRol = datos.data.value.result.fkRol;
      console.log(this.form);
    })
  }
};
</script>