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
                                    placeholder="nombre" v-model="cliente.nombre" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu nombre</small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="apellidos">Apellido:</label>
                                <input type="text" class="form-control" name="apellidos" id="apellidos"
                                    aria-describedby="helpId" placeholder="apellidos" v-model="cliente.apellido" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu apellido</small>
                            </div>
                        </div>
                        <div class="form-group">
                               
                            </div>
                            <div class="form-group">
                                <label for="ciudad">telefono:</label>
                                <input type="text" class="form-control" name="ciudad" aria-describedby="helpId" id="ciudad"
                                    placeholder="ciudad" v-model="cliente.telefono" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu ciudad</small>
                            </div>
                            <div class="form-group">
                                <label for="ciudad">Email:</label>
                                <input type="text" class="form-control" name="ciudad" aria-describedby="helpId" id="ciudad"
                                    placeholder="ciudad" v-model="cliente.email" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu ciudad</small>
                            </div>
                            <div class="form-group">
                                <label for="ciudad">Direccion:</label>
                                <input type="text" class="form-control" name="ciudad" aria-describedby="helpId" id="ciudad"
                                    placeholder="ciudad" v-model="cliente.direccion" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu ciudad</small>
                            </div>
  
                    </div>
                    <br>
                  
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'listarC' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'listarC' }" class="btn btn-outline-primary" id="finaliza" style="display: none;">Finalizar</router-link>
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
    name: "crearcliente",
    components: {
  
    },
  
    data() {
        return {
            cliente: {},
            smg: "",
        };
    },
    methods: {
        formulario() {
           
            var cuerpo = {
                nombre: this.cliente.nombre,
                apellido: this.cliente.apellido,
                telefono: this.cliente.telefono,
                email: this.cliente.email,
                direccion: this.cliente.direccion,
            };
  
            axios.post("https://localhost:7241/Cliente", cuerpo).then((result) => {
  
                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display="none";
                    this.smg = "agregado exitosamente :D/";
                    document.getElementById('finaliza').style.display="block";
                    console.log(result);
                }
                window.location.href = "cliente";
  
            })
        }
    }
  }
  </script>