const myUrl = new URL('https://example.com:8000/path/to/resource?query=string#fragment');
console.log('URL:', myUrl); // returns URL object
console.log('URL Protocol:', myUrl.protocol); // returns 'https:'
console.log('URL Hostname:', myUrl.hostname); // returns 'example.com'
console.log('URL Port:', myUrl.port); // returns '8000
console.log('URL Pathname:', myUrl.pathname); // returns '/path/to/resource'
console.log('URL Search:', myUrl.search); // returns '?query=string'
console.log('URL Hash:', myUrl.hash); // returns '#fragment'
console.log('URL Origin:', myUrl.origin); // returns 'https://example.com:8000'
console.log('URL Search Params:', myUrl.searchParams); // returns URLSearchParams object '{ 'query' => 'string' }'
console.log('URL Search Params (query):', myUrl.searchParams.get('query')); // returns 'string'
console.log('URL Search Params (query):', myUrl.searchParams.has('query')); // returns true
console.log('URL Search Params (query):', myUrl.searchParams.keys()); // returns URLSearchParams Iterator '{ 'query' }'
console.log('URL Search Params (query):', myUrl.searchParams.values()); // returns URLSearchParams Iterator { 'string' }
console.log('URL Search Params (query):', myUrl.searchParams.entries()); // returns URLSearchParams Iterator { [ 'query', 'string' ] }
console.log('URL Search Params (query):', myUrl.searchParams.toString()); // returns 'query=string'
console.log('URL Search Params (query):', myUrl.searchParams.append('newParam', 'newValue')); // rturns undefined
console.log('URL Search Params (query):', myUrl.searchParams.delete('newParam')); // returns undefined
console.log('URL Search Params (query):', myUrl.searchParams.set('newParam', 'newValue')); // returns undefined
console.log('URL Search Params (query):', myUrl.searchParams.toString()); // returns 'query=string&newParam=newValue'
