# 会员快捷支付工作台实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 OPO 模拟商城中提供完整的中日英会员快捷支付工作台，供用户在本地审查商户、会员、收银、积分、备用金和退款流程。

**Architecture:** 新页面独立使用一个模块脚本和样式表，通过内存状态实现演示业务流程。商城入口与本地只读预览服务器只增加指向新页面的链接/资源路由；不修改旧快捷支付页面，不接真实 API 或钱包。

**Tech Stack:** 原生 HTML、CSS、ES modules、Node.js 内置只读预览服务器。

**Spec:** `opo-2.0/docs/superpowers/specs/2026-11-02-member-quick-pay-design.md`

## Global Constraints

- 所有余额、汇率、备用金、审核、收款、退款和链上资产均为本地内存模拟。
- 不接 Wise 实时汇率 API，不连接钱包，不触发真实收款、退款、USDT 转账或链上写入。
- USDT 初始模拟备用金额不得低于 100；显示 1.5 倍每日最高积分发行储备参考。
- 商户申请审核通过后才允许登记收款；顾客确认优先，授权代操作须可撤销并记录操作者。
- 页面全部菜单、文案、表格、反馈和帮助支持 `zh-CN`、`ja`、`en`。
- 保留 `member-pay-all.html` 和 `member-pay.html` 原型。
- 未获用户审查通过前，不推送 GitHub、不发布外部站点。

---

### Task 1: 建立独立工作台骨架和三语文案

**Files:**
- Create: `opo-2.0/frontend/member-pay-workbench.html`
- Create: `opo-2.0/frontend/assets/member-pay-workbench.css`
- Create: `opo-2.0/frontend/assets/member-pay-workbench.js`

**Interfaces:**
- 页面脚本通过 `data-view` 区块和 `data-action` 按钮连接导航/演示交互。
- 翻译字典以 `zh-CN`、`ja`、`en` 三套相同 key 对象驱动静态和动态页面文案。
- 全部数据由 `createDemoState()` 初始化，结构含 merchants、members、orders、point lots、ledger。

- [ ] 建立页面语义结构：价值首页、商户申请、会员 ID、收银台、积分/退款、备用金/钱包、交易记录七个区块。
- [ ] 建立语言选择器和演示模式横幅；所有可见文案由三语字典渲染。
- [ ] 设置窄屏 CSS、键盘聚焦、空状态、卡片、表格和对话框样式。
- [ ] 提供虚构商户及虚构 BSC 地址，不预填任何真实钱包资料。

### Task 2: 商户申请、审核、币种与备用金

**Files:**
- Modify: `opo-2.0/frontend/assets/member-pay-workbench.js`

**Interfaces:**
- `submitMerchantApplication(formData)` 返回待审核商户记录。
- `approveMerchant(merchantId)` 将有效申请切换至可用状态。
- 商户记录含 `currency`、`pointName`、`wallet`、`methods`、`consumerRate`、`shareRate`、`reserveTotal`、`reserveFrozen`、`status`。

- [ ] 新增商户申请表单，接受币种决定积分名，接收 BSC 地址、原收银方式、消费省/分享赚比例和备用金额度。
- [ ] 校验初始备用金 >=100 USDT、奖励比例合计不超过 100%、地址字段非空。
- [ ] 显示待审核申请；审核通过后才进入可用商户列表。
- [ ] 展示总额、冻结、可用金额与每日最高发行估值的 1.5 倍参考。
- [ ] 展示 Wise 汇率接入位，但明确使用静态演示换算，不声称实时汇率。

### Task 3: 会员 ID、收银确认和代授权

**Files:**
- Modify: `opo-2.0/frontend/assets/member-pay-workbench.js`

**Interfaces:**
- `registerMember(name, inviterId)` 返回 `OPO-M-xxxx` 会员记录。
- `recordSale({merchantId, memberId, amount, method, reference})` 建立待客户确认订单，不立即发行积分。
- `confirmSale(orderId, actor)` actor 为客户 ID 或已获授权商户 ID；确认时发行两类奖励并更新冻结额。
- `setMerchantAuthorization(memberId, merchantId, enabled)` 控制受托商户代确认权限。

- [ ] 创建会员 ID 页面，显示多币种积分、奖励来源及模拟 USDT 钱包资产视图。
- [ ] 支持按订单展示顾客确认操作和授权代确认；未授权商户不能代确认。
- [ ] 收银只登记商户已通过原收银渠道收到款项，生成去重成交编号及待确认状态。
- [ ] 顾客确认后，按消费省比例发行给顾客，分享赚比例发行给其直接推荐人。
- [ ] 按演示汇率将各发行积分的本币等值换算为 USDT，冻结对应商户备用金；可用金额不足则阻止确认。
- [ ] 确认订单记录操作人、原收款方式、汇率、积分数量及冻结 USDT。

### Task 4: 通兑积分、退款和交易责任流水

**Files:**
- Modify: `opo-2.0/frontend/assets/member-pay-workbench.js`

**Interfaces:**
- `pointBalance(memberId, pointCurrency)` 返回该会员同一积分币种在全 OPO 参与商家的余额。
- `redeemPoints({merchantId, memberId, billAmount, pointCurrency})` 返回核销拆分和模拟跨店责任记录。
- `refundOrder(orderId, amount)` 生成积分冲销、冻结金解锁或待追偿记录。

- [ ] 在目标币种收银时，可选不同发行商店获得的积分进行抵扣；使用演示 FX 表换算并显示原额、折算额与汇率。
- [ ] 核销时扣除积分 lot，按发行商店生成模拟补偿义务，不自动转账。
- [ ] 支持部分/全额模拟退款，根据未使用奖励冲销积分并解锁对应备用金。
- [ ] 已使用奖励的冲回记为待追偿，不显示虚假的退款完成状态。
- [ ] 统一展示按时间排序的收款确认、积分发放/核销、退款、储备冻结/解锁和跨店责任流水。
- [ ] 展示退出说明：只有未结发行责任处理后才可申请退还可用备用金，最终链上退回未连接。

### Task 5: 商城入口、语言可达性与交付检查

**Files:**
- Modify: `opo-2.0/frontend/model-preview.html`
- Modify: `opo-2.0/scripts/start-model-preview.mjs`

**Interfaces:**
- 商城侧栏链接 `/member-pay-workbench.html`。
- 本地预览服务器白名单添加新 HTML、CSS、JS 资源路径。

- [ ] 更新 OPO 侧栏“会员快捷支付系统”入口指向新工作台。
- [ ] 添加本地预览服务器静态路由并保持只读和 loopback 绑定。
- [ ] 对三语切换、主要表单提交流程、客户/受托确认、跨店积分和退款逐区块进行手工浏览器检查。
- [ ] 进行 JavaScript 语法和 HTTP 页面/资源响应检查，不运行自动化测试套件。
- [ ] 启动预览并把新页面在浏览器打开供用户审查；等用户通过后再同步 GitHub/发布测试链接。
