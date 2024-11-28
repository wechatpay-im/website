---
title: 签约查询接口
description: 根据签约id查询签约信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 签约ID
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-indent=1} | string | 商户签约小程序APPID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->contracts->_contract_id_->getAsync([
  'contract_id' => 'CI8CD208Z7e9906f89',
  'query' => [
    'appid' => 'wx8888888888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/contracts/{contract_id}')->getAsync([
  'contract_id' => 'CI8CD208Z7e9906f89',
  'query' => [
    'appid' => 'wx8888888888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/contracts/{contract_id}']->getAsync([
  'contract_id' => 'CI8CD208Z7e9906f89',
  'query' => [
    'appid' => 'wx8888888888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->contracts->_contract_id_->get([
  'contract_id' => 'CI8CD208Z7e9906f89',
  'query' => [
    'appid' => 'wx8888888888',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/contracts/{contract_id}')->get([
  'contract_id' => 'CI8CD208Z7e9906f89',
  'query' => [
    'appid' => 'wx8888888888',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/contracts/{contract_id}']->get([
  'contract_id' => 'CI8CD208Z7e9906f89',
  'query' => [
    'appid' => 'wx8888888888',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 签约ID
| mchid {data-required} | string | 商户号
| organization_id {data-required} | string | 机构ID
| use_id | string | 用户ID
| openid | string | 签约用户openid
| contract_state {data-required} | string | 签约状态<br/>`NOT_CONTRACTED` \| `TERMINATED` \| `CONTRACTED` 枚举值之一
| contract_signed_time {data-required} | string | 签约时间
| contract_terminated_time | string | 解约时间
| contract_mode {data-required} | string | 签约模式<br/>`LIMIT_BANK_CARD` \| `PRIORITY_BANK_CARD` \| `LIMIT_NONE` 枚举值之一
| contract_bank_card_from {data-required} | string | 签约卡来源<br/>`MERCHANT_LIMITED_BANK_CARD` \| `USER_SELECT_FREE` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html)
