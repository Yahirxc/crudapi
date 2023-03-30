<template>

 
    <div>
      <div class="card">
        <router-link to="/crearF" class="btn btn-success">Crear Usuario</router-link>
        <div class="card-header">Usuarios</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>PkUsuario</th>
                <th>razonSocial</th>
                <th>fecha</th>
                <th>rfc</th>
                <th>fkCliente</th>
            
                <th>Eliminar</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              
                <tr v-for="fac in fac" :key="fac.PkFactura" v-on:click="editar(fac.pkFactura)">
                <td>{{ fac.pkFactura }}</td>
                <td>{{ fac.razonSocial }}</td>
                <td>{{ fac.fecha }}</td>
                <td>{{ fac.rfc}}</td>
                <td>{{ fac.fkCliente }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrar(fac.pkFactura)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
                <td>
                  <router-link to="/editarF" class="btn btn-warning">Editar</router-link>
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
      fac: [],
    };
  },
  created: function () {
    this.consultar();
  },
  methods: {
    consultar() {
      axios.get("https://localhost:7241/Factura").then((result) => {
        console.log(result.data);
        this.fac = result.data.result;
      });
    },
  
    borrarUsuario(pkFactura) {
      console.log(pkFactura);
  
      axios.delete("https://localhost:7241/Factura/" + pkFactura);
  
      window.location.href = "fac";
    },
    editar(pkFactura){
          this.$router.push("/editarF/" + pkFactura);
    }
  },
  };
  </script>