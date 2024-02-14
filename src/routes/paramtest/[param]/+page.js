/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    return { paramvar: params.param };
}