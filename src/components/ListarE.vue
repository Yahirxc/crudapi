<template>

 
    <div>
      <div class="card">
        <router-link to="/crearE" class="btn btn-success">Crear Empleado</router-link>
        <div class="card-header">Empleados</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>pkEmpleado</th>
                <th>nombre</th>
                <th>apellidos</th>
                <th>direccion</th>
                <th>ciudad</th>
                <th>Fkpuesto</th>
                <th>fkDepartamento</th>
                <th>Eliminar</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              
                <tr v-for="empleado in empleado" :key="empleado.PkEmpleado" v-on:click="editar(empleado.pkEmpleado)">
                <td>{{ empleado.pkEmpleado }}</td>
                <td>{{ empleado.nombre }}</td>
                <td>{{ empleado.apellidos }}</td>
                <td>{{ empleado.direccion }}</td>
                <td>{{ empleado.ciudad }}</td>
                <td>{{ empleado.fkPuesto }}</td>
                <td>{{ empleado.fkDepartamento }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarempleado(empleado.pkEmpleado)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
                <td>
                  <router-link to="/editarE" class="btn btn-warning">Editar</router-link>
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
      empleado: [],
    };
  },
  created: function () {
    this.consultarempleado();
  },
  methods: {
    consultarempleado() {
      axios.get("https://localhost:7241/Empleado").then((result) => {
        console.log(result.data);
        this.empleado = result.data.result;
      });
    },
  
    borrarempleado(pkEmpleado) {
      console.log(pkEmpleado);
  
      axios.delete("https://localhost:7241/Empleado/" + pkEmpleado);
  
      window.location.href = "dashboard";
    },
    editar(pkEmpleado){
          this.$router.push("/editarE/" + pkEmpleado);
        }
  },
  };
  </script>