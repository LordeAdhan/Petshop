<script setup>
import { ref, onMounted } from 'vue';
const reg = ref({undefined});
const servicos = ref([]);
onMounted(() => {
    listarServicos();
});
function salvar(){
    fetch('http://localhost:3000/api/servicos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg.value)
    })
    .then(res => res.json())
    .then(data => {
        alert('Serviço cadastrado com sucesso!');
        reg.value = undefined;
    });
}
function listarServicos(){
    fetch('http://localhost:3000/api/servicos').  
    then(res => res.json()).
    then(data => {
        servicos.value = data;
    });
}
function excluirServico(id){
    fetch(`http://localhost:3000/api/servicos/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        alert('Serviço excluído com sucesso!');
        listarServicos();
    });
}
function editarServico(servico){
    fetch(`http://localhost:3000/api/servicos/${servico.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(servico)
    })
    .then(res => res.json())
    .then(data => {
        alert('Serviço atualizado com sucesso!');
        listarServicos();
    });
}
</script>

<template>
  <h2> Cadastro de Serviços</h2>
  <form v-if="reg!=undefined">
    <label>Nome: <input v-model="reg.nome" /> </label>
    <label>Valor: <input v-model="reg.valor" /></label>
    <br>
    <button type="button" @click="salvar()">Salvar</button>
    <button type="button" @click="reg=undefined; form1.reset()">Cancelar</button>
  </form>
  <button v-if="reg==undefined" @click="reg={}">Novo Serviço</button>
  <br><br>
  <h2>Lista de Serviços</h2>
  <table>
    <thead>
      <tr>
        <th>Serviço</th>
        <th>Valor</th>
        <th>Excluir</th>
        <th>Editar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="servico in servicos" :key="servico.id">
        <td>{{ servico.nome }}</td>
        <td>{{ servico.valor }}</td>
        <td><button @click="excluirServico(servico.id)">Excluir</button></td>
        <td><button @click="reg=servico">Editar</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
