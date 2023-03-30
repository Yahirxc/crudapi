<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Actualizar Empleado</div>
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
                >Ingresa el nombre del Empleado</small
              >
            </div>
            <div class="form-group">
              <label for="">Apellido:</label>
              <input
                type="text"
                class="form-control"
                name="apellido"
                id="apellido"
                v-model="form.apellido"
                aria-describedby="helpId"
                placeholder="Apellido"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del apellido</small
              >
            </div>
           
            <div class="form-group">
              <label for="">direccion:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="form.direccion"
                aria-describedby="helpId"
                placeholder="direccion"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la direccion</small
              >
            </div>
            <div class="form-group">
              <label for="">ciudad:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="form.ciudad"
                aria-describedby="helpId"
                placeholder="ciudad"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la ciudad del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">Puesto:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                id="direccion"
                v-model="form.fkPuesto"
                aria-describedby="helpId"
                placeholder="Puesto"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el puesto</small
              >
            </div>

            <div class="form-group">
              <label for="puesto">Puesto</label>
              <select class="form-control" name="puesto" id="puesto" v-model="form.fkPuesto">
                <option v-for="puesto in puesto" :value="puesto.pkpuesto" :key="puesto.pkpuesto">{{puesto.nombre}}</option>
              </select>
              <small id="helpId" class="form-text" text-muted
                >Ingresa el Departamento</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success" v-on:click="editar()">Editar</button>
              <router-link to="/empleado" class="btn btn-danger"
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
        empleado: null,
        form:{
          "nombre":"",
          "apellido":"",
          "direccion":"",
          "ciudad":"",
          "fkPuesto":"",
          "fkDepartamento":""
        }
      };
    },
    methods:{
      editar(){
        axios.put("https://localhost:7241/Empleado/" + this.empleado, this.form)
        .then(data =>{
          console.log(data);
        });
        this.$router.push("/empleado");
      },
      consultarPuesto() {
                axios.get("https://localhost:7241/Puesto").then((result) => {
                  console.log(result.data.result);
                  this.puesto = result.data.result;});
                }
    },
    mounted:function(){
      this.empleado = this.$route.params.pkEmpleado; n  
      console.log(this.empleado);
      axios.get("https://localhost:7241/Empleado/" + this.empleado )
      .then(datos =>{
        console.log(datos);
        this.form.nombre = datos.data.value.result.nombre;
        this.form.apellido = datos.data.value.result.apellidos;
        this.form.direccion = datos.data.value.result.direccion;
        this.form.ciudad = datos.data.value.result.ciudad;
        this.form.fkPuesto = datos.data.value.result.fkPuesto;
        this.form.fkDepartamento = datos.data.value.result.fkDepartamento;
        console.log(this.form);
      })
    }
  };
  </script>