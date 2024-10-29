---
title: 设置会员卡模板权益项
description: 通过此接口商家可设置是否在用户的会员卡详情页展示积分、优惠、发票等权益及服务模块
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 会员卡id
| json | object | 声明请求的`JSON`数据结构
| show_bonus {data-indent=1} | boolean | 是否展示会员积分
| show_favor {data-indent=1} | boolean | 是否展示会员优惠
| bonus {data-indent=1} | object | 会员积分
| init_bonus {data-indent=2} | integer | 会员初始积分值
| bonus_value_word {data-indent=2} | string | 积分值文案
| bonus_cost_title {data-indent=2} | string | 积分价值项标题
| bonus_cost_word {data-indent=2} | string | 积分价值项文案
| bonus_jump_word {data-indent=2} | string | 积分跳转文案
| bonus_jump_appid {data-indent=2} | string | 积分跳转appid
| bonus_jump_path {data-indent=2} | string | 积分跳转path
| bonus_support_appid {data-indent=2} | string | 自助积分跳转appid
| bonus_support_path {data-indent=2} | string | 自助积分跳转path
| favor {data-indent=1} | object | 会员优惠
| show_coupon {data-indent=2} | boolean | 是否展示优惠券
| member_price_word {data-indent=2} | string | 会员专享价文案
| member_price_appid {data-indent=2} | string | 会员专享价跳转appid
| member_price_path {data-indent=2} | string | 会员专享价跳转path

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->rights->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'show_bonus' => true,
    'show_favor' => true,
    'bonus' => [
      'init_bonus' => 100,
      'bonus_value_word' => '我的积分',
      'bonus_cost_title' => '积分兑换',
      'bonus_cost_word' => '500积分=2小时免费停车券',
      'bonus_jump_word' => '更多礼品',
      'bonus_jump_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_jump_path' => '/pages/bonus/bonus',
      'bonus_support_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_support_path' => 'pages/selfbonus/selfbonus',
    ],
    'favor' => [
      'show_coupon' => true,
      'member_price_word' => '周二会员全场八折',
      'member_price_appid' => 'wxea9c30a90fs8d3fe',
      'member_price_path' => 'pages/favor/favor',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/rights')->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'show_bonus' => true,
    'show_favor' => true,
    'bonus' => [
      'init_bonus' => 100,
      'bonus_value_word' => '我的积分',
      'bonus_cost_title' => '积分兑换',
      'bonus_cost_word' => '500积分=2小时免费停车券',
      'bonus_jump_word' => '更多礼品',
      'bonus_jump_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_jump_path' => '/pages/bonus/bonus',
      'bonus_support_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_support_path' => 'pages/selfbonus/selfbonus',
    ],
    'favor' => [
      'show_coupon' => true,
      'member_price_word' => '周二会员全场八折',
      'member_price_appid' => 'wxea9c30a90fs8d3fe',
      'member_price_path' => 'pages/favor/favor',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/rights']->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'show_bonus' => true,
    'show_favor' => true,
    'bonus' => [
      'init_bonus' => 100,
      'bonus_value_word' => '我的积分',
      'bonus_cost_title' => '积分兑换',
      'bonus_cost_word' => '500积分=2小时免费停车券',
      'bonus_jump_word' => '更多礼品',
      'bonus_jump_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_jump_path' => '/pages/bonus/bonus',
      'bonus_support_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_support_path' => 'pages/selfbonus/selfbonus',
    ],
    'favor' => [
      'show_coupon' => true,
      'member_price_word' => '周二会员全场八折',
      'member_price_appid' => 'wxea9c30a90fs8d3fe',
      'member_price_path' => 'pages/favor/favor',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->rights->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'show_bonus' => true,
    'show_favor' => true,
    'bonus' => [
      'init_bonus' => 100,
      'bonus_value_word' => '我的积分',
      'bonus_cost_title' => '积分兑换',
      'bonus_cost_word' => '500积分=2小时免费停车券',
      'bonus_jump_word' => '更多礼品',
      'bonus_jump_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_jump_path' => '/pages/bonus/bonus',
      'bonus_support_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_support_path' => 'pages/selfbonus/selfbonus',
    ],
    'favor' => [
      'show_coupon' => true,
      'member_price_word' => '周二会员全场八折',
      'member_price_appid' => 'wxea9c30a90fs8d3fe',
      'member_price_path' => 'pages/favor/favor',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/rights')->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'show_bonus' => true,
    'show_favor' => true,
    'bonus' => [
      'init_bonus' => 100,
      'bonus_value_word' => '我的积分',
      'bonus_cost_title' => '积分兑换',
      'bonus_cost_word' => '500积分=2小时免费停车券',
      'bonus_jump_word' => '更多礼品',
      'bonus_jump_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_jump_path' => '/pages/bonus/bonus',
      'bonus_support_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_support_path' => 'pages/selfbonus/selfbonus',
    ],
    'favor' => [
      'show_coupon' => true,
      'member_price_word' => '周二会员全场八折',
      'member_price_appid' => 'wxea9c30a90fs8d3fe',
      'member_price_path' => 'pages/favor/favor',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/rights']->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'show_bonus' => true,
    'show_favor' => true,
    'bonus' => [
      'init_bonus' => 100,
      'bonus_value_word' => '我的积分',
      'bonus_cost_title' => '积分兑换',
      'bonus_cost_word' => '500积分=2小时免费停车券',
      'bonus_jump_word' => '更多礼品',
      'bonus_jump_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_jump_path' => '/pages/bonus/bonus',
      'bonus_support_appid' => 'wxea9c30a90fs8d3fe',
      'bonus_support_path' => 'pages/selfbonus/selfbonus',
    ],
    'favor' => [
      'show_coupon' => true,
      'member_price_word' => '周二会员全场八折',
      'member_price_appid' => 'wxea9c30a90fs8d3fe',
      'member_price_path' => 'pages/favor/favor',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter5_1.shtml)
