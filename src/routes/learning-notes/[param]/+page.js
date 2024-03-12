/** @type {import('./$types').PageLoad} */

import One from "./One.svelte";
import Two from "./Two.svelte";
import Config from "./Config.svelte";
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
    /**
	 * @type {{ pagenum?: string?,
	 *         pagetitle?: string?,
     *        nextpage?: string?,
     *       prevpage?: string?,
     *      datecreated?: string?,
    *        component?: any? }}
    */
    let returnvar = {
        pagenum: null,
        pagetitle: null,
        nextpage: null,
        prevpage: null,
        datecreated: "Feb. 14th 2024",
        component: null,
    };
    switch (params.param) {
        case "one":
        case "One":
            returnvar.pagenum = "One";
            returnvar.pagetitle = "Getting Started";
            returnvar.nextpage = "two";
            returnvar.component = One;
            break;
        case "two":
        case "Two":
            returnvar.pagenum = "Two";
            returnvar.pagetitle = "Core Concepts";
            returnvar.component = Two;
            returnvar.prevpage = "one";
            break;
        case "config":
        case "Config":
        case "configuration":
        case "Configuration":
            returnvar.pagenum = "Svelte(Kit)";
            returnvar.pagetitle = "Configuration";
            returnvar.component = Config;
            returnvar.prevpage = "two";
            break;
        default:
            throw error(404, "Not Found");
    }
    return returnvar;
}