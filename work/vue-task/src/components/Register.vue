<template>
  <div id="sign-up-section">
    <div class="container">
      <div class="caption">
        <h3>Welcome to <span>LOREM</span></h3>
        <div class="links">
          <span>No Account?</span>
          <h6>Sign in</h6>
        </div>
      </div>
      <h1 class="title">Sign up</h1>
      <form id="form" @click.prevent="onSubmit" action="#">
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group">
              <label for="email">Enter your username or email address</label>
              <input
                placeholder="Username or email address"
                type="text"
                id="email"
                name="email"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="form-group">
              <label for="username">User name</label>
              <input
                placeholder="User name"
                type="text"
                id="username"
                name="username"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="form-group">
              <label for="number">Contact Number</label>
              <input
                placeholder="Contact Number"
                type="text"
                id="number"
                name="number"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group">
              <label for="password">Enter your Password</label>
              <input
                placeholder="Password"
                type="text"
                id="password"
                name="password"
                v-model="userData.password"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <button id="sign-up-btn">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    onSubmit() {
      let form = {
        email: this.userData.email,
        password: this.userData.password
      };
      console.log(form);
    }
  }
};
</script>

<style lang="scss" scoped>
#sign-up-section {
  padding: 44px;
  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
  border-radius: 40px;
  color: black;
  position: absolute;
  top: -58px;
  .container {
    padding: 0;
    .caption {
      display: flex;
      justify-content: space-between;
      h3 {
        font-size: 22px;
        line-height: 33px;
        font-weight: 400;
        margin: 0;
        span {
          color: #0089ed;
          font-weight: 600;
        }
      }
      .links {
        line-height: 19.5px;
        span,
        h6 {
          font-size: 13px;
          font-weight: 400;
        }
        h6 {
          color: #0089ed;
        }
      }
    }
    .title {
      font-weight: 500;
      font-size: 55px;
      line-height: 82.5px;
      margin-bottom: 0;
    }
    .sign-up-buttons {
      display: flex;
      justify-content: space-between;
      .btn {
        &:first-child {
          padding: 15px 68px 15px 33px;
          background-color: #e9f1ff;
          img {
            margin-right: 21px;
          }
        }
        &:last-child {
          margin-right: 0;
        }
        color: #4285f4;
        margin-right: 20px;
        border-radius: 9px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        background-color: #f6f6f6;
        padding: 15px;
        img {
          width: 26px;
          height: 26px;
          object-fit: cover;
          border-radius: 50px;
        }
      }
    }
    #form {
      margin-top: 43px;
      label {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 13px;
      }
      .form-group {
        margin-bottom: 35px;
        input {
          border: 1px solid #4285f4;
          border-radius: 9px;
          font-size: 14px;
          padding: 17px 25px;
          width: 100%;
          color: #808080;
          font-weight: 300;
        }
        #sign-up-btn {
          width: 100%;
          background-color: #0089ed;
          border: none;
          color: white;
          border-radius: 9px;
          padding: 15px 0;
          margin-top: 36px;
        }
        h6 {
          text-align: end;
          font-size: 13px;
          line-height: 19.5px;
          font-weight: 400;
          margin-top: 12px;
          color: #0089ed;
        }
      }
    }
  }
}

input,
button {
  box-shadow: none !important;
  outline: 0;
}
@media (max-width: 1200px) {
  #sign-up-section {
    padding: 20px;
    .container {
      .title {
        font-size: 40px;
      }
      .sign-up-buttons {
        .btn {
          &:first-child {
            padding: 15px 40px 15px 10px;
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  #sign-up-section {
    .container {
      .caption {
        h3 {
          font-size: 16px;
        }
      }
      .title {
        font-size: 30px;
        line-height: 40px;
      }
      padding: 0;
      .sign-up-buttons {
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 10px !important;
          &:first-child {
            img {
              margin-right: 5px !important;
            }
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      #form {
        margin-top: 20px;
        label {
          font-size: 15px;
        }
        .form-group {
          input {
            padding: 12px 15px;
          }
          #sign-up-btn {
            padding: 13px 0;
            margin-top: 20px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  #sign-up-section {
    position: static;
    height: 100vh;
    overflow: hidden;
  }
}

@media (max-width: 576px) {
  #sign-up-section {
    height: 100%;
    padding: 26px 20px 50px;
    .container {
      .caption {
        h3 {
          font-size: 12px;
        }
        .links {
          span,
          h6 {
            font-size: 11px;
          }
        }
      }

      #form {
        .form-group {
          input {
            font-size: 13px;
          }
          label {
            font-size: 12px;
            margin-bottom: 4px;
          }
          h6 {
            margin-bottom: 0;
          }
          #sign-up-btn {
            font-size: 15px;
          }
        }
      }
      .sign-up-buttons {
        flex-wrap: wrap;
        .btn {
          &:first-child {
            margin-right: 0;
            margin-bottom: 10px;
          }
          padding: 8px 10px !important;
          width: 48%;
          img {
            width: 15px;
            height: 15px;
          }
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
