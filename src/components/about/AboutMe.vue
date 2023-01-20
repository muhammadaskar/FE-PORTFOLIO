<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a fresh graduate from the Information Systems department who has had various experiences. From 2021 to 2022, I was given the mandate as General Chairman of the student community from South Sulawesi at Brawijaya University, Malang.',
				},
				{
					id: 2,
					bio:
						'As an active student, I ve been a Practicum or Laboratory Assistant at the Faculty of Computer Science for 1 year. As a practicum assistant, I was entrusted with the Java Basic Programming course and the SQL Database System course.',
				},
				{
					id: 3,
					bio:
						'During this pandemic starting from 2 years I have completed several software based projects. I am very interested in the field of software development, especially from the backend side. Through this experience, I realized that software engineering is the right way to provide solutions related to current technological developments.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img src="https://muhammadaskar.com/img/profile.jpg" class="rounded-xl w-96" alt="" />
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p v-for="bio in bios" :key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
