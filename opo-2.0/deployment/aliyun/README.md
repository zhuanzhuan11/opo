# 阿里云独立部署准备（未执行）

2026-10-18：用户选择准备阿里云自有环境，保留旧服务器。旧站为供应商SaaS模板，新环境使用可维护的OPO 2.0源码及独立持久数据库，不依赖共享SaaS整库复制。

本目录仅为配置入口，不会创建、计费、修改服务器或发布网站。实际ECS地域、实例、系统、域名与控制权在部署时核实；原30美元/月预算仍适用，具体总价未取得。

## 准备顺序

1. 在用户控制的阿里云账户确定新资源，不覆盖旧站。核实独立管理员身份、恢复方式和最小权限。
2. 确认x86_64 Linux及项目验证过的Node 24.18.1，实际Node路径与systemd模板相符。不从来源不明脚本安装。
3. 使用../systemd/opo-catalog.service及备份模板，核对opo用户、目录和权限。只在目标主机通过systemd-analyze verify后安装，当前未验证systemd运行。
4. 将catalog.env.example复制到主机私有/etc/opo/catalog.env，填写已确认HTTPS域名等字段，不提交私有环境文件；密钥独立保存。服务先仅监听127.0.0.1:3200。
5. 初始化同一持久库中的管理员并完成MFA，执行项目catalog:readiness；配置HTTPS代理及实际可信代理地址。只对外开放所需Web端口，SSH限定维护来源，Node和数据库不公开。
6. 从租户授权导出进行隔离数据迁移和对账，不能直接恢复供应商共享数据库。邀请码、用户ID、根账户映射及旧用户激活须单独验收。
7. 检查电脑/平板/手机及中日英，真实主机重启、备份、恢复和告警；所有门槛通过后安排切换。

当前catalog仅会员注册、商品展示、咨询及管理，不启用付款、充值或代币功能。已有备份脚本不等于已配置OSS上传、轮转或告警；这些都需部署时落实。

阿里云安全组与备份官方资料：
- https://www.alibabacloud.com/help/en/ecs/user-guide/start-using-security-groups
- https://help.aliyun.com/zh/oss/how-to-back-up-the-data-of-an-ecs-instance

私有业务交接和迁移细节见仓库外公开源码范围之外的migration-private资料，不应随源码发布客户数据或供应商凭据。
