const PROXY_CONFIG=[
{
context: [
"/api",
],
        target: "{{url}}/pengaduan/",
pathRewrite : {
"/api" : ""
},
changeOrigin : true,
secure : false
}
]
module.exports = PROXY_CONFIG;