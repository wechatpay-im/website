# 查询用户会员卡信息 {#get}

通过此接口可查询指定用户会员卡的信息，如会员积分、储值余额、开卡信息等

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| code {data-required} | string | 会员卡code

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->getAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}')->getAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}']->getAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->get([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}')->get([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}']->get([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 会员卡id
| code | string | 会员卡code
| openid | string | 用户标识
| membership_number | string | 会员卡编号
| level | string | 用户等级
| nickname | string | 微信昵称
| head_image_url | string | 微信头像url
| background_picture_url | string | 会员卡背景图
| balance | integer | 用户储值余额
| user_card_status | string | 用户会员卡状态<br/>`NOT_ACTIVATE` \| `EFFECTIVE` \| `EXPIRE` \| `UNAVAILABLE` \| `DELETE` 枚举值之一
| user_information | object {data-tooltip="对应PHP的array"} | 用户开卡时填写的个人信息
| common_field_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 平台提供的通用开卡信息字段
| name {data-indent=2} | string | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_MOBILE` \| `USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| value {data-indent=2} | string | 用户开卡时填写的个人信息
| custom_field_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| name {data-indent=2} | string | 字段名称
| value {data-indent=2} | string | 字段值
| value_list {data-indent=2} | string[] | 字段值列表
| bonus_value | integer | 用户当前积分

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_4.shtml)

# 修改用户会员卡信息 {#patch}

通过此接口可更新指定用户的会员卡背景图、会员卡号、等级、储值余额

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| code {data-required} | string | 会员卡code
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| membership_number {data-indent=1} | string | 会员卡编号
| background_picture_url {data-indent=1} | string | 会员卡背景图
| level {data-indent=1} | string | 用户等级
| out_request_no {data-indent=1} | string | 商户请求单号
| balance_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户储值变更信息
| before_balance {data-required data-indent=2} | integer | 更新前用户储值余额
| balance {data-required data-indent=2} | integer | 更新后用户储值余额
| add_balance {data-required data-indent=2} | integer | 本次余额变动值
| balance_remark {data-indent=2} | string | 储值消耗记录

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'membership_number'      => '316510891298',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'level'                  => '钻石会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'before_balance' => 888,
      'balance'        => 888,
      'add_balance'    => 100,
      'balance_remark' => '购买一杯珍珠奶茶，消耗30元',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}')->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'membership_number'      => '316510891298',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'level'                  => '钻石会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'before_balance' => 888,
      'balance'        => 888,
      'add_balance'    => 100,
      'balance_remark' => '购买一杯珍珠奶茶，消耗30元',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}']->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'membership_number'      => '316510891298',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'level'                  => '钻石会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'before_balance' => 888,
      'balance'        => 888,
      'add_balance'    => 100,
      'balance_remark' => '购买一杯珍珠奶茶，消耗30元',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'membership_number'      => '316510891298',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'level'                  => '钻石会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'before_balance' => 888,
      'balance'        => 888,
      'add_balance'    => 100,
      'balance_remark' => '购买一杯珍珠奶茶，消耗30元',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}')->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'membership_number'      => '316510891298',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'level'                  => '钻石会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'before_balance' => 888,
      'balance'        => 888,
      'add_balance'    => 100,
      'balance_remark' => '购买一杯珍珠奶茶，消耗30元',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}']->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'membership_number'      => '316510891298',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'level'                  => '钻石会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'before_balance' => 888,
      'balance'        => 888,
      'add_balance'    => 100,
      'balance_remark' => '购买一杯珍珠奶茶，消耗30元',
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_8.shtml)
