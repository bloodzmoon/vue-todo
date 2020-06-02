<template>
  <div class="home-page">
    <div class="bg"></div>
    <div class="content">
      <h1 class=" title"><span class="em">V U E</span> / T O D O</h1>
      <p class="createdby">
        Created by
        <a
          class="name"
          href="https://github.com/bloodzmoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thanyathon
        </a>
      </p>
    </div>
  </div>
</template>

<style>
.home-page {
  width: 100%;
  min-height: 100vh;
  background-color: #292929;
  color: white;
  position: relative;
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  opacity: 0.5;
  background: url("../assets/vue.svg") no-repeat center center;
}

.content {
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 56px;
  font-weight: 400;
}

.em {
  color: #41b883;
}

.createdby {
  color: #c4c4c4;
  font-size: 18px;
  letter-spacing: 1px;
}

.name {
  text-decoration: none;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
