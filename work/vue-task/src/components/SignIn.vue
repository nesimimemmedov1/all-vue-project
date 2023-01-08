<template>
  <div id="sign-in-section">
    <div class="container">
      <form @submit="onSubmit(e)">
        <div class="form-group">
          <label for="username">Enter your username or email address</label>
          <input
            placeholder="Username or email address"
            type="text"
            id="username"
            name="username"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Enter your Password</label>
          <input
            placeholder="Password"
            type="text"
            id="password"
            name="password"
            v-model="password"
          />
          <h6>
            Forgot Password
          </h6>
        </div>
        <div class="form-group">
          <button id="sign-in-btn">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password
      };
      console.log(data);
      axios
        .post("http://localhost:8080/login", data)
        .then(response => {
          headers;
          console.log(response);
        })
        .catch(err => {
          console.log("Err", err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#sign-in-section {
  padding: 44px;
  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
  border-radius: 40px;
  color: black;
  position: absolute;
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
    }
    .sign-in-buttons {
      display: flex;
      justify-content: space-between;
      .btn {
        text-align: center;
        &:first-child {
          width: 100%;
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
    label {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 13px;
    }
    .form-group {
      input {
        border: 1px solid #4285f4;
        border-radius: 9px;
        font-size: 14px;
        padding: 17px 25px;
        width: 100%;
        color: #808080;
        font-weight: 300;
      }
      #sign-in-btn {
        width: 100%;
        background-color: #0089ed;
        border: none;
        color: white;
        border-radius: 9px;
        padding: 15px 0;
        margin-top: 36px;
      }
      #username {
        margin-bottom: 36px;
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

input,
button {
  box-shadow: none !important;
  outline: 0;
}

// media-queries
@media (max-width: 1290px) {
  #sign-in-section {
    padding: 30px;
    .container {
      .sign-in-buttons {
        .btn {
          &:first-child {
            padding: 15px 56px 15px 21px;
            font-size: 14px;
          }
        }
      }
      .title {
        font-size: 43px;
      }
    }
  }
}

@media (max-width: 1200px) {
  #sign-in-section {
    padding: 20px;
    .container {
      .title {
        font-size: 40px;
      }
      .sign-in-buttons {
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
  #sign-in-section {
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
      .sign-in-buttons {
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
          #username {
            margin-bottom: 19px;
          }
          #sign-in-btn {
            padding: 13px 0;
            margin-top: 20px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  #sign-in-section {
    position: static;
    height: 100vh;
    overflow: hidden;
  }
}

@media (max-width: 576px) {
  #sign-in-section {
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
          margin-bottom: 16px;
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
          #sign-in-btn {
            font-size: 15px;
          }
          #username {
            margin-bottom: 0;
          }
        }
      }
      .sign-in-buttons {
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
