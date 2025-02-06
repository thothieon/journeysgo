<template>
  <div class="home">
    <div>
      <Navbar />
    </div>
    <div>
      <h1>This is an home page</h1>
      <br />
      <div class="container px-4">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3 border bg-light">Custom column padding</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Custom column padding</div>
          </div>
        </div>
      </div>
      <br />
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
  name: 'HomeView',
  components: {
    Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer
  }
}
</script>
