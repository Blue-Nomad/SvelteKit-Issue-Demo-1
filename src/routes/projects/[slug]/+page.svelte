<script>
    import Test from 'components/test.svelte'

    let { data } = $props()
</script>

<Test page_name={ data.slug } />
