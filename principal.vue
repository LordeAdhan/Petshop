<script setup>
import { ref, onMounted} from 'vue';
const clientes = ref([]);
const pets = ref([]);
const servicos = ref([]);

onMounted(() => {
  listarClientes();
  listarPets();
  listarServicos();
});

function listarClientes(){
  fetch('http://localhost:3000/api/clientes').
  then(res => res.json()).
  then(data => {
    clientes.value = data;
  });
}
function listarPets(){
  fetch('http://localhost:3000/api/cachorros').
  then(res => res.json()).
  then(data => {
    pets.value = data;
  });
}
function listarServicos(){
  fetch('http://localhost:3000/api/servicos').
  then(res => res.json()).
  then(data => {
    servicos.value = data;
  });
}

</script>

<template>
  <h2>Lista de Cliente</h2>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Telefone</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cliente in clientes" :key="cliente.id">
        <td>{{ cliente.nome }}</td>
        <td>{{ cliente.idade }}</td>
        <td>{{ cliente.telefone }}</td>
        <td>{{ cliente.email }}</td>
      </tr>
    </tbody>
  </table>
  <h2>Lista de Pets</h2>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Raça</th>
        <th>Cliente</th>
        <th>Gênero</th>
        <th>Pelagem</th>
        <th>Cor</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pet in pets" :key="pet.id">
        <td>{{ pet.nome }}</td>
        <td>{{ pet.idade }}</td>
        <td>{{ pet.raca }}</td>
        <td>{{ pet.cliente }}</td>
        <td>{{ pet.genero }}</td>
        <td>{{ pet.pelagem }}</td>
        <td>{{ pet.cor }}</td>
      </tr>
    </tbody>
  </table>
  <h2>Lista de Serviços</h2>
  <table>
    <thead>
      <tr>
        <th>Serviço</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="servico in servicos" :key="servico.id">
        <td>{{ servico.nome }}</td>
        <td>{{ servico.valor }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
