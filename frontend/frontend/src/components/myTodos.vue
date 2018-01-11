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
import Todo from '@/components/todo'
import axios from 'axios'

export default {
  name: 'myTodos',
  components: {
    Todo
  },
  data () {
    return {
      todos: [
        {
          title: 'AAAA',
          content: 'aaaa'
        },
        {
          title: 'BBBB',
          content: 'bbbb'
        },
        {
          title: 'CCCC',
          content: 'cccc'
        }
      ]
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
