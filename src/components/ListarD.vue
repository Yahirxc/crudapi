<template>
    <div>
      <div class="card">
        <router-link to="/crearD" class="btn btn-success">Crear Departamento</router-link>
        <div class="card-header">Departamento</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>PkDepartamento</th>
                <th>Nombre</th>
                <th>Eliminar</th>
                <th>Editar</th>
               
              </tr>
            </thead>
            <tbody>
              
                <tr v-for="depa in depa" :key="depa.PkDepartamento">
                    <td>{{ depa.pkDepartamento }}</td>
                    <td>{{ depa.nombre }}</td>
                    
               
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarDepartamento(depa.pkDepartamento)"
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
        depa: [],
      };
    },
    created: function () {
      this.consultardepa();
    },
    methods: {
      consultardepa() {
        axios.get("https://localhost:7241/Departamento").then((result) => {
          console.log(result.data.result);
          this.depa = result.data.result;
        });
      },
  
      borrarDepartamento(pkDepartamento) {
        console.log(pkDepartamento);
  
        axios.delete("https://localhost:7241/Departamento/" + pkDepartamento);
        // console.log(result.data.result);
        window.location.href = "depa";
      },
      
    },
  };
  </script>