# OPO2.0交付与运行入口

版本：2026-10-19 已确认框架候选。资金生产状态：禁止启用。

## 给技术与宣发的直接入口

- 总体框架：https://opo-member-demo.guiguowang09.chatgpt.site
- 常见问题：同链接 `/#faq`；详细说明：`/#help`，均有中日英和中文PDF下载。
- LP与奖励：`/#lp`，城市机制在左侧模拟质押区下方。
- 历史节点：`/#nodes`；会员邀请：`/#member`。
- 后台原型：`/admin-preview.html`，仅合成成本预览，不是已鉴权的管理后台。

## 本机运行

使用项目已验证的Node24.18.1，在opo-2.0目录执行：

```text
npm run preview:model
npm run test:model
npm run check
```

浏览器打开http://127.0.0.1:3211，必须通过HTTP服务打开，不能双击模块HTML。当前脚本只监听本机、只提供GET/HEAD白名单静态文件，不连接数据库或真实支付。默认端口占用时设置OPO_PREVIEW_PORT。公开部署静态文件可以使用经过审核的静态托管，必须保留模拟标识，不把它当作用户持久账户系统。

## 验证与复现

- 全量语法与单元测试：npm run check。
- 当前模型：tests/model-preview.test.mjs、city-rewards-preview.test.mjs、approved-economics.test.mjs。
- 浏览器：tests/model-preview-browser.mjs、model-i18n-audit.mjs、model-i18n-browser.mjs、city-rewards-browser.mjs、legacy-nodes-browser.mjs、lp-city-placement-browser.mjs、guides-browser.mjs。
- 浏览器测试需要经过批准的Playwright环境，可通过PLAYWRIGHT_MODULE指向其安装目录，通过BROWSER_EXECUTABLE指定已安装Chrome；未设置时使用playwright默认安装与浏览器。不把测试工具当正式运行依赖。本轮使用本机Chrome和合成钱包测试，不代表Safari/真实设备/主网验收。
- 手册源：docs/handbook-content.json和两份Markdown；PDF生成脚本scripts/build-approved-handbooks.py，需Python reportlab、pypdf、pypdfium2及可用中文字体。可用OPO_CJK_FONT/OPO_CJK_BOLD_FONT指定字体，PDF输出目录用OPO_HANDBOOK_OUTPUT；无嵌入字体时需额外检查兼容性。

## 保留的既有后端

backend/server.mjs、SQLite账本、商品咨询、权限和备份脚本为既有开发候选。它们的旧认购、兑换、佣金参数不自动变成新设计；以最新方案实现正式API、账户持久化、链监听、销毁/奖励状态机后再做集成验收。不要仅修改旧参数或取消production拦截就接收资金。

## 后续资料与研发

详见同目录使用操作手册及上线资料与链上开发清单。源码保存在GitHub独立codex分支并走PR；不上传客户CSV、推荐关系原件、数据库、密钥、review或migration-private。既有PR不被重写，main不直接推送。独立审查人和仓库保护实际状态仍须核定。
