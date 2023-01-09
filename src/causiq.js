import { BatchedTransport, Causiq, sendWithFetch  } from '@causiq/sdk';

(function (  ) {
    'use strict'

    const uniqueId =
        document.cookie.split(';').filter((item) => item.trim().startsWith('cart='))[0]?.replace('cart=', '')

    const srcUri = document.currentScript.src
    const url = new URL(srcUri);
    const searchParams = new URLSearchParams(url.search);
    const moniker = searchParams.get('moniker')
    const trackUrl = searchParams.get('trackUrl')


    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log(srcUri)
    console.log(moniker)
    console.log(trackUrl)
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")

    const transport = new BatchedTransport(1000, sendWithFetch(trackUrl))
    const client = new Causiq(transport);
    client.init(moniker, null, uniqueId)

})()