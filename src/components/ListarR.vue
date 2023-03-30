<template>
    <div>
      <div class="card">
        <router-link to="/crearR" class="btn btn-success">Crear rol</router-link>
        <div class="card-header">rol</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>PkRol</th>
                <th>Nombre</th>
                <th>Eliminar</th>
                <th>Editar</th>
               
              </tr>
            </thead>
            <tbody>
              
                <tr v-for="rol in rol" :key="rol.PkRol" v-on:click="editar(rol.pkRol)">
                    <td>{{ rol.pkRol }}</td>
                    <td>{{ rol.nombre }}</td>
                    
               
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrar(rol.pkRol)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
                <td>
                  <router-link to="/editarD" class="btn btn-warning">Editar</router-link>
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
  import {RouterView} from 'vue-router';
  export default {
    data() {
      return {
        rol: [],
      };
    },
    created: function () {
      this.consultarrol();
    },
    methods: {
      consultarrol() {
        axios.get("https://localhost:7241/Rol").then((result) => {
          console.log(result.data.result);
          this.rol = result.data.result;
        });
      },
  
      borrar(pkRol) {
        console.log(pkRol);
  
        axios.delete("https://localhost:7241/Rol/" + pkRol);
        // console.log(result.data.result);
        window.location.href = "rol";
      },
      editar(pkRol){
          this.$router.push("/editarR/" + pkRol);
        }
      
    },
  };
  </script>