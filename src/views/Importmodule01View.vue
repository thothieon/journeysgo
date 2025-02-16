<template>
  <div class="importmodule01">
    <div>
      <Navbar />
    </div>
    <div>
      <h1>This is an importmodule01 page</h1>
      <br />
      <div class="container">
        <br />
        <div class="row">
          <div class="col">
          </div>
          <div class="col-12">
            <div>
              <iframe src="https://docs.google.com/document/d/e/2PACX-1vSo6Rokt-u6YeSIusHiI7jMMqIFycaDeRtYF8upuXqNbJhsQr8_Yib20GhOuVMs6jcaFIyCH8m8u6DH/pub?embedded=true" width="100%" height="21500" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
            </div>
          </div>
          <div class="col">
          </div>
        </div>>
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
  name: 'Importmodule01View',
  components: {
    Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer
  },
  data() {
    return {
    }
  }
}
</script>
