# OPO2.0 已确认界面与交付入口

2026-10-19：最新确认的红白商城、经济模型、城市资格和节点页面从 **[交付与运行入口](docs/OPO2.0交付与运行入口.md)** 开始。运行 `npm run preview:model` 打开 `http://127.0.0.1:3211`。公开演示：[OPO2.0测试站](https://opo-member-demo.guiguowang09.chatgpt.site)。

[使用操作手册](docs/OPO2.0使用操作手册.md) · [上线资料与链上开发清单](docs/OPO2.0上线资料与链上开发清单.md) · [PDF手册](docs/handbooks/OPO2.0使用操作手册-20261019.pdf)。

**当前已交付的是可运行候选界面、测试和上线准备，不是完整资金版。** 下方历史后端沙盒含旧经济规则，未与最新界面和真实合约集成；`npm start` 不能作为批准模型的资金生产入口。保持生产资金启动拦截，不能通过环境变量绕过。新规则以 `config/approved-economics.json` 和本轮手册为准，历史权益不得静默转换。

---

# OPO 2.0 开发预览

完整审核资料和开发文档仅保存在项目所有者的 Google Drive，未随本次源码公开发布。本次新增的上线核查在公开 docs/；历史完整审核资料及 review/ 仍在完整ZIP中。

[完整资料下载（需要所有者的Google账号权限）](https://drive.google.com/file/d/1NHvOhYkO8Rbns_1KcwyPHcGu59lEcoto/view)

# OPO 2.0 · 开发预览与完整审核资料

当前版本：2.0.0-preview.3，2026-10-17。

这是可在 Windows / macOS 运行的前后端开发预览，有服务端登录、独立 SQLite 数据库和订单业务。所有资产操作是测试账本；不是正式上线商城，不可充值。生产启动开关会拒绝启动。城市资格发放、真实持币奖励、BSC 支付/销毁/LP 和外部 AI 尚未完成，详见 docs/上线核查与剩余条件.md。

## 先审核资料

双击根目录“打开审核包.html”。完整保留原商城、独立后台、原开发要求、V3 修订文档和 PDF，使用相对路径。无需安装软件；历史原型与2.0数据库互不相通。

## 运行 2.0

1. 安装官方 Node.js 24.18.1 或经过测试的兼容24版本。
2. 终端进入本文件所在的 `opo-2.0` 文件夹。
3. 执行 `node backend/server.mjs`。
4. 浏览器打开 `http://127.0.0.1:3200`。不要直接双击 frontend/index.html；它需要服务端。
5. 注册测试账户，在“我的积分”领取一次测试额度，再购买8.90商品。

无第三方运行依赖，不需要复制代码或安装 npm 包。数据库自动创建在 database/runtime/opo.db，该目录不上传 GitHub/云端。

Windows 可运行 scripts/start-windows.ps1；macOS 可从终端运行 `bash scripts/start-mac.command`。不要求更改系统安全设置。

## 管理员初始化

没有默认密码，历史原型的公开演示密码不能用于2.0。

macOS 的 zsh 终端：

```sh
read -s 'OPO_ADMIN_PASSWORD?设置管理员密码（至少12位）: '
export OPO_ADMIN_PASSWORD
node scripts/bootstrap.mjs
unset OPO_ADMIN_PASSWORD
```

Windows PowerShell：

```powershell
$opoSecret = Read-Host '设置管理员密码（至少12位）' -AsSecureString
$env:OPO_ADMIN_PASSWORD = [System.Net.NetworkCredential]::new('', $opoSecret).Password
node scripts/bootstrap.mjs
Remove-Item Env:OPO_ADMIN_PASSWORD
```

默认管理员账号为 owner。仅当没有管理员时创建，不覆盖已有账号。密码由使用者自行输入，不要放入GitHub或发送给他人。

## 目录

|目录|用途|
|---|---|
|frontend/|独立商城、商家中心、后台页面及公共样式脚本|
|backend/|HTTP API、身份校验、订单与积分业务|
|database/migrations/|数据库建表和版本迁移|
|database/runtime/|运行数据库；本机生成、禁止提交|
|integrations/|真实支付、链上、智能体的接入合同与待办|
|deployment/|Docker、环境模板、部署说明|
|maintenance/|备份、恢复、更新、故障处置|
|scripts/|Windows/Mac启动、管理员初始化、备份|
|tests/|资金规则与接口测试|
|docs/|开发文档、接口、实施状态、验收细则|
|review/|完整历史审核资料原件|

## 验证与备份

`node --test tests/*.test.mjs` 运行服务端和HTTP测试。`node scripts/backup.mjs` 生成数据库一致性备份并检查；备份包含私人业务数据，不随公开代码发布。

## 云端与苹果电脑同步

GitHub 保存源代码和审核资料；Google Drive 保存本次完整ZIP快照。在苹果电脑登录相同账户下载解压即可。后续代码更新需重新下载或使用 Git 拉取，ZIP不会自动变成持续同步的业务数据库。

若Windows与Mac需要同时看到相同订单，必须共同访问同一台已部署服务器。不能把正在写入的SQLite文件放进网盘同步目录并让两台机器同时运行，否则可能冲突或损坏。当前没有部署公网业务服务器。

## 技术路线

本次沿用已有OPO视觉和功能需求，新增独立服务端，未把Mercur/Medusa/Boson代码冒充已集成。该轻量预览便于跨平台审核；是否迁移成熟电商底座、PostgreSQL及正式链上合约，必须完成选型和安全评审。SQLite目前为单实例数据库，不宣称支持生产高并发。

公开包脱敏说明：历史资料中的固定演示口令已移除，旧1.0密码入口停用并链接独立审核后台。本机原始资料未修改。


## 2026-10-17 加固更新

已补充权限、报价、可配置提成及双人复核、管理员动态验证码、内部对账、版本化迁移、备份恢复检查和CI。操作见 [本次加固使用说明](maintenance/本次加固使用说明.md)，实际缺口见 [上线核查与剩余条件](docs/上线核查与剩余条件.md)。本版仍不可接收真实资金。

## 首期商品浏览与订单咨询

用户已确认首期仅展示咨询。新增独立catalog模式，资产接口保持关闭，支持真实商品录入及咨询收件箱。参见 [首期部署与验收](docs/首期部署与验收.md)、[已确认范围](docs/首期上线范围.md) 和 [域名与托管建议](docs/域名与托管建议.md)。已确认平台名称OPO及公开客服邮箱，商品暂无；域名与托管尚未取得，未对公网部署。
