<script>
    /**
	 * @type {{ pagenum: string,
	 *         pagetitle: string,
     *         sectiontitle?: string?,
     *        nextpage: string,
     *       prevpage: string,
     *       datecreated: string,
	 *        component: any }}
	 */
	export let data;
</script>

<h3>Welcome to SvelteKit</h3>
<h2>svelte-fd-app-one</h2>
<h2>Learning Notes Page {data.pagenum}: {data.pagetitle}</h2>
<h4>from official documentation</h4>
<svelte:component this={data.component}/>
{#if data.prevpage}
<p><a href="/learning-notes/{data.prevpage}">Previous Page ({data.prevpage})</a></p>
{/if}
{#if data.nextpage}
<p><a href="/learning-notes/{data.nextpage}">Next Page ({data.nextpage})</a></p>
{/if}
<p>created {data.datecreated}</p>
<p><a href="/">back to the main home page</a></p>
