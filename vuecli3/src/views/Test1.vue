<template>
    <div>
            <h1>我是一个test1组件</h1>
            名字是:{{$route.params.name}},
            年龄是:{{$route.params.age}}
    </div>

</template>

<script>
export default {
name: "Test1"
}
</script>

<style scoped>

</style>