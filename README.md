# 留学路标 · Study Waypoint

以官方来源为依据的留学项目目录。通过学校、项目、适用人群和申请窗口查找交换、访学、暑校等机会，并保留核验来源和时间。

## 本地运行

使用 Node.js 24。

```sh
npm ci
npm run dev
```

打开 [中文版目录](http://localhost:3000/zh/programs)。默认读取仓库内已有的 JSON 数据。

## 数据发布

`NEXT_PUBLIC_SITE_URL` 用于配置正式站点地址。配置 `PROGRAM_FEED_BASE_URL` 后可读取自有的版本化项目数据源。目录继续使用已验证的项目批次和字段证据展示状态。

采集和验证规则见 [项目说明](docs/project/brief.md) 与 [留学项目采集字段与溯源](docs/project/data-and-provenance.md)。

## 项目来源

本站以 Henry Yang 的 [Study in China Atlas](https://github.com/computersciencefreshmen/StudyInChina) 为起点，经作者授权复用其代码和设计。
