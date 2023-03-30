<template>

 
  <div>
    <div class="card">
      <router-link to="/crear" class="btn btn-success">Crear Usuario</router-link>
      <div class="card-header">Usuarios</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>PkUsuario</th>
              <th>User</th>
              <th>Password</th>
              <th>FechaRegistro</th>
              <th>FkEmpleado</th>
              <th>FkRol</th>
              <th>Eliminar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            
              <tr v-for="Usuarios in Usuarios" :key="Usuarios.PkUsuario" v-on:click="editar(Usuarios.pkUsuario)">
              <td>{{ Usuarios.pkUsuario }}</td>
              <td>{{ Usuarios.user }}</td>
              <td>{{ Usuarios.password }}</td>
              <td>{{ Usuarios.fechaRegistro }}</td>
              <td>{{ Usuarios.fkEmpleado }}</td>
              <td>{{ Usuarios.fkRol }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button
                    type="button"
                    v-on:click="borrarUsuario(Usuarios.pkUsuario)"
                    class="btn btn-danger"
                  >
                    Eliminar</button
                  >|
                </div>
              </td>
              <td>
                <router-link to="/editaru" class="btn btn-warning">Editar</router-link>
              </td>
            </tr>


           
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>

.card {
 
 
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  width: 1200px;
  

  
}
.boton {
 
 
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
 width: 10000000000px;
 

 
}









</style>

<script>
import axios from "axios";
export default {
data() {
  return {
    Usuarios: [],
  };
},
created: function () {
  this.consultarUsuarios();
},
methods: {
  consultarUsuarios() {
    axios.get("https://localhost:7241/Usuarios").then((result) => {
      console.log(result.data);
      this.Usuarios = result.data.result;
    });
  },

  borrarUsuario(pkUsuario) {
    console.log(pkUsuario);

    axios.delete("https://localhost:7241/Usuarios/" + pkUsuario);

    window.location.href = "dashboard";
  },
  editar(pkUsuario){
          this.$router.push("/editaru/" + pkUsuario);
   }
},
};
</script>