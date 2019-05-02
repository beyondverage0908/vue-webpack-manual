import Vue from 'vue'
import router from './router'
import App from './app.vue'
import './assets/images/bg.png'
import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)