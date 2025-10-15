# Mastra 应用模板

这个仓库提供一个基于 Mastra 的最小可运行项目骨架，帮助你快速验证和扩展 AI 代理、工具与工作流。默认示例包含一个用于查询天气并生成活动建议的 Agent & Workflow 组合，但整体架构保持通用，可随时替换为自己的业务逻辑。

## 快速开始

1. **安装依赖**

   ```bash
   pnpm install
   ```

2. **配置环境变量**
   - `DEEPSEEK_API_KEY`：DeepSeek 模型调用所需的 API key。
   - 如需持久化存储，可新增 `LIBSQL_URL`、`LIBSQL_AUTH_TOKEN` 等自定义变量，并在 `src/mastra/index.ts` 中替换 `LibSQLStore` 配置。

3. **开发模式**

   ```bash
   pnpm dev
   ```

4. **构建 & 运行**

   ```bash
   pnpm build
   pnpm start
   ```

## 架构概览

- `src/mastra/index.ts`：集中注册 Mastra agents、workflows、工具及服务器路由。
- `src/mastra/agents/`：Agent 定义目录，当前示例展示了如何挂载工具、记忆与模型。
- `src/mastra/tools/`：封装外部 API 的工具层，实现输入/输出校验与错误处理。
- `src/mastra/workflows/`：基于 `createWorkflow` 与 `createStep` 的工作流编排示例，可自由增删步骤。

所有组件都通过 `Mastra` 实例注入，便于替换或扩展。遵循 “先确定数据结构，再填充逻辑” 的原则，你可以把示例 Agent 替换成任意领域的实现，而不影响项目整体骨架。

## 持久化与可观测性

- **存储**：默认使用内存数据库，仅适合本地调试。若要持久化，请把 `LibSQLStore` 的 `url` 改成 `file:../mastra.db` 或远程 libSQL 连接串，并确保 `.mastra/output` 目录有写权限。
- **日志**：使用 `PinoLogger`，默认级别为 `info`，可在 `src/mastra/index.ts` 中按需调整。
- **可观测性**：默认启用了 Mastra 提供的 `DefaultExporter`，方便排查工作流运行细节。

## 目录结构

```bash
├── package.json
├── pnpm-lock.yaml
├── src/
│   └── mastra/
│       ├── agents/
│       ├── index.ts
│       ├── tools/
│       └── workflows/
└── tsconfig.json
```

## 开发建议

- 调整 Agent/Workflow 前先梳理输入输出 schema，减少分支与“特殊情况”。
- 保持函数短小纯粹；复杂流程请拆分为多个 `createStep`，串联后再 `commit()`。
- 每次引入新依赖都要确认不会破坏现有接口，遵守 “Never break userspace”。

## 许可协议

本项目使用 MIT License，详情见 `LICENSE`。
