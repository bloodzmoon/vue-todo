<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/todo">Todo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

body {
  margin: 0;
}

#app {
  font-family: "Roboto", "Kanit", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #292929;
}

#nav {
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 60px;
  background: #191919;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  width: 100px;
  height: 40px;
  border-radius: 3px;
  margin: 0 5px;
  font-size: 18px;
  transition: 0.2s;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a:hover {
  background: #333333;
}

#nav a.router-link-exact-active {
  color: #41b883;
}

a:any-link {
  color: inherit;
}
</style>
