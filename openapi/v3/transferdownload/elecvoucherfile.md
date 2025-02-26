---
title: 下载电子回单PDF文件
description: 请务必对比下载的回单文件的摘要值与查询接口返回的摘要值的一致性，确保得到的回单文件的真实性和完整性。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: warning :warning: {.im-parsed}

本接口依赖前序 [查询回单](/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no/{transfer_bill_no}) 或 [查询回单](/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no/{out_bill_no}) 接口返回的 `download_url`，其中下载地址的域名，路径，参数都可能变化，此文档仅做实现参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| token {data-required data-indent=1} | string | 前序download_url的查询参数
| source {data-required data-indent=1} | string | 前序download_url的查询参数

{.im-table #request}

::: code-group

```php [异步纯链式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance->v3->transferdownload->elecvoucherfile->getAsync([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token'  => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
    'source' => 'elecsign',
  ],
])
->wait();
```

```php [异步声明式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance->chain('v3/transferdownload/elecvoucherfile')->getAsync([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token'  => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
    'source' => 'elecsign',
  ],
])
->wait();
```

```php [异步属性式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance['v3/transferdownload/elecvoucherfile']->getAsync([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token'  => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
    'source' => 'elecsign',
  ],
])
->wait();
```

```php [同步纯链式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance->v3->transferdownload->elecvoucherfile->get([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token'  => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
    'source' => 'elecsign',
  ],
]);
```

```php [同步声明式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance->chain('v3/transferdownload/elecvoucherfile')->get([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token'  => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
    'source' => 'elecsign',
  ],
]);
```

```php [同步属性式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance['v3/transferdownload/elecvoucherfile']->get([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token'  => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
    'source' => 'elecsign',
  ],
]);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(需解析为对应数据) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012716436) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012716455)
