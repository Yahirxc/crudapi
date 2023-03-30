
<script setup>

  import ListarD from "../components/ListarD.vue"
  </script>
<template>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Locatielezen Administrator page</title>
    <link rel="stylesheet" href="normalize.css" charset="utf-8" />
    <link rel="stylesheet" href="admin--test.css" charset="utf-8" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  </head>
  <body class="admin">

    <header class="admin__statusbar flex--center">
      <span class="home"><i class="fa fa-home"></i>Home</span>
      <span id="username"><i class="fa fa-user"></i>Tycho Atsma</span>
    </header>

    <nav class="admin__sidepanel">
      <ul>
        <li>
          <RouterLink to="/dashboard">Usuario</RouterLink>
        </li>
        <li>
          <RouterLink to="/empleado">Empleado</RouterLink>
        </li>
        <li>
          <RouterLink to="/cliente">cliente</RouterLink>
        </li>
        <li>
          <RouterLink to="/depa">Departamento</RouterLink>
        </li>
        <li>
          <RouterLink to="/rol">Rol</RouterLink>
        </li>
        <li>
            <RouterLink to="/puesto">puesto</RouterLink>
        </li>
        <li>
            <RouterLink to="/fac">factura</RouterLink>
        </li>
      </ul>
    </nav>
    <div id="dashboard">
        <main>
		<ListarD/>
        
	</main>
    </div>



  </body>
</html>

  </template>
  
  <style>
  #dashboard>div {
	border: 1px solid rgb(235,235,235);
	margin-left: 30px;
	border-radius: 5px;
	/* min-width: 345px; */
  width: 100%;
	height: 526px;
	display: table;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  min-height: 100%;
  height: 100%;
  width: 100%;
  position: relative;

  font-size: 16px;
  font-family: sans-serif;
  background: rgba(255, 255, 255, 0.1);
}

ul {
  list-style-type: none;
}

i {
  width: 16px;
}

/*
############### ANIMATION #################
*/

.admin__sidepanel ul li {
  transition: background .3s ease-in-out;
}

/*
############### FLEX #################
*/

.flex,
.flex--center,
.admin__sidepanel ul li {
  display: flex;
  display: -webkit-flex;
}

.flex--center, .admin__sidepanel ul li {
  align-items: center;
  -webkit-align-items: center;
}

/*
################ STATUSBAR ##############
*/

.admin__statusbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 35px;
  padding: 0 25px;
  background: rgb(60, 55, 53);
}

.admin__statusbar span {
  font-weight: lighter;
  color: rgb(255, 255, 255);
}

.admin__statusbar span i {
  margin-right: 1em;
}

.admin__statusbar #username {
  margin-left: auto;
}

/*
##################### SIDEPANEL ################
*/

.admin__sidepanel {
  position: fixed;
  top: 35px;
  left: 0;
  z-index: 999;
  width: 200px;
  height: 100%;
  padding: 25px 0;
  background: rgb(60, 55, 53);
}

.admin__sidepanel ul li {
  width: 100%;
  height: 70px;
  padding-left: 25px;
  font-size: 1em;
  font-weight: lighter;
  color: lightgrey;
}

.admin__sidepanel ul li:hover {
  background: #666;
  cursor: pointer;
}

.admin__sidepanel ul li i {
  margin-right: 1em;
}

/*
##################### MAIN ################
*/

.admin__main {
  position: relative;
  top: 55px;
  left: 220px;
  width: 1040px;
  height: 100%;
  padding: 2em;

  background: white;
  box-shadow: 0 2px 1px rgba(250, 250, 250, 0.1);
  text-align: center;
}

.admin__main h1 {
  font-weight: lighter;
  font-size: 3em;
}

  
  </style>
