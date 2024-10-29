---
title: 商圈会员停车状态同步
description: 通过此API，商圈商户/服务商可将会员的停车状态同步给微信支付，以辅助判断用户到场，用户在商圈内门店消费可自动积商圈会员积分。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 商圈商户ID
| brandid {data-indent=1} | integer | 品牌ID
| appid {data-indent=1} | string | 应用ID
| openid {data-indent=1} | string | 用户标识
| plate_number {data-indent=1} | string | 车牌号
| state {data-indent=1} | string | 状态
| time {data-indent=1} | string | 时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->businesscircle->parkings->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'brandid' => 1000,
    'appid' => 'wx931386123456789e',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plate_number' => '粤B888888',
    'state' => 'IN',
    'time' => '2022-06-01T10:43:39+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/businesscircle/parkings')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'brandid' => 1000,
    'appid' => 'wx931386123456789e',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plate_number' => '粤B888888',
    'state' => 'IN',
    'time' => '2022-06-01T10:43:39+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/businesscircle/parkings']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'brandid' => 1000,
    'appid' => 'wx931386123456789e',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plate_number' => '粤B888888',
    'state' => 'IN',
    'time' => '2022-06-01T10:43:39+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->businesscircle->parkings->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'brandid' => 1000,
    'appid' => 'wx931386123456789e',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plate_number' => '粤B888888',
    'state' => 'IN',
    'time' => '2022-06-01T10:43:39+08:00',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/businesscircle/parkings')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'brandid' => 1000,
    'appid' => 'wx931386123456789e',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plate_number' => '粤B888888',
    'state' => 'IN',
    'time' => '2022-06-01T10:43:39+08:00',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/businesscircle/parkings']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'brandid' => 1000,
    'appid' => 'wx931386123456789e',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plate_number' => '粤B888888',
    'state' => 'IN',
    'time' => '2022-06-01T10:43:39+08:00',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/smart-business-circle/parkings/update-parkings.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/smart-business-circle/parkings/update-parkings.html)
