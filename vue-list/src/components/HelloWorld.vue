<template>
  <div class="hello">
    <h1>Messages</h1>
    <div v-if="messages.length > 0">
      <p v-for="message in messages" v-bind:key="message">
        {{ message }}
      </p>
    </div>
    <input type="text" name="message" id="message" v-model="txtInput">
    <input type="button" value="Add Msg" @click="addMessage">
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../store';
export default {
  name: 'HelloWorld',
  data() {
    return {
      txtInput: ''
    }
  },
  computed: {
    ...mapState([
      'messages'
    ])
  },
  methods: {
    addMessage() {
      store.dispatch('addMessage',this.txtInput);
      this.txtInput = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
