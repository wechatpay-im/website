# 创建及列表查询商家名片会员卡模板 {#mix}

## 创建会员卡模板 {#post}

通过此接口可以创建一张会员卡模板，创建成功将获得会员卡模板card_id

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| appid {data-required data-indent=1} | string | 商户AppId
| card_type {data-required data-indent=1} | string | 会员卡类型<br/>`PURCHASE` \| `NORMAL` \| `BALANCE` 枚举值之一
| card_title {data-required data-indent=1} | string | 卡名称
| card_color {data-required data-indent=1} | string | 卡背景颜色
| card_picture_url {data-required data-indent=1} | string | 卡背景图URL
| code_mode {data-required data-indent=1} | string | 会员卡code分配类型<br/>`SYSTEM_ALLOCATE` \| `MERCHANT_ALLOCATE` 枚举值之一
| code_type {data-required data-indent=1} | string | 会员码型<br/>`NONE_CODE` \| `BAR_CODE` \| `QR_CODE` \| `BAR_CODE_AND_QR_CODE` \| `JUMP_MINI_PROGRAM` 枚举值之一
| code_jump_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 会员码跳转信息
| jump_appid {data-indent=2} | string | 会员码跳转AppID
| jump_path {data-indent=2} | string | 会员码跳转路径
| benefits {data-required data-indent=1} | string | 会员权益
| notify_url {data-required data-indent=1} | string | 回调地址
| need_pinned {data-indent=1} | boolean | 是否置顶
| need_display_level {data-indent=1} | boolean | 是否展示会员等级
| init_level {data-indent=1} | string | 会员初始等级
| service_phone {data-indent=1} | string | 服务电话
| legal_agreement {data-indent=1} | string | 商家法务协议
| valid_date_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 会员卡有效期
| type {data-required data-indent=2} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=2} | string | 有效期开始时间
| available_end_time {data-indent=2} | string | 有效期结束时间
| available_day_after_receive {data-indent=2} | integer | 生效后N天内有效
| points_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 积分信息
| jump_appid {data-indent=2} | string | 积分跳转AppID
| jump_path {data-indent=2} | string | 积分跳转路径
| balance_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 储值信息
| jump_appid {data-indent=2} | string | 储值小程序AppID
| jump_path {data-indent=2} | string | 储值小程序路径
| purchase_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 付费会员信息
| price {data-indent=2} | number | 付费会员价格
| jump_appid {data-indent=2} | string | 付费会员跳转AppID
| jump_path {data-indent=2} | string | 付费会员跳转路径
| user_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户开卡信息
| common_field_list {data-indent=2} | string[] | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| custom_field_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| type {data-indent=3} | string | 商户自定义的开卡信息字段类型<br/>`CHECK_BOX` \| `RADIO` 枚举值之一
| name {data-indent=3} | string | 字段名称
| values {data-indent=3} | string[] | 字段值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->cards->postAsync([
  'json' => [
    'brand_id'               => '1004',
    'appid'                  => 'wxea9c30890f48d5ae',
    'card_type'              => 'PURCHASE',
    'card_title'             => '测试卡',
    'card_color'             => '#FFFF00',
    'card_picture_url'       => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'code_type'              => 'NONE_CODE',
    'code_jump_information'  => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/code/code',
    ],
    'benefits'               => '会员折扣、专属价',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/notify.php',
    'need_pinned'            => true,
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'service_phone'          => '010-8877xxxx',
    'legal_agreement'        => '商家需在 48 小时内发货，若商品存在质量问题，用户可在 7 天内申请退货。',
    'valid_date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'points_information'     => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/points/points',
    ],
    'balance_information'    => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/balance/balance',
    ],
    'purchase_information'   => [
      'price'      => 100,
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/purchase/purchase',
    ],
    'user_information'       => [
      'common_field_list' => ['USER_FORM_FLAG_SEX'],
      'custom_field_list' => [[
        'type'   => 'CHECK_BOX',
        'name'   => '喜欢的运动',
        'values' => ['篮球'],
      ],],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/cards')->postAsync([
  'json' => [
    'brand_id'               => '1004',
    'appid'                  => 'wxea9c30890f48d5ae',
    'card_type'              => 'PURCHASE',
    'card_title'             => '测试卡',
    'card_color'             => '#FFFF00',
    'card_picture_url'       => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'code_type'              => 'NONE_CODE',
    'code_jump_information'  => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/code/code',
    ],
    'benefits'               => '会员折扣、专属价',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/notify.php',
    'need_pinned'            => true,
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'service_phone'          => '010-8877xxxx',
    'legal_agreement'        => '商家需在 48 小时内发货，若商品存在质量问题，用户可在 7 天内申请退货。',
    'valid_date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'points_information'     => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/points/points',
    ],
    'balance_information'    => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/balance/balance',
    ],
    'purchase_information'   => [
      'price'      => 100,
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/purchase/purchase',
    ],
    'user_information'       => [
      'common_field_list' => ['USER_FORM_FLAG_SEX'],
      'custom_field_list' => [[
        'type'   => 'CHECK_BOX',
        'name'   => '喜欢的运动',
        'values' => ['篮球'],
      ],],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/cards']->postAsync([
  'json' => [
    'brand_id'               => '1004',
    'appid'                  => 'wxea9c30890f48d5ae',
    'card_type'              => 'PURCHASE',
    'card_title'             => '测试卡',
    'card_color'             => '#FFFF00',
    'card_picture_url'       => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'code_type'              => 'NONE_CODE',
    'code_jump_information'  => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/code/code',
    ],
    'benefits'               => '会员折扣、专属价',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/notify.php',
    'need_pinned'            => true,
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'service_phone'          => '010-8877xxxx',
    'legal_agreement'        => '商家需在 48 小时内发货，若商品存在质量问题，用户可在 7 天内申请退货。',
    'valid_date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'points_information'     => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/points/points',
    ],
    'balance_information'    => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/balance/balance',
    ],
    'purchase_information'   => [
      'price'      => 100,
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/purchase/purchase',
    ],
    'user_information'       => [
      'common_field_list' => ['USER_FORM_FLAG_SEX'],
      'custom_field_list' => [[
        'type'   => 'CHECK_BOX',
        'name'   => '喜欢的运动',
        'values' => ['篮球'],
      ],],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->cards->post([
  'json' => [
    'brand_id'               => '1004',
    'appid'                  => 'wxea9c30890f48d5ae',
    'card_type'              => 'PURCHASE',
    'card_title'             => '测试卡',
    'card_color'             => '#FFFF00',
    'card_picture_url'       => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'code_type'              => 'NONE_CODE',
    'code_jump_information'  => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/code/code',
    ],
    'benefits'               => '会员折扣、专属价',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/notify.php',
    'need_pinned'            => true,
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'service_phone'          => '010-8877xxxx',
    'legal_agreement'        => '商家需在 48 小时内发货，若商品存在质量问题，用户可在 7 天内申请退货。',
    'valid_date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'points_information'     => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/points/points',
    ],
    'balance_information'    => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/balance/balance',
    ],
    'purchase_information'   => [
      'price'      => 100,
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/purchase/purchase',
    ],
    'user_information'       => [
      'common_field_list' => ['USER_FORM_FLAG_SEX'],
      'custom_field_list' => [[
        'type'   => 'CHECK_BOX',
        'name'   => '喜欢的运动',
        'values' => ['篮球'],
      ],],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/cards')->post([
  'json' => [
    'brand_id'               => '1004',
    'appid'                  => 'wxea9c30890f48d5ae',
    'card_type'              => 'PURCHASE',
    'card_title'             => '测试卡',
    'card_color'             => '#FFFF00',
    'card_picture_url'       => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'code_type'              => 'NONE_CODE',
    'code_jump_information'  => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/code/code',
    ],
    'benefits'               => '会员折扣、专属价',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/notify.php',
    'need_pinned'            => true,
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'service_phone'          => '010-8877xxxx',
    'legal_agreement'        => '商家需在 48 小时内发货，若商品存在质量问题，用户可在 7 天内申请退货。',
    'valid_date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'points_information'     => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/points/points',
    ],
    'balance_information'    => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/balance/balance',
    ],
    'purchase_information'   => [
      'price'      => 100,
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/purchase/purchase',
    ],
    'user_information'       => [
      'common_field_list' => ['USER_FORM_FLAG_SEX'],
      'custom_field_list' => [[
        'type'   => 'CHECK_BOX',
        'name'   => '喜欢的运动',
        'values' => ['篮球'],
      ],],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/cards']->post([
  'json' => [
    'brand_id'               => '1004',
    'appid'                  => 'wxea9c30890f48d5ae',
    'card_type'              => 'PURCHASE',
    'card_title'             => '测试卡',
    'card_color'             => '#FFFF00',
    'card_picture_url'       => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'code_type'              => 'NONE_CODE',
    'code_jump_information'  => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/code/code',
    ],
    'benefits'               => '会员折扣、专属价',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/notify.php',
    'need_pinned'            => true,
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'service_phone'          => '010-8877xxxx',
    'legal_agreement'        => '商家需在 48 小时内发货，若商品存在质量问题，用户可在 7 天内申请退货。',
    'valid_date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'points_information'     => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/points/points',
    ],
    'balance_information'    => [
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/balance/balance',
    ],
    'purchase_information'   => [
      'price'      => 100,
      'jump_appid' => 'wxea9c30a90fs8d3fe',
      'jump_path'  => '/pages/purchase/purchase',
    ],
    'user_information'       => [
      'common_field_list' => ['USER_FORM_FLAG_SEX'],
      'custom_field_list' => [[
        'type'   => 'CHECK_BOX',
        'name'   => '喜欢的运动',
        'values' => ['篮球'],
      ],],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡模板ID
| brand_id {data-required} | string | 品牌ID
| appid {data-required} | string | 商户AppId
| card_type {data-required} | string | 会员卡类型<br/>`PURCHASE` \| `NORMAL` \| `BALANCE` 枚举值之一
| card_title {data-required} | string | 卡名称
| card_color {data-required} | string | 卡背景颜色
| card_picture_url {data-required} | string | 卡背景图URL
| code_mode {data-required} | string | 会员卡code分配类型<br/>`SYSTEM_ALLOCATE` \| `MERCHANT_ALLOCATE` 枚举值之一
| code_type {data-required} | string | 会员码型<br/>`NONE_CODE` \| `BAR_CODE` \| `QR_CODE` \| `BAR_CODE_AND_QR_CODE` \| `JUMP_MINI_PROGRAM` 枚举值之一
| code_jump_information | object {data-tooltip="对应PHP的array"} | 会员码跳转信息
| jump_appid {data-indent=1} | string | 会员码跳转AppID
| jump_path {data-indent=1} | string | 会员码跳转路径
| benefits {data-required} | string | 会员权益
| notify_url {data-required} | string | 回调地址
| need_pinned | boolean | 是否置顶
| need_display_level | boolean | 是否展示会员等级
| init_level | string | 会员初始等级
| service_phone | string | 服务电话
| legal_agreement | string | 商家法务协议
| valid_date_information {data-required} | object {data-tooltip="对应PHP的array"} | 会员卡有效期
| type {data-required data-indent=1} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=1} | string | 有效期开始时间
| available_end_time {data-indent=1} | string | 有效期结束时间
| available_day_after_receive {data-indent=1} | integer | 生效后N天内有效
| points_information | object {data-tooltip="对应PHP的array"} | 积分信息
| jump_appid {data-indent=1} | string | 积分跳转AppID
| jump_path {data-indent=1} | string | 积分跳转路径
| balance_information | object {data-tooltip="对应PHP的array"} | 储值信息
| jump_appid {data-indent=1} | string | 储值小程序AppID
| jump_path {data-indent=1} | string | 储值小程序路径
| purchase_information | object {data-tooltip="对应PHP的array"} | 付费会员信息
| price {data-indent=1} | number | 付费会员价格
| jump_appid {data-indent=1} | string | 付费会员跳转AppID
| jump_path {data-indent=1} | string | 付费会员跳转路径
| user_information | object {data-tooltip="对应PHP的array"} | 用户开卡信息
| common_field_list {data-indent=1} | string[] | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| custom_field_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| type {data-indent=2} | string | 商户自定义的开卡信息字段类型<br/>`CHECK_BOX` \| `RADIO` 枚举值之一
| name {data-indent=2} | string | 字段名称
| values {data-indent=2} | string[] | 字段值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015336970)

