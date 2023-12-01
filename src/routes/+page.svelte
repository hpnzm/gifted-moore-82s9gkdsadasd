<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<svelte:head>
  <title>Home</title>
</svelte:head>

<script>
    export let data
</script>

<section>
    <h1>Beers</h1>
    <a href="/profile">Profile</a>

    <ul>
        {#each data.beers as beer}
            <li>{beer.name}</li>
        {/each}
    </ul>
</section>

<style>
</style>