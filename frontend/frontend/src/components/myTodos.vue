<template>
  <table>
    <thead>
      <tr>
        <th>Titre</th>
        <th>Contenu</th>
      </tr>
    </thead>
    <tbody>
      <todo v-for="(todo,key) in todos" :title="todo.title" :content="todo.content" :key="key"></todo>
    </tbody>
  </table>
</template>

<script>
import todo from '@/components/todo'
import axios from 'axios'

export default {
  name: 'myTodos',
  components: {
    todo
  },
  data () {
    return {
      todos: []
    }
  },
  created () {
    axios.get('http://localhost:3000/')
      .then(response => {
        console.log(response.data.todos)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
