<template>
 <div>
	<p>Hello {{ personData.firstName }} {{ personData.lastName }} ! This is the first component</p>
 </div>
</template>

<script>
export default {
  name: 'SimpleComponent',
  props: {
    firstName: String,
    lastName: String,
    personData: Object,
  }
}
</script>

<style scoped>

</style>
