# DNS计划（尚未执行）

用户选择域名：opo3market.com。计划主入口：https://www.opo3market.com。

尚未购买、注册、验证所有权、创建DNS记录或签发证书。

|记录|名称|计划目标|
|---|---|---|
|A|@|已开通服务器的公网IPv4，当前待取得|
|CNAME|www|opo3market.com|

初次部署先验证直接连接和HTTPS，再根据实际访问及代理来源配置决定是否开启额外代理/CDN。无IPv6服务时不添加AAAA记录。不复制未知IP，不修改Gmail域名或配置MX；公开使用Gmail地址不需要把本域名邮件指向Gmail。

服务器反向代理配置候选：Caddyfile.catalog.planned。该文件尚未在服务器运行验证。实际注册和DNS配置必须使用用户控制的注册商账户，不能把第三方已注册的opo.com或opo3.com解析到本项目。
