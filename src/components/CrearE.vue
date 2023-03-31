<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Empleado</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="empleado.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <div class="form-group">
              <label for="">apellidos:</label>
              <input
                type="text"
                class="form-control"
                name="apellidos"
                v-model="empleado.apellido"
                aria-describedby="helpId"
                id="apellidos"
                placeholder="Apellidos"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div><div class="form-group">
              <label for="">Direccion:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                v-model="empleado.direccion"
                aria-describedby="helpId"
                id="direccion"
                placeholder="Direccion"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div><div class="form-group">
              <label for="">Ciudad:</label>
              <input
                type="text"
                class="form-control"
                name="ciudad"
                v-model="empleado.ciudad"
                aria-describedby="helpId"
                id="ciudad"
                placeholder="ciudad"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
              <div class="form-group">
         
              <label for="puesto">Puesto</label>
              <select class="form-control" name="puesto" id="puesto" v-model="empleado.fkPuesto">
                <option v-for="puesto in puesto" :value="puesto.pkpuesto" :key="puesto.pkpuesto">{{puesto.nombre}}</option>
              </select>
            </div>
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            <div class="form-group">
              <label for="departamento">Departamento</label>
              <select class="form-control" name="departamento" id="departamento" v-model="empleado.fkDepartamento">
                <option v-for="departamento in departamento" :value="departamento.pkDepartamento" :key="departamento.pkDepartamento">{{departamento.nombre}}</option>
              </select>
          
            </div>
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <br />
  
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success">Agregar</button>
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
        empleado: {
          "pkEmpleado":"",
          "nombre":"",
          "apellido":"",
          "direccion":"",
          "ciudad":"",
          "fkPuesto":"",
          "fkDepartamento":""
        },
        departamento: {},
        puesto: {}
      };
    },
    created: function () {
        this.consultarPuesto();
        this.consultarDepartamento();    
    },
    methods: {
      agregarRegistro() {
        console.log(this.empleado);
  
        var datosEnviar = {
          nombre: this.empleado.nombre,
          apellido: this.empleado.apellido,
          direccion: this.empleado.direccion,
          ciudad: this.empleado.ciudad,
          fkPuesto: this.empleado.fkPuesto,
          fkDepartamento: this.empleado.fkDepartamento
        };
  
        axios
          .post("https://localhost:7241/Empleado", datosEnviar)
          .then((result) => {
            console.log(result.data.result);
            window.location.href = "empleado";
          });
      },
      consultarDepartamento() {
             axios.get("https://localhost:7241/Departamento").then((result) => {
               console.log(result.data.result);
               this.departamento = result.data.result;});
              },
              consultarPuesto() {
                axios.get("https://localhost:7241/Puesto").then((result) => {
                  console.log(result.data.result);
                  this.puesto = result.data.result;});
                },
    },
  };
  </script>