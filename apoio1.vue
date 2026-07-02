<script setup>
import { ref, onMounted } from 'vue';
const reg = ref({undefined});
const clientes = ref([]);

onMounted(() => {
    listarClientes();
});
function salvar(){
    fetch('http://localhost:3000/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg.value)
    })
    .then(res => res.json())
    .then(data => {
        alert('Cliente cadastrado com sucesso!');
        reg.value = undefined;
    });
}
function listarClientes(){
    fetch('http://localhost:3000/api/clientes').
    then(res => res.json()).
    then(data => {
        clientes.value = data;
    });
}
function excluirCliente(id){
    fetch(`http://localhost:3000/api/clientes/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        alert('Cliente excluído com sucesso!');
        listarClientes();
    });
}
function editarCliente(cliente){
    fetch(`http://localhost:3000/api/clientes/${cliente.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(res => res.json())
    .then(data => {
        alert('Cliente atualizado com sucesso!');
        listarClientes();
    });
}
</script>

<template>
    <h2>Cadastro Cliente</h2>
    <form v-if="reg!=undefined">
        <label>Nome: <input v-model="reg.nome" /> </label>
        <label>Email: <input v-model="reg.email" /></label>
        <label>Celular: <input v-model="reg.celular" /></label>
        <label>Cpf: <input v-model="reg.cpf" /></label>
        <label>Pix: <input v-model="reg.pix" /></label>
        <label>Gênero: <input v-model="reg.genero" /></label>
        <label>Data de Nascimento: <input v-model="reg.dataNascimento" /></label>

        <button type="button" @click="salvar()">Salvar</button>
        <button type="button" @click="reg = undefined; form1.reset()">Cancelar</button>
    </form>
    <button v-if="reg==undefined" @click="reg={}">Novo Cliente</button>
    <br><br>
    <h2>Lista de Clientes</h2>
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Cpf</th>
                <th>Pix</th>
                <th>Gênero</th>
                <th>Data de Nascimento</th>
                <th>Excluir</th>
                <th>Editar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cliente in clientes" :key="cliente.id">
                <td>{{ cliente.nome }}</td>
                <td>{{ cliente.email }}</td>
                <td>{{ cliente.celular }}</td>
                <td>{{ cliente.cpf }}</td>
                <td>{{ cliente.pix }}</td>
                <td>{{ cliente.genero }}</td>
                <td>{{ cliente.dataNascimento }}</td>
                <td><button @click="excluirCliente(cliente.id)">Excluir</button></td>
                <td><button @click="editarCliente(cliente)">Editar</button></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>
