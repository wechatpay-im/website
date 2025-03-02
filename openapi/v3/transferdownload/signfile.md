---
title: 下载电子回单
description: 下载电子回单API为通用接口，商家转账等业务电子回单均可通过该接口进行下载。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object | 声明请求的查询参数
| token {data-required data-indent=1} | string | 前序download_url的查询参数

{.im-table #request}

::: code-group

```php [异步纯链式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance->v3->transferdownload->signfile->getAsync([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
])
->wait();
```

```php [异步声明式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance->chain('v3/transferdownload/signfile')->getAsync([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
])
->wait();
```

```php [异步属性式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance['v3/transferdownload/signfile']->getAsync([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
])
->wait();
```

```php [同步纯链式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance->v3->transferdownload->signfile->get([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
]);
```

```php [同步声明式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance->chain('v3/transferdownload/signfile')->get([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
]);
```

```php [同步属性式]
$stack = clone $instance->getDriver()->select()->getConfig('handler');
$stack->remove('verifier');

$instance['v3/transferdownload/signfile']->get([
  'sink' => './saved-sign-file.pdf',
  'handler' => $stack,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
]);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(保存后按本地PDF文件查看) {align=center colspan=3}

{.im-table #response}

参阅
- [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_15.shtml)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012269010)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012158314)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012163403)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012163705)
