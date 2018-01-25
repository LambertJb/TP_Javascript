<template>
  <div>
    <nav>
      <router-link to="/">Retour à l'accueil</router-link>
    </nav>
    <div class="row">
      <div class="col offset-s3 s6">
        <input type="text" id="title" v-model="title"/>
        <label for="title">Titre</label>

        <textarea id="textarea" v-model="content"></textarea>
        <label for="content">Contenu</label>
      </div>
    </div>
  <button type="button" @click="submitForm">Soumettre</button>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router/index.js'

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
        .then(response => {
          router.push('/')
        })
    }
  }
}
</script>

<style>
#textarea {
  height: 7rem !important;
}
nav {
  margin-bottom: 20px;
}
</style>
