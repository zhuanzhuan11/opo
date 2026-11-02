# OPO 开发续接说明（2026-11-03，供新聊天使用）

## 今日完成

- 完成会员快捷支付工作台页面，沿用此前确认的界面颜色和视觉风格。页面支持中文、日文、英文切换，展示会员积分、商户收款设置、USDT 备用金、积分冻结/退款规则、客户确认与商家代操作授权等模拟流程。
- 将工作台发布到 OPO 公开测试站，并将商城首页及规则测试页中的“会员快捷支付系统”入口指向工作台。旧的单店试用页面和其资源仍保留。
- 测试站 Sites 版本 6 已发布，源码提交：`4a015823f5bd2a85f4b107af8a4a8623d237d140`。
- 跨设备测试链接：<https://opo-eni-simulation.guiguowang09.chatgpt.site/member-pay-workbench?v=20261102-workbench-v6>
- 外网检查：工作台、CSS、JS、商城规则测试页及首页均返回 HTTP 200；规则测试页内的快捷支付菜单入口指向工作台。页面使用模拟状态，没有连接真实钱包、Wise 汇率接口或链上结算。
- 工作台源文件在 `opo-2.0/frontend/member-pay-workbench.html`、`opo-2.0/frontend/assets/member-pay-workbench.css`、`opo-2.0/frontend/assets/member-pay-workbench.js`。设计说明及实现计划位于 `opo-2.0/docs/superpowers/`。

## GitHub 同步状态

- 仓库：<https://github.com/zhuanzhuan11/opo>
- 开发分支：`codex/opo-all-product-payment`
- 完整工作台实现此前已同步到提交 `f03bb8909274321123626e2cd07ce7f10cf518af`。本次新增的续接说明需要与本次提交一并推送；新聊天请核对远端分支和当前工作区状态。
- Sites 测试站源仓库与 GitHub 开发仓库彼此独立：Sites 镜像提交 `4a015823f5bd2a85f4b107af8a4a8623d237d140` 只包含部署页面资源与入口更新，不要将其误认为 GitHub 开发分支提交。

## 下一聊天可直接复制的续接指令

继续 OPO 会员快捷支付项目。先阅读项目根目录 `AGENTS.md`、`opo-2026-11-03-handoff.md`、`opo-2.0/PROJECT_MEMORY.md` 和 `opo-2.0/docs/当前版本交接.md`，然后核对 GitHub 仓库 `zhuanzhuan11/opo` 的 `codex/opo-all-product-payment` 分支最新提交及工作区状态。会员快捷支付工作台已完成并发布到 https://opo-eni-simulation.guiguowang09.chatgpt.site/member-pay-workbench?v=20261102-workbench-v6，Sites 版本 6；已检查工作台 HTML、CSS、JS、首页和商城入口均为 HTTP 200。确认续接说明本次提交已同步后，继续处理我在新聊天中提出的工作。测试站目前是模拟演示，不连接真实钱包、Wise 实时报价或链上结算，不要将其描述为真实资金系统或正式上线。

## 真实部署前仍需实现

- 商户钱包地址登记、BSC 钱包余额读取及授权支付的安全流程。
- Wise 汇率的服务端接入、汇率时间戳与失败处理。
- USDT 备用金的充值、冻结、退款、提现和完整对账；商户储备金规则及退出退款流程。
- 会员积分的跨商户账本、消费扣减、退款冲销与客户确认记录。
- 服务端身份验证、授权、反重放、幂等、审计和异常处理。
- 法律、支付及地区运营要求审查；在真实资金启用前完成安全审计和受控上线验证。
