<script>
    import { onMount } from 'svelte'
    import { beforeNavigate, afterNavigate } from '$app/navigation'

    let { page_name } = $props()

    beforeNavigate(() =>
    {
        console.clear()

        console.log('BEFORE NAVIGATE')
    })

    afterNavigate(() =>
    {
        console.log('AFTER NAVIGATE')
    })

    onMount(() =>
    {
        console.log('MOUNT')

        return () =>
        {
            console.log('UNMOUNT')
        }
    })
</script>

<h1>{ page_name }</h1>
<h2>See console &#10132;</h2>
