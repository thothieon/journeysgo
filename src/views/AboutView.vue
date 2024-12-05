<template>
  <div class="about">
      <div>
          <Navbar />
      </div>
      <div>
          <h1>This is an about page</h1>
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
  name: 'AboutView',
  components: {
      Navbar,
      Footer
  }
}
</script>