## 查询会员卡模板列表 {#get}

通过此接口可查询指定某品牌的所有会员卡模板列表

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌id
| state {data-indent=1} | string | 状态<br/>`CARD_EFFECTIVE` \| `CARD_INVALID` 枚举值之一
| offset {data-indent=1} | integer | 分页页码
| limit {data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->cards->getAsync([
  'query' => [
    'brand_id' => '1004',
    'state'    => 'CARD_EFFECTIVE',
    'offset'   => 0,
    'limit'    => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/cards')->getAsync([
  'query' => [
    'brand_id' => '1004',
    'state'    => 'CARD_EFFECTIVE',
    'offset'   => 0,
    'limit'    => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/cards']->getAsync([
  'query' => [
    'brand_id' => '1004',
    'state'    => 'CARD_EFFECTIVE',
    'offset'   => 0,
    'limit'    => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->cards->get([
  'query' => [
    'brand_id' => '1004',
    'state'    => 'CARD_EFFECTIVE',
    'offset'   => 0,
    'limit'    => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/cards')->get([
  'query' => [
    'brand_id' => '1004',
    'state'    => 'CARD_EFFECTIVE',
    'offset'   => 0,
    'limit'    => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/cards']->get([
  'query' => [
    'brand_id' => '1004',
    'state'    => 'CARD_EFFECTIVE',
    'offset'   => 0,
    'limit'    => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 总数量
| offset {data-required} | integer | 分页页码
| limit {data-required} | integer | 分页大小
| data | object[] {data-tooltip="对应PHP的array"} | 会员卡模板列表
| card_id {data-required data-indent=1} | string | 会员卡模板ID
| brand_id {data-required data-indent=1} | string | 品牌ID
| appid {data-required data-indent=1} | string | 商户AppId
| card_type {data-required data-indent=1} | string | 会员卡类型<br/>`PURCHASE` \| `NORMAL` \| `BALANCE` 枚举值之一
| card_title {data-required data-indent=1} | string | 卡名称
| card_color {data-required data-indent=1} | string | 卡背景颜色
| card_picture_url {data-required data-indent=1} | string | 卡背景图URL
| code_mode {data-required data-indent=1} | string | 会员卡code分配类型<br/>`SYSTEM_ALLOCATE` \| `MERCHANT_ALLOCATE` 枚举值之一
| code_type {data-required data-indent=1} | string | 会员码型<br/>`NONE_CODE` \| `BAR_CODE` \| `QR_CODE` \| `BAR_CODE_AND_QR_CODE` \| `JUMP_MINI_PROGRAM` 枚举值之一
| code_jump_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 会员码跳转信息
| jump_appid {data-indent=2} | string | 会员码跳转AppID
| jump_path {data-indent=2} | string | 会员码跳转路径
| benefits {data-required data-indent=1} | string | 会员权益
| notify_url {data-required data-indent=1} | string | 回调地址
| need_pinned {data-indent=1} | boolean | 是否置顶
| need_display_level {data-indent=1} | boolean | 是否展示会员等级
| init_level {data-indent=1} | string | 会员初始等级
| service_phone {data-indent=1} | string | 服务电话
| legal_agreement {data-indent=1} | string | 商家法务协议
| valid_date_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 会员卡有效期
| type {data-required data-indent=2} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=2} | string | 有效期开始时间
| available_end_time {data-indent=2} | string | 有效期结束时间
| available_day_after_receive {data-indent=2} | integer | 生效后N天内有效
| points_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 积分信息
| jump_appid {data-indent=2} | string | 积分跳转AppID
| jump_path {data-indent=2} | string | 积分跳转路径
| balance_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 储值信息
| jump_appid {data-indent=2} | string | 储值小程序AppID
| jump_path {data-indent=2} | string | 储值小程序路径
| purchase_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 付费会员信息
| price {data-indent=2} | number | 付费会员价格
| jump_appid {data-indent=2} | string | 付费会员跳转AppID
| jump_path {data-indent=2} | string | 付费会员跳转路径
| user_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户开卡信息
| common_field_list {data-indent=2} | string[] | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| custom_field_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| type {data-indent=3} | string | 商户自定义的开卡信息字段类型<br/>`CHECK_BOX` \| `RADIO` 枚举值之一
| name {data-indent=3} | string | 字段名称
| values {data-indent=3} | string[] | 字段值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015336976)
