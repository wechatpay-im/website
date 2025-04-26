# 创建及查询会员卡模板列表信息 {#mix}

## 创建会员卡模板 {#post}

通过此接口可以创建一张会员卡模板，创建成功将获得会员卡模板card_id

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 商户AppId
| logo_url {data-required data-indent=1} | string | 会员卡logo
| brand {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 品牌信息
| brand_id {data-required data-indent=2} | string | 品牌id
| display_name {data-required data-indent=2} | string | 品牌展示名称
| title {data-required data-indent=1} | string | 卡名称
| background_picture_url {data-required data-indent=1} | string | 会员卡背景图
| description {data-required data-indent=1} | string | 使用须知
| service_phone {data-indent=1} | string | 服务电话
| code_type {data-required data-indent=1} | string | 会员码型<br/>`BAR_CODE` \| `QRCODE` \| `BAR_CODE_AND_QRCODE` \| `NONE_CODE` 枚举值之一
| total_quantity {data-indent=1} | integer | 会员卡总库存
| date_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 有效期
| type {data-required data-indent=2} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=2} | string | 有效期开始时间
| available_end_time {data-indent=2} | string | 有效期结束时间
| available_day_after_receive {data-indent=2} | integer | 生效后N天内有效
| code_mode {data-required data-indent=1} | string | 会员卡code分配类型<br/>`SYSTEM_ALLOCATE` \| `MERCHANT_DEPOSIT` \| `REAL_TIME` 枚举值之一
| need_display_level {data-indent=1} | boolean | 是否展示会员等级
| init_level {data-indent=1} | string | 会员初始等级
| out_request_no {data-required data-indent=1} | string | 商户请求单号
| balance_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 储值信息
| need_balance {data-indent=2} | boolean | 是否支持储值
| balance_appid {data-indent=2} | string | 储值小程序appid
| balance_path {data-indent=2} | string | 储值小程序path
| balance_url {data-indent=2} | string | 储值url
| user_information_form {data-indent=1} | object {data-tooltip="对应PHP的array"} | 开卡信息
| common_field_list {data-indent=2} | string[] | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_MOBILE` \| `USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| custom_field_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| type {data-indent=3} | string | 商户自定义的开卡信息字段类型<br/>`TEXT` \| `SELECT` \| `RADIO` \| `CHECK_BOX` 枚举值之一
| name {data-indent=3} | string | 字段名称
| values {data-indent=3} | string[] | 字段值
| additional_statement {data-indent=1} | object {data-tooltip="对应PHP的array"} | 商户补充声明
| title {data-indent=2} | string | 标题
| url {data-indent=2} | string | 跳转url
| appid {data-indent=2} | string | 跳转小程序appid
| path {data-indent=2} | string | 跳转小程序path

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->postAsync([
  'json' => [
    'appid'                  => 'wxea9c30890f48d5ae',
    'logo_url'               => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'brand'                  => [
      'brand_id'     => '1004',
      'display_name' => '微信支付',
    ],
    'title'                  => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description'            => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone'          => '010-8877xxxx',
    'code_type'              => 'BAR_CODE',
    'total_quantity'         => 5000000,
    'date_information'       => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'need_balance'  => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path'  => 'pages/balance/balance',
      'balance_url'   => 'https://xxx.com',
    ],
    'user_information_form'  => [
      'common_field_list' => ['USER_FORM_FLAG_MOBILE'],
      'custom_field_list' => [[
        'type'   => 'TEXT',
        'name'   => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement'   => [
      'title' => 'xxx会员卡使用须知',
      'url'   => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path'  => 'pages/statement/statement',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards')->postAsync([
  'json' => [
    'appid'                  => 'wxea9c30890f48d5ae',
    'logo_url'               => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'brand'                  => [
      'brand_id'     => '1004',
      'display_name' => '微信支付',
    ],
    'title'                  => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description'            => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone'          => '010-8877xxxx',
    'code_type'              => 'BAR_CODE',
    'total_quantity'         => 5000000,
    'date_information'       => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'need_balance'  => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path'  => 'pages/balance/balance',
      'balance_url'   => 'https://xxx.com',
    ],
    'user_information_form'  => [
      'common_field_list' => ['USER_FORM_FLAG_MOBILE'],
      'custom_field_list' => [[
        'type'   => 'TEXT',
        'name'   => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement'   => [
      'title' => 'xxx会员卡使用须知',
      'url'   => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path'  => 'pages/statement/statement',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards']->postAsync([
  'json' => [
    'appid'                  => 'wxea9c30890f48d5ae',
    'logo_url'               => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'brand'                  => [
      'brand_id'     => '1004',
      'display_name' => '微信支付',
    ],
    'title'                  => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description'            => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone'          => '010-8877xxxx',
    'code_type'              => 'BAR_CODE',
    'total_quantity'         => 5000000,
    'date_information'       => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'need_balance'  => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path'  => 'pages/balance/balance',
      'balance_url'   => 'https://xxx.com',
    ],
    'user_information_form'  => [
      'common_field_list' => ['USER_FORM_FLAG_MOBILE'],
      'custom_field_list' => [[
        'type'   => 'TEXT',
        'name'   => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement'   => [
      'title' => 'xxx会员卡使用须知',
      'url'   => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path'  => 'pages/statement/statement',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->post([
  'json' => [
    'appid'                  => 'wxea9c30890f48d5ae',
    'logo_url'               => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'brand'                  => [
      'brand_id'     => '1004',
      'display_name' => '微信支付',
    ],
    'title'                  => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description'            => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone'          => '010-8877xxxx',
    'code_type'              => 'BAR_CODE',
    'total_quantity'         => 5000000,
    'date_information'       => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'need_balance'  => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path'  => 'pages/balance/balance',
      'balance_url'   => 'https://xxx.com',
    ],
    'user_information_form'  => [
      'common_field_list' => ['USER_FORM_FLAG_MOBILE'],
      'custom_field_list' => [[
        'type'   => 'TEXT',
        'name'   => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement'   => [
      'title' => 'xxx会员卡使用须知',
      'url'   => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path'  => 'pages/statement/statement',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards')->post([
  'json' => [
    'appid'                  => 'wxea9c30890f48d5ae',
    'logo_url'               => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'brand'                  => [
      'brand_id'     => '1004',
      'display_name' => '微信支付',
    ],
    'title'                  => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description'            => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone'          => '010-8877xxxx',
    'code_type'              => 'BAR_CODE',
    'total_quantity'         => 5000000,
    'date_information'       => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'need_balance'  => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path'  => 'pages/balance/balance',
      'balance_url'   => 'https://xxx.com',
    ],
    'user_information_form'  => [
      'common_field_list' => ['USER_FORM_FLAG_MOBILE'],
      'custom_field_list' => [[
        'type'   => 'TEXT',
        'name'   => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement'   => [
      'title' => 'xxx会员卡使用须知',
      'url'   => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path'  => 'pages/statement/statement',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards']->post([
  'json' => [
    'appid'                  => 'wxea9c30890f48d5ae',
    'logo_url'               => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'brand'                  => [
      'brand_id'     => '1004',
      'display_name' => '微信支付',
    ],
    'title'                  => '微信支付测试卡',
    'background_picture_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/0',
    'description'            => '使用本会员卡表示你同意xxx公司的协议，最终解释权归xxx公司所有',
    'service_phone'          => '010-8877xxxx',
    'code_type'              => 'BAR_CODE',
    'total_quantity'         => 5000000,
    'date_information'       => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'code_mode'              => 'SYSTEM_ALLOCATE',
    'need_display_level'     => true,
    'init_level'             => '白银会员',
    'out_request_no'         => '100002322019090134234sfdf',
    'balance_information'    => [
      'need_balance'  => true,
      'balance_appid' => 'wxea9c30890f48d5ae',
      'balance_path'  => 'pages/balance/balance',
      'balance_url'   => 'https://xxx.com',
    ],
    'user_information_form'  => [
      'common_field_list' => ['USER_FORM_FLAG_MOBILE'],
      'custom_field_list' => [[
        'type'   => 'TEXT',
        'name'   => '喜欢的运动',
        'values' => ['string'],
      ],],
    ],
    'additional_statement'   => [
      'title' => 'xxx会员卡使用须知',
      'url'   => 'https://xxx.111.com',
      'appid' => 'wxea9c30890f48d5ae',
      'path'  => 'pages/statement/statement',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| create_time | string | 创建时间
| update_time | string | 更新时间
| remain_quantity | integer | 剩余库存
| status | string | 会员卡状态<br/>`NOT_APPROVE` \| `APPROVE_FAIL` \| `APPROVED` \| `DELETED` 枚举值之一
| brand {data-required} | object {data-tooltip="对应PHP的array"} | 品牌信息
| brand_id {data-required data-indent=1} | string | 品牌id
| display_name {data-required data-indent=1} | string | 品牌展示名称
| appid {data-required} | string | 商户AppId
| logo_url {data-required} | string | 会员卡logo
| title {data-required} | string | 卡名称
| background_picture_url {data-required} | string | 会员卡背景图
| description {data-required} | string | 使用须知
| service_phone | string | 服务电话
| code_type {data-required} | string | 会员码型<br/>`BAR_CODE` \| `QRCODE` \| `BAR_CODE_AND_QRCODE` \| `NONE_CODE` 枚举值之一
| total_quantity | integer | 会员卡总库存
| date_information {data-required} | object {data-tooltip="对应PHP的array"} | 有效期
| type {data-required data-indent=1} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=1} | string | 有效期开始时间
| available_end_time {data-indent=1} | string | 有效期结束时间
| available_day_after_receive {data-indent=1} | integer | 生效后N天内有效
| code_mode {data-required} | string | 会员卡code分配类型<br/>`SYSTEM_ALLOCATE` \| `MERCHANT_DEPOSIT` \| `REAL_TIME` 枚举值之一
| need_display_level | boolean | 是否展示会员等级
| init_level | string | 会员初始等级
| out_request_no {data-required} | string | 商户请求单号
| balance_information | object {data-tooltip="对应PHP的array"} | 储值信息
| need_balance {data-indent=1} | boolean | 是否支持储值
| balance_appid {data-indent=1} | string | 储值小程序appid
| balance_path {data-indent=1} | string | 储值小程序path
| balance_url {data-indent=1} | string | 储值url
| user_information_form | object {data-tooltip="对应PHP的array"} | 开卡信息
| common_field_list {data-indent=1} | string[] | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_MOBILE` \| `USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| custom_field_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| type {data-indent=2} | string | 商户自定义的开卡信息字段类型<br/>`TEXT` \| `SELECT` \| `RADIO` \| `CHECK_BOX` 枚举值之一
| name {data-indent=2} | string | 字段名称
| values {data-indent=2} | string[] | 字段值
| additional_statement | object {data-tooltip="对应PHP的array"} | 商户补充声明
| title {data-indent=1} | string | 标题
| url {data-indent=1} | string | 跳转url
| appid {data-indent=1} | string | 跳转小程序appid
| path {data-indent=1} | string | 跳转小程序path

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012545584) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012708314)

## 查询会员卡模板列表 {#get}

通过此接口可查询指定某品牌的所有会员卡模板列表

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-indent=1} | string | 品牌id
| appid {data-indent=1} | string | 商户AppId
| offset {data-required data-indent=1} | integer | 分页页码
| limit {data-required data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->getAsync([
  'query' => [
    'brand_id' => '1001622624',
    'appid'    => 'wxea9c30890f48d5ae',
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
$instance->chain('v3/marketing/membercard-open/cards')->getAsync([
  'query' => [
    'brand_id' => '1001622624',
    'appid'    => 'wxea9c30890f48d5ae',
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
$instance['v3/marketing/membercard-open/cards']->getAsync([
  'query' => [
    'brand_id' => '1001622624',
    'appid'    => 'wxea9c30890f48d5ae',
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
$response = $instance->v3->marketing->membercardOpen->cards->get([
  'query' => [
    'brand_id' => '1001622624',
    'appid'    => 'wxea9c30890f48d5ae',
    'offset'   => 0,
    'limit'    => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards')->get([
  'query' => [
    'brand_id' => '1001622624',
    'appid'    => 'wxea9c30890f48d5ae',
    'offset'   => 0,
    'limit'    => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards']->get([
  'query' => [
    'brand_id' => '1001622624',
    'appid'    => 'wxea9c30890f48d5ae',
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
| limit {data-required} | integer | 分页大小
| offset {data-required} | integer | 分页页码
| data | object[] {data-tooltip="对应PHP的array"} | 会员卡列表
| card_id {data-required data-indent=1} | string | 会员卡id
| create_time {data-indent=1} | string | 创建时间
| update_time {data-indent=1} | string | 更新时间
| remain_quantity {data-indent=1} | integer | 剩余库存
| status {data-indent=1} | string | 会员卡状态<br/>`NOT_APPROVE` \| `APPROVE_FAIL` \| `APPROVED` \| `DELETED` 枚举值之一
| brand {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 品牌信息
| brand_id {data-required data-indent=2} | string | 品牌id
| display_name {data-required data-indent=2} | string | 品牌展示名称
| appid {data-required data-indent=1} | string | 商户AppId
| logo_url {data-required data-indent=1} | string | 会员卡logo
| title {data-required data-indent=1} | string | 卡名称
| background_picture_url {data-required data-indent=1} | string | 会员卡背景图
| description {data-required data-indent=1} | string | 使用须知
| service_phone {data-indent=1} | string | 服务电话
| code_type {data-required data-indent=1} | string | 会员码型<br/>`BAR_CODE` \| `QRCODE` \| `BAR_CODE_AND_QRCODE` \| `NONE_CODE` 枚举值之一
| total_quantity {data-indent=1} | integer | 会员卡总库存
| date_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 有效期
| type {data-required data-indent=2} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=2} | string | 有效期开始时间
| available_end_time {data-indent=2} | string | 有效期结束时间
| available_day_after_receive {data-indent=2} | integer | 生效后N天内有效
| code_mode {data-required data-indent=1} | string | 会员卡code分配类型<br/>`SYSTEM_ALLOCATE` \| `MERCHANT_DEPOSIT` \| `REAL_TIME` 枚举值之一
| need_display_level {data-indent=1} | boolean | 是否展示会员等级
| init_level {data-indent=1} | string | 会员初始等级
| out_request_no {data-required data-indent=1} | string | 商户请求单号
| balance_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 储值信息
| need_balance {data-indent=2} | boolean | 是否支持储值
| balance_appid {data-indent=2} | string | 储值小程序appid
| balance_path {data-indent=2} | string | 储值小程序path
| balance_url {data-indent=2} | string | 储值url
| user_information_form {data-indent=1} | object {data-tooltip="对应PHP的array"} | 开卡信息
| common_field_list {data-indent=2} | string[] | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_MOBILE` \| `USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| custom_field_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| type {data-indent=3} | string | 商户自定义的开卡信息字段类型<br/>`TEXT` \| `SELECT` \| `RADIO` \| `CHECK_BOX` 枚举值之一
| name {data-indent=3} | string | 字段名称
| values {data-indent=3} | string[] | 字段值
| additional_statement {data-indent=1} | object {data-tooltip="对应PHP的array"} | 商户补充声明
| title {data-indent=2} | string | 标题
| url {data-indent=2} | string | 跳转url
| appid {data-indent=2} | string | 跳转小程序appid
| path {data-indent=2} | string | 跳转小程序path

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012547108) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012709010)
