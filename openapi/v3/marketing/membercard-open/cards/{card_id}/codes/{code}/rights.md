---
title: 设置会员权益
description: 通过此接口商家可设置是否在用户的会员卡详情页展示积分、优惠、发票等权益及服务模块
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| code {data-required} | string | 会员卡code
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| before_bonus_value {data-indent=1} | integer | 变更前的会员积分值
| bonus_value {data-indent=1} | integer | 变更后的会员积分值
| add_bonus_value {data-indent=1} | integer | 会员积分变动值
| out_request_no {data-required data-indent=1} | string | 商户请求单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->rights->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'before_bonus_value' => 500,
    'bonus_value'        => 600,
    'add_bonus_value'    => 100,
    'out_request_no'     => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/rights')->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'before_bonus_value' => 500,
    'bonus_value'        => 600,
    'add_bonus_value'    => 100,
    'out_request_no'     => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/rights']->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'before_bonus_value' => 500,
    'bonus_value'        => 600,
    'add_bonus_value'    => 100,
    'out_request_no'     => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->rights->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'before_bonus_value' => 500,
    'bonus_value'        => 600,
    'add_bonus_value'    => 100,
    'out_request_no'     => '100002322019090134234sfdf',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/rights')->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'before_bonus_value' => 500,
    'bonus_value'        => 600,
    'add_bonus_value'    => 100,
    'out_request_no'     => '100002322019090134234sfdf',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/rights']->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'before_bonus_value' => 500,
    'bonus_value'        => 600,
    'add_bonus_value'    => 100,
    'out_request_no'     => '100002322019090134234sfdf',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012551213) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012729622)
