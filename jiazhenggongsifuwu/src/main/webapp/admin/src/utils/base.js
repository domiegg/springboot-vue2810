const base = {
    get() {
        return {
            url : "http://localhost:8080/jiazhenggongsifuwu/",
            name: "jiazhenggongsifuwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiazhenggongsifuwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "家政公司服务平台"
        } 
    }
}
export default base
