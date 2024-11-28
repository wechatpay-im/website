---
title: 商圈积分授权查询
description: 通过积分授权查询API，商圈商户可自行查询用户积分功能开通情况
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 顾客openid
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 商圈商户ID
| appid {data-required data-indent=1} | string | 小程序appid

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->businesscircle->userAuthorizations->_openid_->getAsync([
  'openid' => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
  'query' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx1234567890abcdef',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/businesscircle/user-authorizations/{openid}')->getAsync([
  'openid' => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
  'query' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx1234567890abcdef',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/businesscircle/user-authorizations/{openid}']->getAsync([
  'openid' => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
  'query' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx1234567890abcdef',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->businesscircle->userAuthorizations->_openid_->get([
  'openid' => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
  'query' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx1234567890abcdef',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/businesscircle/user-authorizations/{openid}')->get([
  'openid' => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
  'query' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx1234567890abcdef',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/businesscircle/user-authorizations/{openid}']->get([
  'openid' => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
  'query' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx1234567890abcdef',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 顾客openid
| authorize_state {data-required} | string | 授权状态
| authorize_time | string | 授权时间
| deauthorize_time | string | 取消授权时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/smart-business-circle/user-authorizations/query-user-authorization.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/user-authorizations/query-user-authorization.html)
