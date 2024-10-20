import { createApp } from 'vue'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMastodon } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faMastodon)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
