---
title: 支付结果页展示会员积分
description: 商户调此接口，可以给用户每笔订单支付结果页展示本次订单会员积分变更信息
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 会员卡模板id
| code | string | 会员卡code
| json | object | 声明请求的`JSON`数据结构
| out_trade_no {data-indent=1} | string | 商户订单号
| mchid {data-indent=1} | string | 直连商户号
| sub_mchid {data-indent=1} | string | 子商户号
| bonus_value {data-indent=1} | integer | 会员积分值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->bonus->prepare->postAsync([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid' => '1230000109',
    'sub_mchid' => '1900000109',
    'bonus_value' => 30,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/prepare')->postAsync([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid' => '1230000109',
    'sub_mchid' => '1900000109',
    'bonus_value' => 30,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/prepare']->postAsync([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid' => '1230000109',
    'sub_mchid' => '1900000109',
    'bonus_value' => 30,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->bonus->prepare->post([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid' => '1230000109',
    'sub_mchid' => '1900000109',
    'bonus_value' => 30,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/prepare')->post([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid' => '1230000109',
    'sub_mchid' => '1900000109',
    'bonus_value' => 30,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/prepare']->post([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid' => '1230000109',
    'sub_mchid' => '1900000109',
    'bonus_value' => 30,
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter10_3.shtml)
