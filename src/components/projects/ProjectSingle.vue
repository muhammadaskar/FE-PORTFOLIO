<script>
export default {
	props: ['project'],
};
</script>

<template>
	<!-- <div v-for="p in project" :key="p.id"> -->
	<router-link v-for="p in project" :key="p.id" :to="`/projects/single-project/${p.slug}`"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div>
			<img v-if="p.image !== ''" :src="p.image" :alt="p.name" class="rounded-t-xl border-none" />
			<img v-else src="@/assets/images/web-project-1.jpg" :alt="p.name" class="rounded-t-xl border-none" />
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ p.name }}
				<!-- {{ project }} -->
			</p>
			<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{
				p.category
			}}</span>
		</div>
	</router-link>
	<!-- </div> -->
</template>

<style lang="scss" scoped>

</style>
