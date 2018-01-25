<template>
  <div id="seeContent">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <p>{{content}}</p>
            </div>
          </div>
        </div>
      </div>
      <router-link :to="{path: '/'}" >Retour à l'accueil !</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'seeContent',
  data () {
    return {
      title: undefined,
      content: undefined
    }
  },
  created () {
    axios.get('http://localhost:3000/getTodoById/' + this.$route.params.id, {withCredentials: true})
    .then(response => {
      this.title = response.data.title
      this.content = response.data.content
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
#seeContent {
  margin-top: 30%;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
