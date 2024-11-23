---
title: 查询ETC签约状态
description: 通过用户标识、ETC扣费授权协议号查询ETC绑定信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户标识
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 特约商户号
| plan_id {data-required data-indent=1} | string | ETC授权扣费模板ID
| plate_number {data-required data-indent=1} | string | 车牌号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->etc->users->_openid_->contracts->getAsync([
  'openid' => 'onqOjjmM1tad-3ROpncN-yUfa6ua',
  'query' => [
    'sub_mchid' => '1900000109',
    'plan_id' => '123',
    'plate_number' => '浙ASB945',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/vehicle/etc/users/{openid}/contracts')->getAsync([
  'openid' => 'onqOjjmM1tad-3ROpncN-yUfa6ua',
  'query' => [
    'sub_mchid' => '1900000109',
    'plan_id' => '123',
    'plate_number' => '浙ASB945',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/vehicle/etc/users/{openid}/contracts']->getAsync([
  'openid' => 'onqOjjmM1tad-3ROpncN-yUfa6ua',
  'query' => [
    'sub_mchid' => '1900000109',
    'plan_id' => '123',
    'plate_number' => '浙ASB945',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->vehicle->etc->users->_openid_->contracts->get([
  'openid' => 'onqOjjmM1tad-3ROpncN-yUfa6ua',
  'query' => [
    'sub_mchid' => '1900000109',
    'plan_id' => '123',
    'plate_number' => '浙ASB945',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/etc/users/{openid}/contracts')->get([
  'openid' => 'onqOjjmM1tad-3ROpncN-yUfa6ua',
  'query' => [
    'sub_mchid' => '1900000109',
    'plan_id' => '123',
    'plate_number' => '浙ASB945',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/etc/users/{openid}/contracts']->get([
  'openid' => 'onqOjjmM1tad-3ROpncN-yUfa6ua',
  'query' => [
    'sub_mchid' => '1900000109',
    'plan_id' => '123',
    'plate_number' => '浙ASB945',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required}| string | 发起签约的appid
| sp_mchid {data-required}| string | 服务商商户号
| sp_openid {data-required}| string | 用户在发起签约APP的标识
| sub_appid | string | 子商户appid
| sub_mchid | string | 特约商户号
| contract_id {data-required}| string | ETC扣费授权协议号
| bind_state {data-required}| string | ETC绑定状态
| plate_number {data-required}| string | 绑定的车牌号
| sub_openid | string | 用户在发起签约子APP的标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_4_5.shtml)
