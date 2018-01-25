<template>
  <div id="todoList">
    <div class="row">
      <div class="col s6">
        <p>TITRE</p>
      </div>
      <div class="col s6">
        <p>ACTION</p>
      </div>
    </div>
    <todo v-for="(todo,key) in todos" :title="todo.title" :content="todo.content" :key="key" :index="key" :todosList="todos"></todo>
  </div>
</template>

<script>
import Todo from '@/components/todo'
import axios from 'axios'

export default {
  name: 'myTodos',
  components: {
    Todo
  },
  data () {
    return {
      todos: []
    }
  },
  created () {
    axios.get('http://localhost:3000/', {withCredentials: true})
      .then(response => {
        this.todos = response.data.todos
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
p {
  font-weight: bold !important;
}
#todoList {
  margin-left: 10%;
  margin-right: 10%;
}
</style>
