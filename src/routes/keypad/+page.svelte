<h3>Welcome to SvelteKit</h3>
<h2>svelte-fd-app-one</h2>
<h1>keypad</h1>
<p>created Feb. 14th 2024 using GitHub Copilot</p>
<!-- HTML -->
<div class="keypad">
	<button class="key">1</button>
	<button class="key">2</button>
	<button class="key">3</button>
	<button class="key">4</button>
	<button class="key">5</button>
	<button class="key">6</button>
	<button class="key">7</button>
	<button class="key">8</button>
	<button class="key">9</button>
	<button class="key">0</button>
</div>
<p><a href="/">back to the main home page</a></p>

<style>
	/* CSS */
	.keypad {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		width: 200px;
		margin: 0 auto;
	}

	.key {
		background: radial-gradient(circle, #4caf50, #388e3c);
		border: none;
		color: white;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		padding: 10px 24px;
		border-radius: 5px;
		box-shadow: 0 0 15px 5px #888;
	}

	.key:hover {
		background: radial-gradient(circle, #7cb97a, #989f38);
	}
</style>
