import Constants from "./Constants";

/**
 * 发送get请求
 * @param api 要请求的接口
 */
export function get(api: string) {
    return async (params?: {} | string) => {
        const { headers, url } = Constants;
        return handleData(fetch(buildParams(url + api, params), {
            headers: {
                ...headers,
            }
        }))
    }
}

export function post(api: string) {
    /**
     * 第一个参数作为body参数，第二个参数作为URL path或者查询参数
     */
    return (params: {}) => {
        return async (queryParams?: {} | string) => {
            const { headers, url } = Constants;
            let data = params instanceof FormData ? params : JSON.stringify(params);
            return handleData(fetch(buildParams(url + api, queryParams), {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json',
                    ...headers,
                }
            }))
        }
    }
}

/**
 * 处理接口返回数据
 * @param doAction 
 */
function handleData(doAction: Promise<any>) {
    return new Promise((resolve, reject) => {
        doAction.then((res) => {
            // 解析Content-Type 防止将非json数据进行json转换
            const type = res.headers.get('Content-Type');
            if ((type || '').indexOf('json') !== 1) {
                return res.json();
            }
            return res.text();
        }).then((result) => {
            if (typeof result === 'string') {
                throw new Error(result);
            }
            const { code, msg, data: { list = undefined } = {} } = result; 
            if (code === 401) {
                // todo 跳转到登陆页
                return;
            }
            resolve(list || result);
        }).catch((error) => {
            reject(error);
        })
    })
}

/**
 * 构造参数
 * @param url 
 * @param params 
 */
function buildParams(url: string, params?: {} | string): string {
    let newUrl = new URL(url), finalUrl;
    if (typeof params === 'object') {
        for (const [key, value] of Object.entries(params)) {
            newUrl.searchParams.append(key, value as string);
        }
        finalUrl = newUrl.toString();
    } else if (typeof params === 'string') {
        // 适配path参数
        finalUrl = url.endsWith('/') ? url + params : url + '/' + params;
    } else {
        finalUrl = newUrl.toString();
    }

    console.log('buildParams--->', finalUrl);
    return finalUrl;
}