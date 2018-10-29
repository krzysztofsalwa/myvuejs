<template>
    <div>
        <h1>The User Page</h1>
        <button @click="navigateToHomePage">Navigate to home page</button>
    </div>
</template>
<script>
    export default {
      methods : {
        navigateToHomePage(){
          this.$router.push('/');
        }
      }
    }
</script>