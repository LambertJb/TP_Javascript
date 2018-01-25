<template>
  <div class="row">
    <div class="col s6">
      <br>
      {{ title }}
    </div>

    <div class="col s6">
      <p>
        <router-link :to="{ name: 'seeContent', params: { id: this.index }}"><img src="https://image.flaticon.com/icons/svg/70/70376.svg" alt="Icone voir details todo"></router-link>
        <a href='#'><img src="https://image.flaticon.com/icons/svg/684/684831.svg" alt="Icone modifier todo"></a>
        <a href='#' v-on:click.prevent="deleteTodo(todosList,index)"><img src="https://image.flaticon.com/icons/svg/151/151882.svg" alt="Icone supprimer todo"></a>
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Todo',
  props: [
    'index',
    'todosList',
    'title',
    'content'
  ],
  data () {
    return {}
  },
  methods: {
    deleteTodo (todosList, id) {
      axios.delete('http://localhost:3000/supprimer/' + id, {withCredentials: true})
      .then(response => {
        if (response.data) {
          todosList.splice(id, 1)
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>
.row {
  border-bottom: 1px ridge grey;
}
img {
  height: 30px;
  width: 30px;
}
</style>
