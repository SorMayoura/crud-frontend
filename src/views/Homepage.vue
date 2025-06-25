<template>
  <h2>Form Example</h2>
  <input v-model="username" placeholder="Enter your name" >
  <p>Your name is: {{username}}</p>
</template>

<script>
export default {
  data(){
    return{
      username: ''
    }
  }
}
</script>