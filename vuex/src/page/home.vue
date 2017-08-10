<template>
    <div>
        <p>{{num}}</p>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
        <button @click="fn">我是Actions</button>
        <router-link to="page1">
            <button>go</button>
        </router-link>
    
         <!-- <button @click="$store.commit('add',10)">+</button> 
        <button @click="$store.commit('reduce')">-</button> -->
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    name: 'home',
    computed: {
        ...mapState(['num']),
        // ...mapGetters(['num'])
    },
    data() {
        return {
            msg: '1'
        }
    },
    methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions(['fn'])

    }
}
</script>

<style scoped lang="scss">
@import 'src/style/mixin';
// div {
//     @include wh(200px, 50px);
// }
</style>

