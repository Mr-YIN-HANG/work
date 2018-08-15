<template>
    <div class="movie">
        <ul>
            <li v-for="m in movieList" @click="detail(m.id)">
                {{m.name}},{{m.avg}}
            </li>
        </ul>
    </div>
</template>
<script>
    export  default {
        data(){
            return{
                movieList:[
                    {
                        id:1,
                        name:'西红柿',
                        avg:'8.2'
                    },
                    {
                        id:2,
                        name:'西红柿1',
                        avg:'8.9'
                    },
                    {
                        id:3,
                        name:'西红柿2',
                        avg:'8.4'
                    },
                    {
                        id:4,
                        name:'西红柿3',
                        avg:'8.8'
                    }
                ]
            }
        },
        methods:{
            detail(id){
                this.$router.push('/movieDetail/'+id)
            }
        }
    }
</script>
<style>

</style>