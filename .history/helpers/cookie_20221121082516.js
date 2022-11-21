import cookie from "cookie";

export function parseCookies(req) {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}


/* import cookie from "cookie"

function parseCookies(req){
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
 */