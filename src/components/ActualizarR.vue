<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Departamento2</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="form.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
           
  
            <br />
  
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success" v-on:click="editar(pkDepartamento)">Editar</button>
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
  import {RouterView} from 'vue-router';
  export default {
    data() {
      return {
        depa: null,
        form:{
          "nombre":"",
          
        }
      };
    },
    methods:{
      editar(){
        axios.put("https://localhost:7241/Departamento" + this.depa, this.form)
        .then(data =>{
          console.log(data);
        });
        this.$router.push("/ListarD");
      }
    },
    mounted:function(){
      this.depa = this.$route.params.pkDepartamento;
      console.log(this.cliente);
      axios.get("https://localhost:7241/Departamento/" + this.depa)
      .then(datos =>{
        console.log(datos);
        this.form.nombre = datos.data.value.result.nombre;
        
        console.log(this.form);
      })
    }
  };
  </script>