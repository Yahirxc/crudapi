<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Crear Usuario</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
  
                            <div class="form-group">
                                <label for="user">razonSocial:</label>
                                <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                    placeholder="usuario" v-model="fac.razonSocial" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu correo electronico</small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="password">Rfc:</label>
                                <input type="text" class="form-control" name="password" id="password"
                                    aria-describedby="helpId" placeholder="password" v-model="fac.rfc" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small>
                            </div>
                        </div>
  
                    </div>
                    <br>
                    <div class="row">
                        <div class="col">
  
                            <div class="form-group">
                                <label for="fkEmpleado">fkCliente:</label>
                                <input type="number" class="form-control" name="fkEmpleado" id="fkEmpleado"
                                    aria-describedby="helpId" placeholder="fkEmpleado" v-model="fac.fkCliente" />
                            </div>
                        </div>
                        <div class="col">
  
                            
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'listar' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'listar' }" class="btn btn-outline-primary" id="finaliza" style="display: none;">Finalizar</router-link>
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
    name: "crearUser",
    components: {
  
    },
  
    data() {
        return {
            fac: {},
            smg: "",
        };
    },
    methods: {
        formulario() {
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            var cuerpo = {
                razonSocial: this.fac.razonSocial,
                fecha: hoy.toISOString(),
                rfc: this.fac.rfc,
                fkCliente: this.fac.fkCliente
            };
  
            axios.post('https://localhost:7241/Factura', cuerpo).then((result) => {
  
                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display="none";
                    this.smg = "agregado exitosamente :D/";
                    document.getElementById('finaliza').style.display="block";
                    console.log(result);
                }
                window.location.href = "fac";
  
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