---
title: 商圈会员积分同步
description: 通过积分通知回调API，商圈商户/服务商可针对微信支付前序推送给商圈系统的顾客商圈内交易通知，告知微信支付系统该笔交易的积分情况
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 商圈商户ID
| transaction_id {data-required data-indent=1} | string | 微信订单号
| appid {data-required data-indent=1} | string | 小程序appid
| openid {data-required data-indent=1} | string | 顾客openid
| earn_points {data-required data-indent=1} | boolean | 是否获得积分
| increased_points {data-required data-indent=1} | integer | 订单新增积分值
| points_update_time {data-required data-indent=1} | string | 积分更新时间
| no_points_remarks {data-indent=1} | string | 未获得积分的备注信息
| total_points {data-indent=1} | integer | 顾客积分总额

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->businesscircle->points->notify->postAsync([
  'json' => [
    'sub_mchid'          => '1234567890',
    'transaction_id'     => '1217752501201407033233368018',
    'appid'              => 'wx1234567890abcdef',
    'openid'             => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
    'earn_points'        => true,
    'increased_points'   => 100,
    'points_update_time' => '2020-05-20T13:29:35.120+08:00',
    'no_points_remarks'  => '商品不参与积分活动',
    'total_points'       => 888888,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/businesscircle/points/notify')->postAsync([
  'json' => [
    'sub_mchid'          => '1234567890',
    'transaction_id'     => '1217752501201407033233368018',
    'appid'              => 'wx1234567890abcdef',
    'openid'             => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
    'earn_points'        => true,
    'increased_points'   => 100,
    'points_update_time' => '2020-05-20T13:29:35.120+08:00',
    'no_points_remarks'  => '商品不参与积分活动',
    'total_points'       => 888888,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/businesscircle/points/notify']->postAsync([
  'json' => [
    'sub_mchid'          => '1234567890',
    'transaction_id'     => '1217752501201407033233368018',
    'appid'              => 'wx1234567890abcdef',
    'openid'             => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
    'earn_points'        => true,
    'increased_points'   => 100,
    'points_update_time' => '2020-05-20T13:29:35.120+08:00',
    'no_points_remarks'  => '商品不参与积分活动',
    'total_points'       => 888888,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->businesscircle->points->notify->post([
  'json' => [
    'sub_mchid'          => '1234567890',
    'transaction_id'     => '1217752501201407033233368018',
    'appid'              => 'wx1234567890abcdef',
    'openid'             => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
    'earn_points'        => true,
    'increased_points'   => 100,
    'points_update_time' => '2020-05-20T13:29:35.120+08:00',
    'no_points_remarks'  => '商品不参与积分活动',
    'total_points'       => 888888,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/businesscircle/points/notify')->post([
  'json' => [
    'sub_mchid'          => '1234567890',
    'transaction_id'     => '1217752501201407033233368018',
    'appid'              => 'wx1234567890abcdef',
    'openid'             => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
    'earn_points'        => true,
    'increased_points'   => 100,
    'points_update_time' => '2020-05-20T13:29:35.120+08:00',
    'no_points_remarks'  => '商品不参与积分活动',
    'total_points'       => 888888,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/businesscircle/points/notify']->post([
  'json' => [
    'sub_mchid'          => '1234567890',
    'transaction_id'     => '1217752501201407033233368018',
    'appid'              => 'wx1234567890abcdef',
    'openid'             => 'oWmnN4xxxxxxxxxxe92NHIGf1xd8',
    'earn_points'        => true,
    'increased_points'   => 100,
    'points_update_time' => '2020-05-20T13:29:35.120+08:00',
    'no_points_remarks'  => '商品不参与积分活动',
    'total_points'       => 888888,
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012534698) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012474133)
