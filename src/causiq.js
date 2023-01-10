import { BatchedTransport, Causiq, sendWithFetch  } from '@causiq/sdk';

(function (  ) {
    'use strict'

    const cqid =
        document.cookie.split(';').filter((item) => item.trim().startsWith('cqid='))[0]?.replace('cqid=', '')

    const uniqueId =
        document.cookie.split(';').filter((item) => item.trim().startsWith('cart='))[0]?.replace('cart=', '')

    const srcUri = document.currentScript.src
    const url = new URL(srcUri);
    const searchParams = new URLSearchParams(url.search);
    const moniker = searchParams.get('moniker')
    const trackUrl = searchParams.get('trackUrl')

    const transport = new BatchedTransport(1000, sendWithFetch(trackUrl))
    const client = new Causiq(transport);
    client.init(moniker, null, uniqueId)
    if ( uniqueId ) {
        // When uniqueId is available, update the default id to that.
        client.identify(uniqueId, cqid)
    }

})()