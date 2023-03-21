<template>
    <div>
      <div class="card">
        <div class="card-header">Articulos</div>
  
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
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Usuarios in Usuarios" :key="Usuarios.PkUsuario">
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
                      v-on:click="borrarUsuario(Usuarios.PkUsuario)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

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

    borrarUsuario(id) {
      console.log(id);

      axios.delete("https://localhost:7241/Usuarios/borrar/" + id);

      window.location.href = "Listar";
    },
  },
};
</script>