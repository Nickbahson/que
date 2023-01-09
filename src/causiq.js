import { BatchedTransport, Causiq, sendWithFetch  } from '@causiq/sdk';

(function (  ) {
    'use strict'

    const uniqueId =
        document.cookie.split(';').filter((item) => item.trim().startsWith('cart='))[0]?.replace('cart=', '')

    console.log("++++++++++++++++++ document.currentScript.src +++++++++++++++")
    console.log("++++++++++++++++++ document.currentScript.src +++++++++++++++")
    console.log(document.currentScript.src)
    console.log("++++++++++++++++++ document.currentScript.src +++++++++++++++")
    console.log("++++++++++++++++++ document.currentScript.src +++++++++++++++")

    const moniker = 'test'
    const transport = new BatchedTransport(1000, sendWithFetch("http://localhost:3001/v1/track"))
    const c = new Causiq(transport);
    client.init(moniker, null, uniqueId)

})()