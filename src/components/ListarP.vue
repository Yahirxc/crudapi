<template>
    <div>
      <div class="card">
        <router-link to="/crearP" class="btn btn-success">Crear Puesto</router-link>
        <div class="card-header">puesto</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>PkPuesto</th>
                <th>Nombre</th>
                <th>Eliminar</th>
                <th>Editar</th>
               
              </tr>
            </thead>
            <tbody>
              
                <tr v-for="puesto in puesto" :key="puesto.PkPuesto" v-on:click="editar(puesto.pkpuesto)">
                    <td>{{ puesto.pkpuesto }}</td>
                    <td>{{ puesto.nombre }}</td>
                    
               
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrar(puesto.pkpuesto)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
                <td>
                  <router-link to="/editarP" class="btn btn-warning">Editar</router-link>
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
        puesto: [],
      };
    },
    created: function () {
      this.consultar();
    },
    methods: {
      consultar() {
        axios.get("https://localhost:7241/Puesto").then((result) => {
          console.log(result.data.result);
          this.puesto = result.data.result;
        });
      },
  
      borrar(pkpuesto) {
        console.log(pkpuesto);
  
        axios.delete("https://localhost:7241/Puesto/" + pkpuesto);
        // console.log(result.data.result);
        window.location.href = "puesto";
      },
      editar(pkpuesto){
          this.$router.push("/editarP/" + pkpuesto);
        }
      
    },
  };
  </script>