import axios from 'axios'
import queryString from 'queryString'

export function param(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}

export const HTTP2 = axios.create({
	baseURL : ' https://www.easy-mock.com/mock/5a1ab45e9840a812456683d2/fpmall/',
	responseType : 'json',
	headers: {
		'content-type': 'application/x-www-form-urlencoded'
	},
	transformRequest : [function(data){
      return queryString.stringify(data);
    }],
    transformResponse: [function (data) {
	    return data
	}]
})






