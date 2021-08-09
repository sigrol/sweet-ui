<template>
    <i :class="[name]"></i>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: 'sIcon',
        props: {
            name: String,
            default: '',
        }
    })

</script>