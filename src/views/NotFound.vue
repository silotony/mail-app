
<template>
  <div class="card col-md-6 mx-auto mt-5">
    <div class="card-header">
      Not Found
    </div>
    <div class="card-body">
      <h5 class="card-title">404</h5>
      <p class="card-text">The page your are looking for does nnot exist</p>
      <RouterLink :to="{ name: 'home' }" class="btn btn-primary">Home</RouterLink>
    </div>
  </div>
</template>

