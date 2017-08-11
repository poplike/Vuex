<template>
    <div>
        <!--<p>{{num}}</p>-->
        <p>{{count}}</p>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
        <button @click="fn">Actions</button>
        <router-link to="operator">
            <button>operator</button>
        </router-link>
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
        // ...mapState(['num']),
        // ...mapGetters(['num'])
        count(){
            return this.$store.state.num;
        }
    },
    data() {
        return {
            msg: '1'
        }
    },
    methods: {
        ...mapMutations(['add', 'reduce', 'back']),
        ...mapActions(['fn']),


    },
    created() {
    }
}
</script>

<style scoped lang="scss">
@import 'src/style/mixin';
// div {
//     @include wh(200px, 50px);
// }
</style>

