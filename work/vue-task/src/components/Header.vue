<template>
  <div id="header-section">
    <div class="container p-0">
      <header class="header">
        <div class="logo">
          <h6>Your Logo</h6>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#header-section {
  position: absolute;
  width: 100%;
  .container {
    .header {
      .logo {
        h6 {
          font-size: 20px;
          padding: 31px 0;
          font-weight: 600;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  #header-section {
    .container {
      .header {
        .logo {
          h6 {
            padding: 14px 0;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  #header-section {
    .container {
      .header {
        .logo {
          h6 {
            padding: 14px 30px;
          }
        }
      }
    }
  }
}
</style>
