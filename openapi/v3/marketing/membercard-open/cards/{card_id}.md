# 查询会员卡模板信息 {#get}

通过此接口可查询指定会员卡模板的所有信息

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 会员卡id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->getAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}')->getAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}']->getAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->get([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}')->get([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}']->get([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 会员卡id
| create_time | string | 创建时间
| update_time | string | 更新时间
| remain_quantity | integer | 剩余库存
| status | string | 会员卡状态
| brand | object | 品牌信息
| brand_id {data-indent=1} | string | 品牌id
| display_name {data-indent=1} | string | 品牌展示名称
| appid | string | 商户AppId
| logo_url | string | 会员卡logo
| title | string | 卡名称
| background_picture_url | string | 会员卡背景图
| description | string | 使用须知
| service_phone | string | 服务电话
| code_type | string | 会员码型
| total_quantity | integer | 会员卡总库存
| date_information | object | 有效期
| type {data-indent=1} | string | 有效期类型
| available_begin_time {data-indent=1} | string | 有效期开始时间
| available_end_time {data-indent=1} | string | 有效期结束时间
| available_day_after_receive {data-indent=1} | integer | 生效后N天内有效
| code_mode | string | 会员卡code分配类型
| need_display_level | boolean | 是否展示会员等级
| init_level | string | 会员初始等级
| out_request_no | string | 商户请求单号
| balance_information | object | 储值信息
| need_balance {data-indent=1} | boolean | 是否支持储值
| balance_appid {data-indent=1} | string | 储值小程序appid
| balance_path {data-indent=1} | string | 储值小程序path
| balance_url {data-indent=1} | string | 储值url
| user_information_form | object | 开卡信息
| common_field_list {data-indent=1} | string[] | 平台提供的通用开卡信息字段
| custom_field_list {data-indent=1} | object[] | 商户自定义的开卡信息字段
| type {data-indent=2} | string | 商户自定义的开卡信息字段类型
| name {data-indent=2} | string | 字段名称
| values {data-indent=2} | string[] | 
| additional_statement | object | 商户补充声明
| title {data-indent=1} | string | 标题
| url {data-indent=1} | string | 跳转url
| appid {data-indent=1} | string | 跳转小程序appid
| path {data-indent=1} | string | 跳转小程序path

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_2.shtml)

# 修改会员卡模板信息 {#patch}

通过此接口可更新会员卡的信息，包括基本信息、储值信息、开卡信息、补充说明

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 会员卡id
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 商户AppId
| logo_url {data-indent=1} | string | 会员卡logo
| title {data-indent=1} | string | 卡名称
| background_picture_url {data-indent=1} | string | 会员卡背景图
| description {data-indent=1} | string | 使用须知
| service_phone {data-indent=1} | string | 服务电话
| total_quantity {data-indent=1} | integer | 会员卡总库存
| date_information {data-indent=1} | object | 有效期
| type {data-indent=2} | string | 有效期类型
| available_end_time {data-indent=2} | string | 有效期结束时间
| available_day_after_receive {data-indent=2} | integer | 生效后N天内有效
| wait_days_after_receive {data-indent=2} | integer | 领取后N天开始生效
| need_display_level {data-indent=1} | boolean | 是否展示会员等级
| init_level {data-indent=1} | string | 会员初始等级
| balance_information {data-indent=1} | object | 储值信息
| need_balance {data-indent=2} | boolean | 是否支持储值
| balance_appid {data-indent=2} | string | 储值小程序appid
| balance_path {data-indent=2} | string | 储值小程序path
| balance_url {data-indent=2} | string | 储值url
| user_information_form {data-indent=1} | object | 开卡信息
| can_modify_after_activate {data-indent=2} | boolean | 是否允许修改
| common_field_list {data-indent=2} | string[] | 平台提供的通用开卡信息字段
| custom_field_list {data-indent=2} | object[] | 商户自定义的开卡信息字段
| type {data-indent=3} | string | 商户自定义的开卡信息字段类型
| name {data-indent=3} | string | 字段名称
| values {data-indent=3} | string[] | 
| additional_statement {data-indent=1} | object | 商户补充声明
| title {data-indent=2} | string | 标题
| url {data-indent=2} | string | 跳转url
| appid {data-indent=2} | string | 跳转小程序appid
| path {data-indent=2} | string | 跳转小程序path

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'appid' => 'wxea9c30890f48d5ae',
    'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'title' => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description' => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone' => '010-8877xxxx',
    'total_quantity' => 5000000,
    'date_information' => [
      'type' => 'FIX_TIME_RANGE',
      'available_end_time' => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
      'wait_days_after_receive' => 2,
    ],
    'need_display_level' => true,
    'init_level' => '白银会员',
    'balance_information' => [
      'need_balance' => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path' => 'pages/balance/balance',
      'balance_url' => 'https://xxx.com',
    ],
    'user_information_form' => [
      'can_modify_after_activate' => true,
      'common_field_list' => ['string'],
      'custom_field_list' => [[
        'type' => 'TEXT',
        'name' => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement' => [
      'title' => 'xxx会员卡使用须知',
      'url' => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path' => 'pages/statement/statement',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}')->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'appid' => 'wxea9c30890f48d5ae',
    'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'title' => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description' => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone' => '010-8877xxxx',
    'total_quantity' => 5000000,
    'date_information' => [
      'type' => 'FIX_TIME_RANGE',
      'available_end_time' => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
      'wait_days_after_receive' => 2,
    ],
    'need_display_level' => true,
    'init_level' => '白银会员',
    'balance_information' => [
      'need_balance' => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path' => 'pages/balance/balance',
      'balance_url' => 'https://xxx.com',
    ],
    'user_information_form' => [
      'can_modify_after_activate' => true,
      'common_field_list' => ['string'],
      'custom_field_list' => [[
        'type' => 'TEXT',
        'name' => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement' => [
      'title' => 'xxx会员卡使用须知',
      'url' => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path' => 'pages/statement/statement',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}']->patchAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'appid' => 'wxea9c30890f48d5ae',
    'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'title' => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description' => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone' => '010-8877xxxx',
    'total_quantity' => 5000000,
    'date_information' => [
      'type' => 'FIX_TIME_RANGE',
      'available_end_time' => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
      'wait_days_after_receive' => 2,
    ],
    'need_display_level' => true,
    'init_level' => '白银会员',
    'balance_information' => [
      'need_balance' => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path' => 'pages/balance/balance',
      'balance_url' => 'https://xxx.com',
    ],
    'user_information_form' => [
      'can_modify_after_activate' => true,
      'common_field_list' => ['string'],
      'custom_field_list' => [[
        'type' => 'TEXT',
        'name' => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement' => [
      'title' => 'xxx会员卡使用须知',
      'url' => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path' => 'pages/statement/statement',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'appid' => 'wxea9c30890f48d5ae',
    'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'title' => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description' => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone' => '010-8877xxxx',
    'total_quantity' => 5000000,
    'date_information' => [
      'type' => 'FIX_TIME_RANGE',
      'available_end_time' => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
      'wait_days_after_receive' => 2,
    ],
    'need_display_level' => true,
    'init_level' => '白银会员',
    'balance_information' => [
      'need_balance' => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path' => 'pages/balance/balance',
      'balance_url' => 'https://xxx.com',
    ],
    'user_information_form' => [
      'can_modify_after_activate' => true,
      'common_field_list' => ['string'],
      'custom_field_list' => [[
        'type' => 'TEXT',
        'name' => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement' => [
      'title' => 'xxx会员卡使用须知',
      'url' => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path' => 'pages/statement/statement',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}')->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'appid' => 'wxea9c30890f48d5ae',
    'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'title' => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description' => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone' => '010-8877xxxx',
    'total_quantity' => 5000000,
    'date_information' => [
      'type' => 'FIX_TIME_RANGE',
      'available_end_time' => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
      'wait_days_after_receive' => 2,
    ],
    'need_display_level' => true,
    'init_level' => '白银会员',
    'balance_information' => [
      'need_balance' => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path' => 'pages/balance/balance',
      'balance_url' => 'https://xxx.com',
    ],
    'user_information_form' => [
      'can_modify_after_activate' => true,
      'common_field_list' => ['string'],
      'custom_field_list' => [[
        'type' => 'TEXT',
        'name' => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement' => [
      'title' => 'xxx会员卡使用须知',
      'url' => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path' => 'pages/statement/statement',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}']->patch([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'appid' => 'wxea9c30890f48d5ae',
    'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'title' => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description' => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone' => '010-8877xxxx',
    'total_quantity' => 5000000,
    'date_information' => [
      'type' => 'FIX_TIME_RANGE',
      'available_end_time' => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
      'wait_days_after_receive' => 2,
    ],
    'need_display_level' => true,
    'init_level' => '白银会员',
    'balance_information' => [
      'need_balance' => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path' => 'pages/balance/balance',
      'balance_url' => 'https://xxx.com',
    ],
    'user_information_form' => [
      'can_modify_after_activate' => true,
      'common_field_list' => ['string'],
      'custom_field_list' => [[
        'type' => 'TEXT',
        'name' => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement' => [
      'title' => 'xxx会员卡使用须知',
      'url' => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path' => 'pages/statement/statement',
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_9.shtml)

# 删除会员卡模板 {#delete}

商户可调用此api删除会员卡。删除后，商家将无法通过任何渠道再投放该会员卡。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 会员卡id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->deleteAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}')->deleteAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}']->deleteAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->delete([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}')->delete([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}']->delete([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_11.shtml)