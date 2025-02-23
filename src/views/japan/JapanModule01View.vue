<template>
  <div class="JapanModule01">
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

            <div class="row">
              <div class="col">
                <div class="card">

                  <div class="row">
                    <div class="col">
                      <img src="https://i.imgur.com/Sc7qrBm.jpg" class="card-img-top p-3">
                    </div>
                    <div class="col">
                      <div class="card-body">
                        <h2 class="card-title">樂活關西</h2>
                        <p class="card-text">樂活關西&京阪時尚暢遊六日.</p>
                        <p class="card-text">#關西 </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col">
                    </div>
                    <div class="col-11 border border-secondary">
                      <br />
                      <form>
                        <div class="form-group row">
                          <div class="col-6" align=left>
                            <label for="inputEmail4"> Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                          </div>
                          <div class="col-6" align=left>
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                          </div>
                        </div>
                        <br />
                        <div class="form-group" align=left>
                          <label for="inputAddress">Address</label>
                          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                        </div>
                        <br />
                        <div class="form-group" align=left>
                          <label for="inputAddress2">Address 2</label>
                          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                        </div>
                        <br />
                        <div class="form-row" align=left>
                          <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity">
                          </div>
                          <br />
                          <div class="form-group col-md-4" align=left>
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <br />
                          <div class="form-group col-md-2" align=left>
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip">
                          </div>
                        </div>
                      </form>
                      <br />
                    </div>
                    <div class="col">
                    </div>
                  </div>
                  <br />
                  <!--
                  <div class="row">
                    <div class="col">
                    </div>
                    <div class="col-11 border border-secondary">
                      <br />
                      <form>
                        <div class="form-group row">
                          <div class="col-6"  align=left >
                            <label for="inputEmail4"> Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                          </div>
                          <div class="col-6" align=left >
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                          </div>
                        </div>
                        <div class="form-group" align=left >
                          <label for="inputAddress">Address</label>
                          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                        </div>
                        <div class="form-group" align=left >
                          <label for="inputAddress2">Address 2</label>
                          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                        </div>
                        <div class="form-row" align=left >
                          <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity">
                          </div>
                          <div class="form-group col-md-4" align=left >
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div class="form-group col-md-2" align=left >
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip">
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                              Check me out
                            </label>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                      </form>
                      <br />
                    </div>
                    <div class="col">
                    </div>
                  </div>
                  <br />
                  -->
                  <div class="row">
                    <div class="col"></div>
                    <div class="col-11">
                      <h2 align=left>精選景點</h2>
                      <br />
                      <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col" v-for="item in productList">
                          <div class="card">
                            <img src="../../assets/123.png" class="card-img-top">
                            <div class="card-body">
                              <h5 class="card-title">{{ item }}</h5>
                              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col"></div>
                  </div>
                  <br />

                </div>

              </div>
            </div>
          </div>
          <div class="col">
          </div>
        </div>

        <!-- <div class="row">
          <div class="col">
          </div>
          <div class="col-12">
            <div>
              <iframe src="https://docs.google.com/document/d/e/2PACX-1vSo6Rokt-u6YeSIusHiI7jMMqIFycaDeRtYF8upuXqNbJhsQr8_Yib20GhOuVMs6jcaFIyCH8m8u6DH/pub?embedded=true" width="100%" height="21500" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
            </div>
          </div>
          <div class="col">
          </div>
        </div> -->

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
.g {}
</style>

<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: 'JapanModule01',
  components: {
    Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer
  },
  data() {
    return {
      productList: ["aaa", "bbb", "ccc", "ddd"]
    }
  }
}
</script>
