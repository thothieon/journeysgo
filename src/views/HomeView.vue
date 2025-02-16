<template>
  <div class="home">
    <div>
      <Navbar />
    </div>
    <div>
      <h1>This is an home page</h1>
      <br />
      <div class="container">
        <br />
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col" v-for="item in productList">
            <div class="card">
              <img src="../assets/123.png" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ item }}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        <br />
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
  },
  data() {
    return {
      productList: ["aaa", "bbb", "ccc", "ddd", "eee"]
    }
  }
}
</script>
