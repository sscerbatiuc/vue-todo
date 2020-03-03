<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="container">
        <div class="row">
            <img class="center" :src="logo" alt="Vue logo"/>
        </div>
        <div class="row">
            <h1 class="center">To-Do Vue</h1>
        </div>
        <ToDoItem v-for="(todo, index) in list"
                  :todo="todo"
                  @delete="onRemove"
                  :key="index"/>
        <hr/>
        <div class="row">
            <b-input-group>
                <template v-slot:append>
                    <b-button variant="success" @click="createNewToDoItem()">Add</b-button>
                </template>
                <b-form-input placeholder="To do..." v-model="todo" v-on:keyup.enter="createNewToDoItem"></b-form-input>
            </b-input-group>
        </div>
    </div>
</template>

<script>
    import ToDoItem from './components/ToDoItem.vue'
    import {BInputGroup, BFormInput} from 'bootstrap-vue';
    import Logo from './assets/logo.png';


    export default {
        name: 'main-page',
        components: {
            ToDoItem,
            BInputGroup,
            BFormInput
        },
        data() {
            return {
                list: [
                    {
                        text: 'Learn Vue.js'
                    },
                    {
                        text: 'Build a to-do app using Vue'
                    }
                ],
                todo: '',
                logo: Logo
            }
        },

        methods: {
            createNewToDoItem() {
                this.list.push({ text: this.todo});
                this.todo = '';
            },

            onRemove(removed) {
                this.list = this.list.filter(item => item !== removed);
            }

        },
    }
</script>

<style>

    .center {
        margin: 0 auto;
    }
</style>