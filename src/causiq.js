
import { BatchedTransport, Causiq, sendWithFetch } from '@causiq/sdk';
(function (  ){
    'use strict'
    try {
        const uniqueId =
            document.cookie.split(';').filter((item) => item.trim().startsWith('cart='))[0]?.replace('cart=', '')?.trim()

        const srcUri = document.currentScript.src
        const url = new URL(srcUri);
        const searchParams = new URLSearchParams(url.search);
        const moniker = searchParams.get('moniker')
        const trackUrl = searchParams.get('trackUrl')

        const transport = new BatchedTransport(1000, sendWithFetch(trackUrl))
        const client = new Causiq(transport);
        client.init(moniker, {cookieless: true})
        if ( uniqueId ) client.identify(uniqueId)
    } catch (e) {

    }
})()