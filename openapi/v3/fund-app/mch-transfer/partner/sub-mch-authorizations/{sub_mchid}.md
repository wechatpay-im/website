---
title: 查询子商户商家转账授权状态
description: 查询子商户商家转账授权状态 注：单个商户的接口频率限制为100次/s
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->subMchAuthorizations->_sub_mchid_->getAsync([
  'sub_mchid' => '1900001121',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/sub-mch-authorizations/{sub_mchid}')->getAsync([
  'sub_mchid' => '1900001121',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/sub-mch-authorizations/{sub_mchid}']->getAsync([
  'sub_mchid' => '1900001121',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->subMchAuthorizations->_sub_mchid_->get([
  'sub_mchid' => '1900001121',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/sub-mch-authorizations/{sub_mchid}')->get([
  'sub_mchid' => '1900001121',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/sub-mch-authorizations/{sub_mchid}']->get([
  'sub_mchid' => '1900001121',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| state {data-required} | string | 授权状态<br/>`AUTHORIZED` \| `UNAUTHORIZED` \| `CANCELED` 枚举值之一
| apply_order | object {data-tooltip="对应PHP的array"} | 授权申请单
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| out_apply_no {data-required data-indent=1} | string | 商户申请单号
| state {data-required data-indent=1} | string | 授权申请单状态<br/>`INVITED` \| `PASSED` \| `REJECTED` \| `EXPIRED` 枚举值之一
| accept_time {data-required data-indent=1} | string | 授权申请受理时间
| update_time {data-required data-indent=1} | string | 最后一次状态变更时间
| authorization_time | string | 授权时间
| cancel_authorization_time | string | 解除授权时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015469112)
