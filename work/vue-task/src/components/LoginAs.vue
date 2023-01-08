<template>
  <div id="login-as-section">
    <div class="container">
      <div class="accounts">
        <h6>Login as</h6>
        <div class="accounts-avatar">
          <div class="item">
            <div class="delete-icon">
              <i class="fa-regular fa-circle-xmark"></i>
            </div>
            <div class="avatar">
              <img src="../assets/Ellipse 3.png" alt="" />
            </div>
            <div class="about">
              <div class="account-name">John peter</div>
              <div class="activity">
                <h3>Active 1 days ago</h3>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="delete-icon">
              <i class="fa-regular fa-circle-xmark"></i>
            </div>
            <div class="avatar">
              <img src="../assets/Ellipse 4.png" alt="" />
            </div>
            <div class="about">
              <div class="account-name">Alina shmen</div>
              <div class="activity">
                <h3>Active 4 days ago</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#login-as-section {
  background-color: brown;
  color: black;
  .container {
    .accounts {
      padding: 54px 0 174px 37px;
      h6 {
        font-weight: 400;
        size: 16px;
        line-height: 24px;
        margin-bottom: 26px;
      }
      .accounts-avatar {
        display: flex;
        flex-wrap: wrap;
        .item {
          padding: 10px;
          background: #eff8ff;
          border-radius: 9px;
          width: calc(100% / 8 - 10px);
          text-align: center;
          margin: 0 31px 10px 0;
          .delete-icon {
            display: flex;
            justify-content: flex-end;
            cursor: pointer;
            i {
              font-size: 14px;
              color: #737373;
            }
          }
          .avatar {
            img {
              width: 76px;
              height: 76px;
              margin-bottom: 7px;
            }
          }
          .about {
            .account-name {
              font-weight: 500;
              font-size: 15px;
              line-height: 22.5px;
            }
            .activity {
              h3 {
                font-size: 13px;
                font-weight: 300;
                line-height: 19.5px;
                color: #adadad;
              }
            }
          }
        }
      }
    }
  }
}
//media-queries
@media (max-width: 1200px) {
  #login-as-section {
    .container {
      .accounts {
        .accounts-avatar {
          .item {
            width: calc(100% / 6 - 10px);
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  #login-as-section {
    .container {
      .accounts {
        padding: 54px 0 90px 0;
        .accounts-avatar {
          .item {
            width: calc(100% / 5 - 10px);
          }
        }
      }
      padding: 0;
    }
  }
}

@media (max-width: 768px) {
  #login-as-section {
    display: none;
  }
}
</style>
