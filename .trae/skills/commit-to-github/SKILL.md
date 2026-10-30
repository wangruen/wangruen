---
name: commit-to-github
description: 将本仓库暂存、commit 并 push 到 GitHub 远程 github（https://github.com/wangruen/wangruen.git，使用已配置的 SSH 公钥），保留 gitee 的 origin 不动。当用户要求提交到 github、push 到 github、把代码同步到 github 仓库时使用。不要用于向 gitee 推送。
---

# 提交到 GitHub

把当前仓库的改动 commit 并 push 到 GitHub。仓库事实（不要重新发现）：

- 仓库根目录即工作区根目录；默认分支 `master`。
- 已有远程 `origin` → `https://gitee.com/neusoft_wangyao_jsj/wbporojectwangruen.git`（课程仓库）。**永远不要修改或删除 `origin`。**
- GitHub 使用独立远程名 `github` → `https://github.com/wangruen/wangruen.git`。
- 现有提交信息是中文短句（如「第一次高级网页设计作业提交」），沿用该风格。
- 控制台里中文文件名显示为转义/乱码是 PowerShell 显示问题，文件本身正常；不要重命名或"修复"文件名。

## 步骤

1. `git status` + `git diff` 查看改动；`git log --oneline -5` 参考提交信息风格。
2. 按文件名显式 `git add`（中文目录加引号，如 `git add "四级项目/"`），不要盲目 `git add -A`；确认不会提交疑似密钥/凭据文件（.env、credentials 等）。
3. 提交：创建新提交，不用 `--amend`；信息用中文短句说明本次改动目的。
4. 确保 GitHub 远程存在：
   - `git remote get-url github` 成功则不改；
   - 失败则 `git remote add github https://github.com/wangruen/wangruen.git`。
5. 推送：`git push -u github master`。远程统一用 SSH 形式 `git@github.com:wangruen/wangruen.git`（SSH 公钥已配置在 GitHub 账号 `wangruen` 上）。
   - 本机网络事实：HTTPS 直连 github.com 常被 Connection reset；SSH 22 端口可能 Connection refused。`~/.ssh/config` 已配置 `Host github.com → ssh.github.com:443`，SSH 推送走 443 通道即可，无需额外参数。
   - 若报 Permission denied (publickey)：先用 `ssh -T git@github.com` 验证；出现 `Hi wangruen!` 即正常，否则提示用户到 https://github.com/settings/keys 检查（必须是 Authentication Key，且加在 wangruen 账号上）。
   - 若被拒绝（non-fast-forward）：不要 force push；`git fetch github` 后把差异报告给用户，等用户决定 rebase/merge。
6. 完成后报告：提交哈希、推送的分支与远程 URL。不要顺带 push gitee，除非用户明确要求。
