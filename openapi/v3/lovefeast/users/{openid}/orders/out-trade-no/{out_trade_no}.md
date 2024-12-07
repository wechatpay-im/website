---
title: 查询用户捐赠单详情
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户在商户AppID下的唯一标识
| out_trade_no {data-required} | string | 商户系统内部订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->lovefeast->users->_openid_->orders->outTradeNo->_out_trade_no_->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/lovefeast/users/{openid}/orders/out-trade-no/{out_trade_no}')->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/lovefeast/users/{openid}/orders/out-trade-no/{out_trade_no}']->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->lovefeast->users->_openid_->orders->outTradeNo->_out_trade_no_->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/lovefeast/users/{openid}/orders/out-trade-no/{out_trade_no}')->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/lovefeast/users/{openid}/orders/out-trade-no/{out_trade_no}']->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| welfare_trade_id | string | 捐赠订单号
| appid | string | 应用ID
| sub_appid | string | 子商户应用ID
| brand_id | string | 品牌ID
| donate_source | string | 捐赠来源<br/>`MINIPROGRAM_PAY` \| `ENTRUST_PAY` 枚举值之一
| merchant_order | string | 商户订单
| institution_name | string | 捐赠机构名称
| business_id | string | 捐赠项目编号
| business_name | string | 捐赠活动名称
| success_time | string | 支付完成时间
| payer | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-indent=1} | string | 用户标识
| sub_openid {data-indent=1} | string | 用户子标识
| avatar {data-indent=1} | string | 用户头像URL
| nickname {data-indent=1} | string | 用户昵称
| amount | object {data-tooltip="对应PHP的array"} | 订单金额
| device_id | string | 设备编号

{.im-table #response}

参阅 情
