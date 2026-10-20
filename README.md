# OPO NEXUS · 去中心化商业平台

消费 · 分享 · 共建

**唯一维护的应用源码位于 [`opo-2.0/`](opo-2.0/)。当前为模拟开发版，真实资金入口关闭。** 仓库根目录的 index.html、admin.html 等 HTML 与原使用说明属于 1.0 历史资料，不能作为当前开发或部署入口。保留用于追溯，不继续交替修改。

## 开始开发

1. 阅读 [开发入口](opo-2.0/README.md) 和 [最新技术交接](opo-2.0/docs/最新开发同步.md)。
2. 按 [Windows / Mac 接续流程](opo-2.0/docs/Windows与Mac跨电脑接续开发.md) 同步当前开发分支。Node 固定 24.18.1。
3. 在 opo-2.0 内运行 `npm run check`，以 `npm run preview:model` 启动本机模型预览（3211端口）。
4. 查看 [文档索引](opo-2.0/docs/README.md)、[目录与维护规范](opo-2.0/docs/目录与维护规范.md)、[后续开发与上线顺序](opo-2.0/docs/后续开发与上线顺序.md)。

开发规范见 [CONTRIBUTING.md](CONTRIBUTING.md)。GitHub 开发分支为 `codex/opo2-approved-preview-20261019`，main 不因同步而自动合并。换设备前推送，另一端先拉取；不要同时在多个副本修改同一功能。

仓库只保存代码、测试、示例配置和可公开技术文档。私钥、环境变量、数据库、客户资料、上传和内部会话记录不得进入 Git。
