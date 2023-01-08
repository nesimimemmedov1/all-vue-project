<template>
  <div id="banner-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="main">
            <div class="row">
              <div class="col-lg-6">
                <div class="titles">
                  <h1>Sign in to</h1>
                  <h3>Lorem Ipsum is simply</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="image">
                  <img class="img-fluid" src="../assets/Saly-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="wrapper">
            <!-- <app-sign-in></app-sign-in>. -->
            <!-- <app-register></app-register> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SignIn from "../components/SignIn";
// import Register from "../components/Register";
export default {
  data() {
    return {};
  },
  components: {
    // appSignIn: SignIn.
    // appRegister: Register
  }
};
</script>

<style lang="scss" scoped>
#banner-section {
  padding: 140px 0 100px 0;
  background-color: #0089ed;
  .container {
    padding: 0 73px;
    .row {
      .main {
        .titles {
          h1 {
            font-size: 34px;
            font-weight: 600;
          }
          h3 {
            font-size: 24px;
            font-weight: 400;
          }
          p {
            font-size: 13px;
            font-weight: 300;
            padding-top: 22px;
            line-height: 19.5px;
          }
        }
        .image {
          position: relative;
          img {
            position: absolute;
            width: 385px;
            height: 385px;
            top: -125px;
            left: -20px;
            object-fit: cover;
          }
        }
      }
      .wrapper {
        position: relative;
      }
    }
  }
}
// media-queries
@media (max-width: 1260px) {
  #banner-section {
    .container {
      .row {
        .main {
          .image {
            img {
              height: 270px;
              top: -34px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  #banner-section {
    .container {
      padding: 0;
    }
  }
}
@media (max-width: 991px) {
  #banner-section {
    .container {
      .row {
        .main {
          .image {
            display: none;
          }
          .titles {
            h1 {
              font-size: 30px;
            }
            p {
              padding-top: 15px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  #banner-section {
    padding: 60px 0 100px 0;
    .container {
      .row {
        .main {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  #banner-section {
    .container {
      padding: 0 30px;
    }
  }
}
</style>
