Basic login/authentication module using hooks/context

## Stack
React, react-router, Express

SASS

PSQL, Webpack, Babel


# TODO
- add roles to users
- sessions - keep users logged in too (remember for 1 year?)
- cookies
- localStorage

# Security

I chose to store JWTs (to verify sessions) in cookies over localStorage due to XSS concerns. Still vulnerable to XSRF/CSRF as indicted in the answers below, along with prevention methods.
https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage
https://stackoverflow.com/a/37396572/11666827