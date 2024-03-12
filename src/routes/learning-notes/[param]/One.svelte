<svelte:head>
    <title>Page One of Learning Notes</title> 
</svelte:head>

<p>
    <a class="ext" href="https://kit.svelte.dev/docs/introduction">introduction</a>:
    SvelteKit is a development kit and code base built around the Svelte UI component renderer.&nbsp;
    It includes a URL router and a bunch of optimizations and rendering options.&nbsp;
    Svelte/SvelteKit can instantly update a test website to reflect code changes, which seems to be a main point to Svelte.&nbsp;
</p>
<p>
    <a class="ext" href="https://kit.svelte.dev/docs/creating-a-project">creating a project</a>:
    'npm create svelte@latest new-app-name' is featureful.&nbsp; There is good tooling support.
</p>
<p>
     <a class="ext" href="https://kit.svelte.dev/docs/project-structure">project structure</a>:
    there are special files for "lib" and "server lib" scripts, routing "parameter matchers", 
    and specially named files for "hooks" and "service workers".&nbsp; There is a folder for static files.
    There are several folders for different types of tests, there is significant test tool support built in.
    There are several configuration files, including a "svelte.config.js" file.&nbsp; 
    For more info, see the 
    <a href="/learning-notes/Config">notes page on Configuration</a> in this app
    and the 
    <a class="ext" href="https://kit.svelte.dev/docs/configuration">official documentation on configuration</a>.
</p>
<p>
    <a class="ext" href="https://kit.svelte.dev/docs/web-standards">web standards</a>:
    SvelteKit uses the 
    fetch API, FormData objects, Stream APIs, URL APIs, URLSearchParams for query parameters, Web Crypto.
</p>