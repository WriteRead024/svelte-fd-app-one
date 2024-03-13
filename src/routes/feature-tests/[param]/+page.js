/** @type {import('./$types').PageLoad} */

import { error } from "@sveltejs/kit";
import LoadFunction from "./LoadFunction.svelte";

export async function load({ fetch, params }) {
    /**
     * @type {{ pageprefix?: string?,
     *         pagetitle?: string?,
     *         nextpage?: string?,
     *         prevpage?: string?,
     *         datecreated?: string?,
     *         wikiresponse?: any?,
     *         component?: any? }}
     */
    let returnvar = {
        pageprefix: null,
        pagetitle: null,
        nextpage: null,
        prevpage: null,
        datecreated: "Mar. 12th 2024",
        component: null,
        wikiresponse: null
    };
    switch (params.param) {
        case "loadfunction":
        case "Loadfunction":
        case "loadFunction":
        case "LoadFunction":
            let apiurlstart = "http://localhost:3456/words/word/";
            let apiurl = apiurlstart + "initialize";
            let response = await fetch(apiurl, { method: "GET" });
            let responsedata = await response.json();
            console.log(responsedata);
            returnvar.pageprefix = "Feature Tests";
            returnvar.pagetitle = "Load Function";
            returnvar.prevpage = "/learning-notes/two";
            returnvar.component = LoadFunction;
            returnvar.wikiresponse = responsedata;
            console.log("Load Function");
            break;
        default:
            throw error(404, "Not Found");
    }
    return returnvar;
}