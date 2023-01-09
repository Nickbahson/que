import { BatchedTransport, Causiq, sendWithFetch  } from '@causiq/sdk';

(function (  ) {
    'use strict'

    const uniqueId =
        document.cookie.split(';').filter((item) => item.trim().startsWith('cart='))[0]?.replace('cart=', '')

    const srcUri = document.currentScript.src
    const searchParams = new URLSearchParams(srcUri);
    const moniker = searchParams.get('moniker')


    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log(srcUri)
    console.log(moniker)
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")
    console.log("|||||||||||||||||||||||||||||||||||||||||||||||")

    const transport = new BatchedTransport(1000, sendWithFetch("http://localhost:3001/v1/track"))
    const client = new Causiq(transport);
    client.init(moniker, null, uniqueId)

})()