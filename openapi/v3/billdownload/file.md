---
title: 下载账单
description: 下载账单API为通用接口，交易/资金账单都可以通过该接口获取到对应的账单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| token {data-required data-indent=1} | string | 前序接口返回的`URL.query.token`
| tartype {data-indent=1} | string | 前序接口返回的`URL.query.tartype`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->billdownload->file->getAsync([
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'token'   => 'dN7J6yDgUzbX8Uk3sD4a4e',
    'tartype' => 'GZIP',
  ],
])
->wait();
```

```php [异步声明式]
$instance->chain('v3/billdownload/file')->getAsync([
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'token'   => 'dN7J6yDgUzbX8Uk3sD4a4e',
    'tartype' => 'GZIP',
  ],
])
->wait();
```

```php [异步属性式]
$instance['v3/billdownload/file']->getAsync([
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'token'   => 'dN7J6yDgUzbX8Uk3sD4a4e',
    'tartype' => 'GZIP',
  ],
])
->wait();
```

```php [同步纯链式]
$instance->v3->billdownload->file->get([
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'token'   => 'dN7J6yDgUzbX8Uk3sD4a4e',
    'tartype' => 'GZIP',
  ],
]);
```

```php [同步声明式]
$instance->chain('v3/billdownload/file')->get([
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'token'   => 'dN7J6yDgUzbX8Uk3sD4a4e',
    'tartype' => 'GZIP',
  ],
]);
```

```php [同步属性式]
$instance['v3/billdownload/file']->get([
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'token'   => 'dN7J6yDgUzbX8Uk3sD4a4e',
    'tartype' => 'GZIP',
  ],
]);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(需解析为对应数据) {align=center colspan=3}

{.im-table #response}

参阅
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791868)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013070401)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012810615)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791889)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791909)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012085923)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421189)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421294)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421368)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421461)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013071204)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013071238)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012268886)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012289690)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012083163)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012083134)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012084371)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012084430)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012084687)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012062348)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013417983)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085421)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080230)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085682)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085877)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085803)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012231933)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462137)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462207)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462389)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462614)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080591)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080597)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012167495)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012167003)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012886351)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012124894)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012158422)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012171219)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012163775)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012075366)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012076073)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013332327)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085435)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013332346)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013332309)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013332289)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085172)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013461816)
