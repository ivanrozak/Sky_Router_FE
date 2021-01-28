<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.swal2-title,
.swal2-html-container,
.swal2-confirm,
.swal2-deny {
  font-family: 'Poppins', sans-serif;
}
</style>
