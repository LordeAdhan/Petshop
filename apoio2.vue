<script setup>
import { ref, onMounted } from 'vue';
const reg = ref({undefined});
const pets = ref([]);
onMounted(() => {
    listarPets();
});
function salvar(){
    fetch('http://localhost:3000/api/cachorros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg.value)
    })
    .then(res => res.json())
    .then(data => {
        alert('Cachorro cadastrado com sucesso!');
        reg.value = undefined;
    });
}
function listarPets(){
    fetch('http://localhost:3000/api/cachorros').
    then(res => res.json()).
    then(data => {
        pets.value = data;
    });
}
function excluirPet(id){
    fetch(`http://localhost:3000/api/cachorros/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        alert('Cachorro excluído com sucesso!');
        listarPets();
    });
}
function editarPet(pet){
    fetch(`http://localhost:3000/api/cachorros/${pet.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet) 
    })
    .then(res => res.json())
    .then(data => {
        alert('Cachorro editado com sucesso!');
        listarPets();
    });
}
</script>

<template>
  <h2>Cadastro Cachorro</h2>
  <form v-if="reg!=undefined">
    <label>Nome: <input v-model="reg.nome" /> </label>
    <label>Gênero: <input v-model="reg.genero" /></label>
    <label>Pelagem: <input v-model="reg.pelagem" /></label>
    <label>Cor: <input v-model="reg.cor" /></label>
    <label>Raça: <input v-model="reg.raca" /></label>
    <br>
    <button type="button" @click="salvar()">Salvar</button>
    <button type="button" @click="reg=undefined; form1.reset()">Cancelar</button>
  </form>
  <button v-if="reg==undefined" @click="reg={}">Novo Cachorro</button>
  <br><br>
  <h2>Lista de Cachorros</h2>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Gênero</th>
        <th>Pelagem</th>
        <th>Cor</th>
        <th>Raça</th>
        <th>Excluir</th>
        <th>Editar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pet in pets" :key="pet.id">
        <td>{{ pet.nome }}</td>
        <td>{{ pet.genero }}</td>
        <td>{{ pet.pelagem }}</td>
        <td>{{ pet.cor }}</td>
        <td>{{ pet.raca }}</td>
        <td><button @click="excluirPet(pet.id)">Excluir</button></td>
        <td><button @click="editarPet(pet)">Editar</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
