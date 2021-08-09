<template>
    <div>
        <install></install>
        <!--<div v-html="start"></div>-->
    </div>
</template>

<script>

    import install from '../docs/install.md'

    export default {
        name: "test",
        components: {install},
        data() {
            return {
                start: ''
            }
        },
    }
</script>

<style scoped>

</style>