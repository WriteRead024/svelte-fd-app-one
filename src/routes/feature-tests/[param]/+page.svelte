<script>
    /**
	 * @type {{ pageprefix?: string?,
     *         pagetitle?: string?,
     *         nextpage?: string?,
     *         prevpage?: string?,
     *         datecreated?: string?,
     *         wikiresponse?: any?,
     *         component?: any? }}
	 */
	export let data;
</script>

<h3>Welcome to SvelteKit</h3>
<h2>svelte-fd-app-one</h2>
<h2>Feature Tests {data.pageprefix}: {data.pagetitle}</h2>
<p>work started {data.datecreated}</p>
<svelte:component this={data.component} bind:wikidata={data.wikiresponse}/>
{#if data.prevpage}
<p><a href="{data.prevpage}">link back to notes page ({data.prevpage})</a></p>
{/if}
{#if data.nextpage}
<p><a href="{data.nextpage}">Next Page ({data.nextpage})</a></p>
{/if}
<p><a href="/">back to the main home page</a></p>
