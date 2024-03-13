
<svelte:head>
    <title>Loading Data into Svelte Pages</title> 
</svelte:head>

<script>
    /**
	 * @typedef {{
     *   wikidata?: {
     *     requestedword?: string,
     *     def?: string
     *   }
     * }}
	 */
    export let wikidata = {
        requestedword: '',
        def: ''
    };
</script>
<h2>
    requested word: {wikidata.requestedword}
</h2>
<p>
    {wikidata.def}
</p>