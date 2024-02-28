import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActorView from '../views/ActorView.vue'
import ArtistView from '../views/ArtistView.vue'
import ProductView from '../views/ProductView.vue'
import ReviewView from '../views/ReviewView.vue'
import NoticeView from '../views/NoticeView.vue'
import AboutUsView from '../views/AboutUsView.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[ 
        { path:"/", name:"home", component : HomeView },
        { path:"/actor", name:"actor", component : ActorView }, 
        { path:"/artist", name:"artist", component : ArtistView },
        { path:"/product", name:"product", component : ProductView },
        { path:"/review", name:"review", component : ReviewView },
        { path:"/aboutus", name:"aboutus", component : AboutUsView },
        { path:"/notice", name:"notice", component : NoticeView },
    ]
})