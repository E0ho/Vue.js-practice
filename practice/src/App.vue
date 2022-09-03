<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br/>
    <br/> [단방향 통신 예제] <br/>
    <router-link to="/databinding/string">String</router-link> |
    <router-link to="/databinding/html">Html</router-link>
    <br/>
    <br/> [양방향 통신 예제] <br/>
    <router-link to="/databinding/input">Input</router-link> |
    <router-link to="/databinding/select">Select</router-link> |
    <router-link to="/databinding/checkbox">Checkbox</router-link> |
    <router-link to="/databinding/radio">Radio</router-link>
    <br/>
    <br/> html 속성값 databinding
    <router-link to="/databinding/attr">Attr databinding</router-link> |
    <br/>
    <br/> list databinding
    <router-link to="/databinding/list">List databinding</router-link> |
    <router-link to="/databinding/table">Table databinding</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
