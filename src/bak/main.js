/*import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // render: h => h(App)
  render: h=>h("div", "hello world，这是啥")
})
*/
import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'

new Vue({
  el:'#app',
  ...Test,
})