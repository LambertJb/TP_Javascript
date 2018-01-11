<template>
  <div class="row" id="myForm">
    <router-link to="/" tag="button">Retour à l'accueil</router-link>
    <div class="col offset-s3 s6">
      <input type="text" id="title" v-model="title"/>
      <label for="title">Titre</label>

      <textarea v-model="content"></textarea>
      <label for="content">Contenu</label>

      <button type="button" @click="submitForm">Soumettre</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'myForm',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submitForm () {
      var params = new URLSearchParams()
      params.append('title', this.title)
      params.append('content', this.content)
      axios.post('http://localhost:3000/ajouter', params, {withCredentials: true})
    }
  }
}
</script>

<style>
#myForm {
  min-height: 500px;
}
</style>
