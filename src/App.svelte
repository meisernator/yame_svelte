<script>
	// https://chasingcode.dev/blog/svelte-persist-state-to-localstorage/
	// https://github.com/eligrey/FileSaver.js

	import marked from "marked";
	import { inhalt } from "./store.js";
	import { saveAs } from "file-saver";

	let editor = true;

	function saveLocalStorageToFile(data) {
		var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
		saveAs(blob, "Dokumenation.md");
	}
</script>

<style>
	textarea,
	.preview {
		box-sizing: border-box;
		display: block;
		width: 100%;
		background-color: azure;
	}

	.preview {
		background-color: white;
	}

	.save {
		background-color: solid 4px Gainsboro;
		padding: 1em 2em 1em 2em;
		position: absolute;
		right: 0px;
		font-size: small;
	}

	.save {
		background-color: solid 4px Gainsboro;
		padding: 1em 2em 1em 2em;
		position: absolute;
		right: 0px;
		font-size: small;
	}

	textarea {
		height: 40%;
		border: none;
		margin: 0;
		padding: 2em;
		color: darkslategray;
		font-size:smaller;
		font-family: monospace;
	}

	.preview {
		height: 60%;
		padding: 2rem;
		border-top: solid 4px Gainsboro;
		overflow: scroll;
	}

	:global(body) {
		padding: 0;
	}
</style>

<div class="save">
	<button on:click={() => saveLocalStorageToFile($inhalt)}>
		Dokumentation speichern
	</button>
	<button on:click={() => editor = !editor}>
		Editor aus- und einblenden
	</button>
</div>
{#if editor}
	<textarea bind:value={$inhalt} placeholder="Enter markdown here" />
{/if}
<div class="preview">
	{@html marked($inhalt)}
</div>
