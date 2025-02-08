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
          <div class="col" v-for="(index, item) in productList">
            <div class="card">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ index }}</h5>
                <p class="card-text">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr>
        <br />
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col" v-for="(index, item) in productList01">
            <div class="card">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">index : {{ index }} - key : {{ item.name }}</h5>
                <p class="card-text">{{item.age}}</p>
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
      productList: ["aaa", "bbb", "ccc", "ddd"],
      productList01:[
        {name: 'John', age: 24},
        {name: 'John01', age: 241},
        {name: 'John02', age: 242},
        {name: 'John03', age: 243},

      ]
    }
  }
}
</script>
