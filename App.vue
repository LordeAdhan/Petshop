<script setup>

</script>

<template>
  <h1> Petshop Info <div style="flex-grow: 1"></div>
    <router-link to="/">Principal</router-link>
    <router-link to="/cadastroCliente">Cadastro Cliente</router-link>
    <router-link to="/cadastroPet">Cadastro Pet</router-link>
    <router-link to="/cadastroServico">Cadastro Serviço</router-link>
  </h1>
  <router-view></router-view>
</template>

<style scoped>
  h1{
    display: flex;
    color: darkgreen;
    width: 100%;
    margin: 0;
    background-color: lightgray;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
  a{
    background-color: darkgreen;
    color: white;
    padding: 0.5em;
    margin-right: 1em;
    text-decoration: none;
    border-bottom: 5px solid darkgreen;
    font-size: 0.5em;
  }
  a:hover{
    border-bottom: 5px solid lightgreen;
  }
</style>
