<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar usuario</div>
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
        "User":"",
        "Password":"",
        "FkEmpleado":"",
        "FkRol":"",
       
      }
    };
  },
  methods:{
    editar(){
      this.usuari = this.$route.params.pkUsuario;
      axios.put("https://localhost:7241/Usuarios/" + this.usuari, this.form)
      .then(data =>{
        console.log(data);
      });
      this.$router.push("/dashboard");
    }
  },
  mounted:function(){
    this.usuari = this.$route.params.pkUsuario;
    console.log(this.usuario);
    axios.get("https://localhost:7241/Usuarios/" + this.usuari)
    .then(datos =>{
      console.log(datos);
      this.form.User = datos.data.value.result.User;
      this.form.Password = datos.data.value.result.Password;
      this.form.FkEmpleado = datos.data.value.result.FkEmpleado;
      this.form.FkRol = datos.data.value.result.FkRol;
      console.log(this.form);
    })
  }
};
</script>