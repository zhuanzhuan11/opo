# Windows 与 Mac 跨电脑接续开发

本流程只同步源码和文档，不同步运行数据库、上传文件、环境变量、密钥或真实客户资料。当前固定开发分支为 `codex/opo2-approved-preview-20261019`，禁止自动合并 `main`、强制推送或丢弃本地修改。

## 两台电脑首次准备

1. 克隆 `https://github.com/zhuanzhuan11/opo`，切换并跟踪 `origin/codex/opo2-approved-preview-20261019`。不要在用户主目录执行 `git init`。
2. 安装官方 Node.js 24.18.1。推荐使用 `fnm`；项目的 `.node-version` 会固定版本。
3. 设置仓库级安全选项：`git config pull.ff only`、`git config fetch.prune true`、`git config push.default simple`、`git config rebase.autoStash false`、`git config push.autoSetupRemote false`。
4. 在 `opo-2.0` 中运行 `npm run check`。预览使用 `npm run preview:model`，只访问 `http://127.0.0.1:3211`。

## 开工

Mac：

```sh
./scripts/dev-mac.command begin
```

Windows PowerShell：

```powershell
.\scripts\dev-windows.ps1 begin
```

脚本先检查 Node、当前分支、上游和本地修改。只有工作树干净且本地与远端未分叉时，才执行当前分支的 `fetch` 和 `pull --ff-only`，随后运行 `npm run check`。发现本地修改、分叉、错误上游或 `main`/`master` 时会停止，不会自动暂存、变基或合并。

## 收工

1. 查看 `git status --short` 和 `git diff`，确认每个文件的用途。
2. 更新 `opo-2.0/docs/最新开发同步.md`（只记录公开技术信息，不包含内部会话或个人资料），写明本次完成、验证、断点和另一台电脑下一步。
3. 明确列出本次提交文件。不要使用 `git add .`、`git add -A` 或通配符。
4. 运行收工脚本。脚本会再次运行 `npm run check`，只暂存列出的文件，显示摘要，经确认后提交并普通推送当前分支。

Mac 示例（从 `opo-2.0` 目录执行）：

```sh
./scripts/dev-mac.command finish \
  --message "docs: update cross-device handoff" \
  --files opo-2.0/docs/最新开发同步.md opo-2.0/docs/Windows与Mac跨电脑接续开发.md
```

Windows PowerShell 示例：

```powershell
.\scripts\dev-windows.ps1 finish `
  --message "docs: update cross-device handoff" `
  --files opo-2.0/docs/最新开发同步.md opo-2.0/docs/Windows与Mac跨电脑接续开发.md
```

文件参数始终使用仓库根目录相对路径。自动化环境只有在人工已核对清单后才能显式加入 `--yes`；脚本不会提供强制推送选项。

## 私有数据迁移边界

- `database/runtime/` 中的 SQLite、WAL、SHM 仅属于本机。不得用 Git、iCloud 或网盘同步正在运行的数据库，也不得覆盖另一台电脑的现有数据库。
- 当前模型预览不持久化上传文件。后台选择的图片和视频只在浏览器内存中预览；未来真实上传应使用私有对象存储和独立迁移清单，不进入 Git。
- `.env`、`.env.*`、`.secrets/`、`migration-private/`、`review/`、备份、证书和私钥已被忽略或明确禁止提交。示例环境文件只能保留占位说明，不能写入真实值。
- 需要迁移数据库时，先停止写入并运行受控备份，复制到新文件名，在目标电脑用 `OPO_DATABASE` 指向新副本并做恢复核验；未经明确批准不得替换现有数据库。
- 当前 `productionEnabled` 必须保持 `false`，`npm run readiness` 应继续报告 `ready:false`、`canAcceptRealFunds:false`。禁止通过配置开启真实充值、支付、发币或链上执行。

## Windows 仍需逐机完成

Mac 上无法替代验证 Windows。回到 Windows 后需要确认正确仓库路径、保存或提交原有修改、安装并选择 Node 24.18.1、运行开工脚本和 `npm run check`，再用 `npm run preview:model` 打开 3211 预览。任何本地数据库、私有上传、环境变量和密钥都应先盘点，不能从 Mac 覆盖。

## 当前合并状态
Windows唯一开发目录为opo-windows/opo-2.0；旧opo-release及opo-sync目录保留为历史备份/审查目录，不再作为第二开发入口。Windows兼容修复已实机检查，Mac本次未重新实机验证。
