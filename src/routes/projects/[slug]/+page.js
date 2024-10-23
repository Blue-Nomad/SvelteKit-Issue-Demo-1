export function load({ params })
{
    return { slug: params.slug.charAt(0).toUpperCase() + params.slug.slice(1).replace('-', ' ') }
}
