<template>
  <div class="hello">
    <h1>{{ fromTS }}</h1>
  <button @click="clicked()">Click</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private msg: string = 'Hello';

  get fromTS(): string {
    return `${this.msg} from TS`;
  }

  private clicked(): void {
    // tslint:disable-next-line:no-console
    console.log('clicked in TS');
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
