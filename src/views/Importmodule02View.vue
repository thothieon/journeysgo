<template>
  <div class="importmodule02">
    <div>
      <Navbar />
    </div>
    <div>
      <br />
      <div class="container">
        <br />

        <div class="row">
          <div class="col">
            <section class="u-py-0">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb ">
                  <li class="breadcrumb-item text-muted"><a href="/" style="text-decoration: none; color: #454545;">首頁</a></li>
                  <li class="breadcrumb-item text-black-50"><a href="/" style="text-decoration: none; color: #454545;">日本線</a></li>
                  <li class="breadcrumb-item active" aria-current="page">全覽山陰山陽+四國雙溫泉9日</li>
                </ol>
              </nav>
            </section>
          </div>
        </div>

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

<style module>
.g{

}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'Importmodule02View',
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
