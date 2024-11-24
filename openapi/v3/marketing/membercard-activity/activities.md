# 创建活动 {#post}

创建会员活动，可以创建支付后开卡有礼&老会员有礼、以及小程序开卡有礼&老会员有礼，共四种类型的活动。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| card_id {data-required data-indent=1} | string | 会员卡ID
| activity_name {data-required data-indent=1} | string | 活动名称
| activity_type {data-required data-indent=1} | string | 活动类型<br/>`NON_MEMBER_AFTERPAY` \| `MEMBER_AFTERPAY` \| `NON_MEMBER_MINIPROGRAM` \| `MEMBER_MINIPROGRAM` 枚举值之一
| begin_time {data-required data-indent=1} | string | 活动开始时间
| end_time {data-required data-indent=1} | string | 活动结束时间
| award_send_period {data-indent=1} | object {data-tooltip="对应PHP的array"} | 发放时间段
| award_send_time {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 指定时间
| begin_time {data-required data-indent=3} | string | 发放开始时间
| end_time {data-required data-indent=3} | string | 发放结束时间
| award_send_day_time {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 指定时间段
| begin_day_time {data-required data-indent=3} | object {data-tooltip="对应PHP的array"} | 每日发放开始时间
| hours {data-required data-indent=4} | integer | 时
| minutes {data-required data-indent=4} | integer | 分
| seconds {data-required data-indent=4} | integer | 秒
| end_day_time {data-required data-indent=3} | object {data-tooltip="对应PHP的array"} | 每日发放结束时间
| hours {data-required data-indent=4} | integer | 时
| minutes {data-required data-indent=4} | integer | 分
| seconds {data-required data-indent=4} | integer | 秒
| stock_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 优惠券列表
| stock_creator_mchid {data-required data-indent=2} | string | 创建批次的商户号
| stock_id {data-required data-indent=2} | string | 券批次ID
| out_request_no {data-required data-indent=1} | string | 商户请求单号
| pay_activity_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付后活动设置
| logo_url {data-required data-indent=2} | string | 商户logo
| activity_second_title {data-required data-indent=2} | string | 支付结果页活动副标题
| mchid_list {data-indent=2} | string[] | 活动曝光商户号
| activate_setting {data-indent=2} | object {data-tooltip="对应PHP的array"} | 激活方式设置
| activate_type {data-required data-indent=3} | string | 激活类型
| activate_url {data-indent=3} | string | 跳转激活的url
| activate_miniprogram {data-indent=3} | object {data-tooltip="对应PHP的array"} | 跳转激活的小程序
| activate_appid {data-required data-indent=4} | string | 跳转激活的appid
| activate_path {data-required data-indent=4} | string | 跳转激活的path
| payment_setting {data-indent=2} | object {data-tooltip="对应PHP的array"} | 支付设置
| payment_mode {data-indent=3} | object {data-tooltip="对应PHP的array"} | 支付模式
| payment_scene_list {data-indent=4} | string[] | 支付场景列表
| limit_bank {data-indent=3} | string | 指定银行的简称
| goods_tags {data-indent=3} | string[] | 订单优惠标记
| miniprogram_activity_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付前会员活动设置
| outer_str {data-indent=2} | string[] | 指定领取渠道
| award_jump_deploy {data-indent=2} | object {data-tooltip="对应PHP的array"} | 领奖页面跳转配置
| mini_program_appid {data-indent=3} | string | 小程序AppID
| mini_program_path {data-indent=3} | string | 小程序path
| button_text {data-indent=3} | string | 跳转按钮文案

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardActivity->activities->postAsync([
  'json' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_name' => '良品铺子回馈活动',
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time' => '2020-01-29T13:29:35.120+08:00',
    'award_send_period' => [
      'award_send_time' => [[
        'begin_time' => '2020-01-21T00:00:00.000+08:00',
        'end_time' => '2020-01-27T00:00:00.000+08:00',
      ],],
      'award_send_day_time' => [[
        'begin_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
        'end_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
      ],],
    ],
    'stock_list' => [[
      'stock_creator_mchid' => '10000022',
      'stock_id' => '98065001',
    ],],
    'out_request_no' => '100002322019090134234sfdf',
    'pay_activity_setting' => [
      'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
      'activity_second_title' => '湖南麻辣美食券',
      'mchid_list' => ['string'],
      'activate_setting' => [
        'activate_type' => 'AUTO_ACTIVATE',
        'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
        'activate_miniprogram' => [
          'activate_appid' => 'wxea9c30a90fs8d3fe',
          'activate_path' => 'pages/activate/activate',
        ],
      ],
      'payment_setting' => [
        'payment_mode' => [
          'payment_scene_list' => ['string'],
        ],
        'limit_bank' => 'CFT',
        'goods_tags' => ['string'],
      ],
    ],
    'miniprogram_activity_setting' => [
      'outer_str' => ['string'],
      'award_jump_deploy' => [
        'mini_program_appid' => 'wxc0b84a53ed8e8d29',
        'mini_program_path' => 'mall/pages/List',
        'button_text' => '点击',
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-activity/activities')->postAsync([
  'json' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_name' => '良品铺子回馈活动',
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time' => '2020-01-29T13:29:35.120+08:00',
    'award_send_period' => [
      'award_send_time' => [[
        'begin_time' => '2020-01-21T00:00:00.000+08:00',
        'end_time' => '2020-01-27T00:00:00.000+08:00',
      ],],
      'award_send_day_time' => [[
        'begin_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
        'end_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
      ],],
    ],
    'stock_list' => [[
      'stock_creator_mchid' => '10000022',
      'stock_id' => '98065001',
    ],],
    'out_request_no' => '100002322019090134234sfdf',
    'pay_activity_setting' => [
      'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
      'activity_second_title' => '湖南麻辣美食券',
      'mchid_list' => ['string'],
      'activate_setting' => [
        'activate_type' => 'AUTO_ACTIVATE',
        'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
        'activate_miniprogram' => [
          'activate_appid' => 'wxea9c30a90fs8d3fe',
          'activate_path' => 'pages/activate/activate',
        ],
      ],
      'payment_setting' => [
        'payment_mode' => [
          'payment_scene_list' => ['string'],
        ],
        'limit_bank' => 'CFT',
        'goods_tags' => ['string'],
      ],
    ],
    'miniprogram_activity_setting' => [
      'outer_str' => ['string'],
      'award_jump_deploy' => [
        'mini_program_appid' => 'wxc0b84a53ed8e8d29',
        'mini_program_path' => 'mall/pages/List',
        'button_text' => '点击',
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-activity/activities']->postAsync([
  'json' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_name' => '良品铺子回馈活动',
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time' => '2020-01-29T13:29:35.120+08:00',
    'award_send_period' => [
      'award_send_time' => [[
        'begin_time' => '2020-01-21T00:00:00.000+08:00',
        'end_time' => '2020-01-27T00:00:00.000+08:00',
      ],],
      'award_send_day_time' => [[
        'begin_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
        'end_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
      ],],
    ],
    'stock_list' => [[
      'stock_creator_mchid' => '10000022',
      'stock_id' => '98065001',
    ],],
    'out_request_no' => '100002322019090134234sfdf',
    'pay_activity_setting' => [
      'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
      'activity_second_title' => '湖南麻辣美食券',
      'mchid_list' => ['string'],
      'activate_setting' => [
        'activate_type' => 'AUTO_ACTIVATE',
        'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
        'activate_miniprogram' => [
          'activate_appid' => 'wxea9c30a90fs8d3fe',
          'activate_path' => 'pages/activate/activate',
        ],
      ],
      'payment_setting' => [
        'payment_mode' => [
          'payment_scene_list' => ['string'],
        ],
        'limit_bank' => 'CFT',
        'goods_tags' => ['string'],
      ],
    ],
    'miniprogram_activity_setting' => [
      'outer_str' => ['string'],
      'award_jump_deploy' => [
        'mini_program_appid' => 'wxc0b84a53ed8e8d29',
        'mini_program_path' => 'mall/pages/List',
        'button_text' => '点击',
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardActivity->activities->post([
  'json' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_name' => '良品铺子回馈活动',
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time' => '2020-01-29T13:29:35.120+08:00',
    'award_send_period' => [
      'award_send_time' => [[
        'begin_time' => '2020-01-21T00:00:00.000+08:00',
        'end_time' => '2020-01-27T00:00:00.000+08:00',
      ],],
      'award_send_day_time' => [[
        'begin_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
        'end_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
      ],],
    ],
    'stock_list' => [[
      'stock_creator_mchid' => '10000022',
      'stock_id' => '98065001',
    ],],
    'out_request_no' => '100002322019090134234sfdf',
    'pay_activity_setting' => [
      'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
      'activity_second_title' => '湖南麻辣美食券',
      'mchid_list' => ['string'],
      'activate_setting' => [
        'activate_type' => 'AUTO_ACTIVATE',
        'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
        'activate_miniprogram' => [
          'activate_appid' => 'wxea9c30a90fs8d3fe',
          'activate_path' => 'pages/activate/activate',
        ],
      ],
      'payment_setting' => [
        'payment_mode' => [
          'payment_scene_list' => ['string'],
        ],
        'limit_bank' => 'CFT',
        'goods_tags' => ['string'],
      ],
    ],
    'miniprogram_activity_setting' => [
      'outer_str' => ['string'],
      'award_jump_deploy' => [
        'mini_program_appid' => 'wxc0b84a53ed8e8d29',
        'mini_program_path' => 'mall/pages/List',
        'button_text' => '点击',
      ],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-activity/activities')->post([
  'json' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_name' => '良品铺子回馈活动',
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time' => '2020-01-29T13:29:35.120+08:00',
    'award_send_period' => [
      'award_send_time' => [[
        'begin_time' => '2020-01-21T00:00:00.000+08:00',
        'end_time' => '2020-01-27T00:00:00.000+08:00',
      ],],
      'award_send_day_time' => [[
        'begin_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
        'end_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
      ],],
    ],
    'stock_list' => [[
      'stock_creator_mchid' => '10000022',
      'stock_id' => '98065001',
    ],],
    'out_request_no' => '100002322019090134234sfdf',
    'pay_activity_setting' => [
      'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
      'activity_second_title' => '湖南麻辣美食券',
      'mchid_list' => ['string'],
      'activate_setting' => [
        'activate_type' => 'AUTO_ACTIVATE',
        'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
        'activate_miniprogram' => [
          'activate_appid' => 'wxea9c30a90fs8d3fe',
          'activate_path' => 'pages/activate/activate',
        ],
      ],
      'payment_setting' => [
        'payment_mode' => [
          'payment_scene_list' => ['string'],
        ],
        'limit_bank' => 'CFT',
        'goods_tags' => ['string'],
      ],
    ],
    'miniprogram_activity_setting' => [
      'outer_str' => ['string'],
      'award_jump_deploy' => [
        'mini_program_appid' => 'wxc0b84a53ed8e8d29',
        'mini_program_path' => 'mall/pages/List',
        'button_text' => '点击',
      ],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-activity/activities']->post([
  'json' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_name' => '良品铺子回馈活动',
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time' => '2020-01-29T13:29:35.120+08:00',
    'award_send_period' => [
      'award_send_time' => [[
        'begin_time' => '2020-01-21T00:00:00.000+08:00',
        'end_time' => '2020-01-27T00:00:00.000+08:00',
      ],],
      'award_send_day_time' => [[
        'begin_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
        'end_day_time' => [
          'hours' => 9,
          'minutes' => 34,
          'seconds' => 6,
        ],
      ],],
    ],
    'stock_list' => [[
      'stock_creator_mchid' => '10000022',
      'stock_id' => '98065001',
    ],],
    'out_request_no' => '100002322019090134234sfdf',
    'pay_activity_setting' => [
      'logo_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
      'activity_second_title' => '湖南麻辣美食券',
      'mchid_list' => ['string'],
      'activate_setting' => [
        'activate_type' => 'AUTO_ACTIVATE',
        'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
        'activate_miniprogram' => [
          'activate_appid' => 'wxea9c30a90fs8d3fe',
          'activate_path' => 'pages/activate/activate',
        ],
      ],
      'payment_setting' => [
        'payment_mode' => [
          'payment_scene_list' => ['string'],
        ],
        'limit_bank' => 'CFT',
        'goods_tags' => ['string'],
      ],
    ],
    'miniprogram_activity_setting' => [
      'outer_str' => ['string'],
      'award_jump_deploy' => [
        'mini_program_appid' => 'wxc0b84a53ed8e8d29',
        'mini_program_path' => 'mall/pages/List',
        'button_text' => '点击',
      ],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required}| string | 活动ID
| activity_status | string | 活动的当前状态
| create_time | string | 创建时间
| update_time | string | 更新时间
| card_id | string | 会员卡ID
| activity_name | string | 活动名称
| activity_type | string | 活动类型
| begin_time | string | 活动开始时间
| end_time | string | 活动结束时间
| award_send_period | object {data-tooltip="对应PHP的array"} | 发放时间段
| award_send_time {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 指定时间
| begin_time {data-required data-indent=2} | string | 发放开始时间
| end_time {data-required data-indent=2} | string | 发放结束时间
| award_send_day_time {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 指定时间段
| begin_day_time {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 每日发放开始时间
| hours {data-required data-indent=3} | integer | 时
| minutes {data-required data-indent=3} | integer | 分
| seconds {data-required data-indent=3} | integer | 秒
| end_day_time {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 每日发放结束时间
| hours {data-required data-indent=3} | integer | 时
| minutes {data-required data-indent=3} | integer | 分
| seconds {data-required data-indent=3} | integer | 秒
| stock_list | object[] {data-tooltip="对应PHP的array"} | 优惠券列表
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号
| stock_id {data-required data-indent=1} | string | 券批次ID
| out_request_no | string | 商户请求单号
| pay_activity_setting | object {data-tooltip="对应PHP的array"} | 支付后活动设置
| logo_url {data-required data-indent=1} | string | 商户logo
| activity_second_title {data-required data-indent=1} | string | 支付结果页活动副标题
| mchid_list {data-indent=1} | string[] | 活动曝光商户号
| activate_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 激活方式设置
| activate_type {data-required data-indent=2} | string | 激活类型
| activate_url {data-indent=2} | string | 跳转激活的url
| activate_miniprogram {data-indent=2} | object {data-tooltip="对应PHP的array"} | 跳转激活的小程序
| activate_appid {data-required data-indent=3} | string | 跳转激活的appid
| activate_path {data-required data-indent=3} | string | 跳转激活的path
| payment_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付设置
| payment_mode {data-indent=2} | object {data-tooltip="对应PHP的array"} | 支付模式
| payment_scene_list {data-indent=3} | string[] | 支付场景列表
| limit_bank {data-indent=2} | string | 指定银行的简称
| goods_tags {data-indent=2} | string[] | 订单优惠标记
| miniprogram_activity_setting | object {data-tooltip="对应PHP的array"} | 支付前会员活动设置
| outer_str {data-indent=1} | string[] | 指定领取渠道
| award_jump_deploy {data-indent=1} | object {data-tooltip="对应PHP的array"} | 领奖页面跳转配置
| mini_program_appid {data-indent=2} | string | 小程序AppID
| mini_program_path {data-indent=2} | string | 小程序path
| button_text {data-indent=2} | string | 跳转按钮文案

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_1.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/create-activity.html)

# 查询活动列表 {#get}

查询符合条件的多个活动

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| limit {data-indent=1} | integer | 最大资源条数
| offset {data-indent=1} | integer | 请求资源起始位置
| activity_type {data-required data-indent=1} | string | 活动类型<br/>`NON_MEMBER_AFTERPAY` \| `MEMBER_AFTERPAY` \| `NON_MEMBER_MINIPROGRAM` \| `MEMBER_MINIPROGRAM` 枚举值之一
| card_id {data-indent=1} | string | 会员卡ID
| activity_status {data-indent=1} | string | 活动的当前状态<br/>`CREATED` \| `ONGOING` \| `TERMINATED` \| `OVER_TIME` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardActivity->activities->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_status' => 'ONGOING',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-activity/activities')->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_status' => 'ONGOING',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-activity/activities']->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_status' => 'ONGOING',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardActivity->activities->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_status' => 'ONGOING',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-activity/activities')->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_status' => 'ONGOING',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-activity/activities']->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'activity_type' => 'NON_MEMBER_AFTERPAY',
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_status' => 'ONGOING',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 活动详情
| activity_id {data-required data-indent=1} | string | 活动ID
| activity_status {data-indent=1} | string | 活动的当前状态
| create_time {data-indent=1} | string | 创建时间
| update_time {data-indent=1} | string | 更新时间
| card_id {data-indent=1} | string | 会员卡ID
| activity_name {data-indent=1} | string | 活动名称
| activity_type {data-indent=1} | string | 活动类型
| begin_time {data-indent=1} | string | 活动开始时间
| end_time {data-indent=1} | string | 活动结束时间
| award_send_period {data-indent=1} | object {data-tooltip="对应PHP的array"} | 发放时间段
| award_send_time {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 指定时间
| begin_time {data-required data-indent=3} | string | 发放开始时间
| end_time {data-required data-indent=3} | string | 发放结束时间
| award_send_day_time {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 指定时间段
| begin_day_time {data-required data-indent=3} | object {data-tooltip="对应PHP的array"} | 每日发放开始时间
| hours {data-required data-indent=4} | integer | 时
| minutes {data-required data-indent=4} | integer | 分
| seconds {data-required data-indent=4} | integer | 秒
| end_day_time {data-required data-indent=3} | object {data-tooltip="对应PHP的array"} | 每日发放结束时间
| hours {data-required data-indent=4} | integer | 时
| minutes {data-required data-indent=4} | integer | 分
| seconds {data-required data-indent=4} | integer | 秒
| stock_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 优惠券列表
| stock_creator_mchid {data-required data-indent=2} | string | 创建批次的商户号
| stock_id {data-required data-indent=2} | string | 券批次ID
| out_request_no {data-indent=1} | string | 商户请求单号
| pay_activity_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付后活动设置
| logo_url {data-required data-indent=2} | string | 商户logo
| activity_second_title {data-required data-indent=2} | string | 支付结果页活动副标题
| mchid_list {data-indent=2} | string[] | 活动曝光商户号
| activate_setting {data-indent=2} | object {data-tooltip="对应PHP的array"} | 激活方式设置
| activate_type {data-required data-indent=3} | string | 激活类型
| activate_url {data-indent=3} | string | 跳转激活的url
| activate_miniprogram {data-indent=3} | object {data-tooltip="对应PHP的array"} | 跳转激活的小程序
| activate_appid {data-required data-indent=4} | string | 跳转激活的appid
| activate_path {data-required data-indent=4} | string | 跳转激活的path
| payment_setting {data-indent=2} | object {data-tooltip="对应PHP的array"} | 支付设置
| payment_mode {data-indent=3} | object {data-tooltip="对应PHP的array"} | 支付模式
| payment_scene_list {data-indent=4} | string[] | 支付场景列表
| limit_bank {data-indent=3} | string | 指定银行的简称
| goods_tags {data-indent=3} | string[] | 订单优惠标记
| miniprogram_activity_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付前会员活动设置
| outer_str {data-indent=2} | string[] | 指定领取渠道
| award_jump_deploy {data-indent=2} | object {data-tooltip="对应PHP的array"} | 领奖页面跳转配置
| mini_program_appid {data-indent=3} | string | 小程序AppID
| mini_program_path {data-indent=3} | string | 小程序path
| button_text {data-indent=3} | string | 跳转按钮文案
| offset | integer | 请求资源起始位置
| limit | integer | 最大资源条数
| total_count | integer | 资源总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_3.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/query-activity-list.html)
