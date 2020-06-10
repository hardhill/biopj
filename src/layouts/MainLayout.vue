<template>
    <div>
        <navbar></navbar>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    name: 'main-layout',
    components: {
        Navbar
    }
}
</script>