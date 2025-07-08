<template>
  <div class="wrapper">

    <div class="content">
      <a class="logo" href="/">
        <img src="/hallel-academy-logo.svg" alt="Hallel Academy of Music">
      </a>
      <h1 class="title">Inspiring Musical Excellence</h1>
      <a class="phone" href="tel:+13433070153">tel: 343-307-0153</a>
    </div>
  </div>

</template>

<style>
* {
  font-family: 'Josefin Sans', sans-serif;
}

body {
  background-color: #2E957E;
  color: #FFF;
}

h1 {
  letter-spacing: -1px;
  font-weight: 300;
  font-size: 2.4rem;
  margin-top: 1rem;
  font-style: italic;
}

.wrapper {
  max-width: 1200px;
  min-height: 90vh;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
}

.logo {
  max-width: 240px !important;
  display: block;
  margin: 0 auto;
}

.phone {
  display: block;
  margin: 1rem auto;
  font-size: 1.5rem;
  color: #FFF;
  text-decoration: none;
  font-weight: 400;
}

img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
