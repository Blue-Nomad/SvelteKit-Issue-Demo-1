<script>
    let { children } = $props()
</script>

<ul>
    <li><a href='/'>Home</a></li>
    <li><a href='/projects/project-1'>Project 1</a></li>
    <li><a href='/projects/project-2'>Project 2</a></li>
</ul>

<div>
    {@render children() }
</div>

<style>
    :global(body) { padding: 2rem; }
    ul { display: flex; margin-bottom: 3rem; }
    li + li { margin-left: 2rem; }
    a { font-size: 1.5rem; }
</style>
