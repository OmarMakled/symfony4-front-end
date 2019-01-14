<template>
	<div class="notification is-danger" v-if="errors">
		<button class="delete" @click="errors = null"></button>
		{{errors}}
	</div>
</template>

<script>
	export default {
		props: ['errors']
	}	
</script>