---
title: 设置支付后展示的积分到账
description: 商户调此接口，若已设置支付后展示积分，且该笔订单对应的积分已到账，则可以入参积分对应的交易商户号+商户订单号将该笔支付后展示的积分状态设置为“已到账”
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡模板id
| code {data-required} | string | 会员卡code
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| mchid {data-required data-indent=1} | string | 直连商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| bonus_value {data-required data-indent=1} | integer | 会员积分值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->bonus->commit->postAsync([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid'        => '1230000109',
    'sub_mchid'    => '1900000109',
    'bonus_value'  => 30,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/commit')->postAsync([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid'        => '1230000109',
    'sub_mchid'    => '1900000109',
    'bonus_value'  => 30,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/commit']->postAsync([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid'        => '1230000109',
    'sub_mchid'    => '1900000109',
    'bonus_value'  => 30,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->bonus->commit->post([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid'        => '1230000109',
    'sub_mchid'    => '1900000109',
    'bonus_value'  => 30,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/commit')->post([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid'        => '1230000109',
    'sub_mchid'    => '1900000109',
    'bonus_value'  => 30,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/commit']->post([
  'card_id' => '478515832665',
  'code' => '478515832665',
  'json' => [
    'out_trade_no' => '1217752501201407033233368018',
    'mchid'        => '1230000109',
    'sub_mchid'    => '1900000109',
    'bonus_value'  => 30,
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter10_2.shtml)
