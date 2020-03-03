<template>
    <div class="row">
        <div class="col-lg-11">
            <p>{{todo.text}}</p>
        </div>
        <div class="col-lg-1">
            <b-button variant="danger" @click="deleteItem(todo)">Delete</b-button>
        </div>
    </div>
</template>

<script>
    import {BButton} from 'bootstrap-vue'

    export default {
        name: "to-do-item",
        components: {
            BButton
        },
        props: ['todo'],
        methods: {
            deleteItem(todo) {
                this.$emit('delete', todo)
            }
        }
    }
</script>

<style>

</style>