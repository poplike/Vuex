<template>
    <div>
        <p>{{num}}</p>
        <button @click="back">返回</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['num']),
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>
