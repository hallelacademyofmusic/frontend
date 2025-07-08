<script setup>
 import { IconPhoneRinging, IconBarrierBlock, IconMail } from '@tabler/icons-vue';

</script>

<template>
  <div class="wrapper">

    <div class="content">
      <span class="under-construction">
        <IconBarrierBlock size="24" />
        Under Construction
        <IconBarrierBlock size="24" />
      </span>
      <a class="logo" href="/">
        <img src="/hallel-academy-logo.svg" alt="Hallel Academy of Music">
      </a>
      <h1 class="title">Inspiring Musical Excellence</h1>
      <a class="phone" href="tel:+13433070153">
        <IconPhoneRinging size="24" />
        <span>343-307-0153</span>
      </a>
      <a class="email" href="mailto:info@hallelacademy.com">
        <IconMail size="24" />
        <span>info@hallelacademy.com</span>
      </a>
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

.under-construction {
  color: #F6BE55;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  justify-content: center;
  padding-bottom: 2rem;
  text-transform: uppercase;
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
  font-size: 1.4rem;
  color: #FFF;
  text-decoration: none;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.email {
  display: block;
  margin: 1rem auto;
  font-size: 1.4rem;
  color: #FFF;
  text-decoration: none;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
