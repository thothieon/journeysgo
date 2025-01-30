<template>
    <div class="contact">
        <div>
            <Navbar />
        </div>
        <div>
            <h1>This is an contact page</h1>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    name: 'ContactView',
    components: {
        Navbar,
        // eslint-disable-next-line vue/no-reserved-component-names
        Footer
    }
}
</script>
