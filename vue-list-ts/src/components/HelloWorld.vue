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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '../store';
import { Getter } from 'vuex-class';

@Component
export default class HelloWorld extends Vue {
  // private messages: string[] = ['test','test2']
  @Getter messages!: string[];
  private txtInput: string = '';

  addMessage(): void {
    store.dispatch('addMessage', this.txtInput);
    this.txtInput = '';
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
