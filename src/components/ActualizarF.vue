<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar factura</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="">Razon social:</label>
              <input
                type="text"
                class="form-control"
                name="razonSocial"
                v-model="form.razonSocial"
                aria-describedby="helpId"
                id="razonSocial"
                placeholder="Razon social"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">fecha:</label>
              <input
                type="text"
                class="form-control"
                name="fecha"
                v-model="form.fecha"
                aria-describedby="helpId"
                id="fecha"
                placeholder="Fecha"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">RFC:</label>
              <input
                type="text"
                class="form-control"
                name="rfc"
                v-model="form.rfc"
                aria-describedby="helpId"
                id="rfc"
                placeholder="RFC"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="cliente">Cliente</label>
              <select class="form-control" name="cliente" id="cliente" v-model="form.fkCliente">
                <option v-for="cliente in cliente" :value="cliente.pkCliente" :key="cliente.pkCliente">{{cliente.nombre}}</option>
              </select>
            </div>
            <br />
  
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success" v-on:click="editar()">Editar</button>
              <router-link to="/fac" class="btn btn-danger"
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
        factura: null,
        form:{
          "razonSocial":"",
          "fecha":"",
          "rfc":"",
          "fkCliente":""
        },
        cliente:{}
      };
    },
    created: function () {
          this.consultar();
        },
    methods:{
      editar(){
        axios.put("https://localhost:7241/Factura/" + this.factura, this.form)
        .then(data =>{
          console.log(data);
        });
        this.$router.push("/fac");
      },
      consultar() {
              axios.get("https://localhost:7241/Cliente").then((result) => {
              console.log(result.data.result);
              this.cliente = result.data.result;});
            },
    },
    mounted:function(){
      this.factura = this.$route.params.pkFactura;
      console.log(this.factura);
      axios.get("https://localhost:7241/Factura/" + this.factura)
      .then(datos =>{
        console.log(datos);
        this.form.razonSocial = datos.data.value.result.razonSocial;
        this.form.fecha = datos.data.value.result.fecha;
        this.form.rfc = datos.data.value.result.rfc;
        this.form.fkCliente = datos.data.value.result.fkCliente;
        console.log(this.form);
      })
    }
  };
  </script>