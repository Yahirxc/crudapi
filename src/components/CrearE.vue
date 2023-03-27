<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Crear Usuario</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
  
                            <div class="form-group">
                                <label for="nombre">nombre:</label>
                                <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                                    placeholder="nombre" v-model="Empleado.nombre" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu nombre</small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="apellidos">Apellido:</label>
                                <input type="text" class="form-control" name="apellidos" id="apellidos"
                                    aria-describedby="helpId" placeholder="apellidos" v-model="Empleado.apellidos" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu apellido</small>
                            </div>
                        </div>
                        <div class="form-group">
                                <label for="direccion">direccion:</label>
                                <input type="text" class="form-control" name="direccion" aria-describedby="helpId" id="direccion"
                                    placeholder="direccion" v-model="Empleado.direccion" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu direccion</small>
                            </div>
                            <div class="form-group">
                                <label for="ciudad">ciudad:</label>
                                <input type="text" class="form-control" name="ciudad" aria-describedby="helpId" id="ciudad"
                                    placeholder="ciudad" v-model="Empleado.ciudad" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu ciudad</small>
                            </div>
  
                    </div>
                    <br>
                    <div class="row">
                        <div class="col">
  
                            <div class="form-group">
                                <label for="fkPuesto">fkpuesto:</label>
                                <input type="number" class="form-control" name="fkPuesto" id="fkPuesto"
                                    aria-describedby="helpId" placeholder="fkPuesto" v-model="Empleado.fkPuesto" />
                            </div>
                        </div>
                        <div class="col">
  
                            <div class="form-group">
                                <label for="fkDepartamento">fkDepartamento:</label>
                                <input type="number" class="form-control" name="fkDepartamento" id="fkDepartamento" aria-describedby="helpId"
                                    placeholder="fkDepartamento" v-model="Empleado.fkDepartamento" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'listarE' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'listarE' }" class="btn btn-outline-primary" id="finaliza" style="display: none;">Finalizar</router-link>
                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "crearEmpleado",
    components: {
  
    },
  
    data() {
        return {
            Empleado: {},
            smg: "",
        };
    },
    methods: {
        formulario() {
           
            var cuerpo = {
                nombre: this.Empleado.nombre,
                apellidos: this.Empleado.apellidos,
                direccion: this.Empleado.direccion,
                ciudad: this.Empleado.ciudad,
                fkPuesto: this.Empleado.fkPuesto,
                fkDepartamento: this.Empleado.fkDepartamento
            };
  
            axios.post("https://localhost:7241/Empleado", cuerpo).then((result) => {
  
                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display="none";
                    this.smg = "agregado exitosamente :D/";
                    document.getElementById('finaliza').style.display="block";
                    console.log(result);
                }
                window.location.href = "empleado";
  
            })
        }
    }
  }
  </script>
  
  <style scoped>
  label {
    font-weight: bold;
  }
  </style>