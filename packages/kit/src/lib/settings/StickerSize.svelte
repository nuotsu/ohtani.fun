<label class="flex gap-2 items-center text-xs">
	-
	<input type="range"
		bind:value={$sticker_size}
		on:change={onChange}
		min={36}
		max={260}
		step={2}
	/>
	+
</label>

<style>
	input {
		cursor: pointer;
		width: 8em;
	}
</style>

<script>
	function onChange({ target }) {
		localStorage.setItem('sticker_size', target.value)
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'
	import { browser } from '$app/env'

	export const sticker_size = writable(browser ? localStorage.getItem('sticker_size') : 100)
</script>
