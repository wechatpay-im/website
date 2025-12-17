# 提交及状态查询商家名片配置申请 {#mix}

## 提交商家名片配置申请 {#post}

本接口面向服务商（不包括银行、支付机构、电商平台），用于提交商家名片配置申请，支持配置商家服务列表（用户可点击跳转至小程序或网页）和多渠道客服信息（包括自研客服、客服电话等），配置提交后返回名片预览二维码链接供商家验证跳转路径是否符合预期。

::: warning :pushpin: {.im-important}

注意：接口采用全量覆盖机制，每次提交均视为完整配置。最新提交将完全覆盖历史配置，不支持多轮次增量更新，请确保每次请求包含完整的配置信息。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| business_code {data-required data-indent=1} | string | 业务申请编号
| brand_id {data-required data-indent=1} | string | 品牌ID
| brand_mini_program_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 品牌小程序信息
| appid {data-required data-indent=2} | string | 公众账号ID
| default_jump_path {data-indent=2} | string | 小程序默认跳转路径
| brand_customer_service {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 品牌客服信息
| customer_service_type {data-required data-indent=2} | string | 客服类型<br/>`MINI_PROGRAM` \| `CUSTOMIZE_WEB` \| `CUSTOMIZE_MP` \| `SERVICE_PHONE` 枚举值之一
| customer_service_phone {data-indent=2} | string | 客服电话
| customer_service_path {data-indent=2} | string | 客服路径
| appid {data-indent=2} | string | 公众账号ID
| service_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 服务列表
| service_classify_name {data-indent=2} | string | 服务分类名称
| service_name {data-indent=2} | string | 服务名称
| service_jump_type {data-required data-indent=2} | string | 服务跳转类型<br/>`JUMP_MINI_PROGRAM` \| `JUMP_WEB_PAGE` 枚举值之一
| service_jump_path {data-required data-indent=2} | string | 服务跳转路径
| appid {data-indent=2} | string | 公众账号ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->card->cardConfigs->postAsync([
  'json' => [
    'business_code'           => '190001351110000',
    'brand_id'                => '1004',
    'brand_mini_program_info' => [
      'appid'             => 'wx1234567890abcdef',
      'default_jump_path' => 'pages/shop/index',
    ],
    'brand_customer_service'  => [
      'customer_service_type'  => 'MINI_PROGRAM',
      'customer_service_phone' => '12345678900',
      'customer_service_path'  => 'pages/service/index',
      'appid'                  => 'wx1234567890abcdef',
    ],
    'service_list'            => [[
      'service_classify_name' => '会员服务',
      'service_name'          => '会员中心',
      'service_jump_type'     => 'JUMP_MINI_PROGRAM',
      'service_jump_path'     => 'pages/shop/index',
      'appid'                 => 'wx1234567890abcdef',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/card/card-configs')->postAsync([
  'json' => [
    'business_code'           => '190001351110000',
    'brand_id'                => '1004',
    'brand_mini_program_info' => [
      'appid'             => 'wx1234567890abcdef',
      'default_jump_path' => 'pages/shop/index',
    ],
    'brand_customer_service'  => [
      'customer_service_type'  => 'MINI_PROGRAM',
      'customer_service_phone' => '12345678900',
      'customer_service_path'  => 'pages/service/index',
      'appid'                  => 'wx1234567890abcdef',
    ],
    'service_list'            => [[
      'service_classify_name' => '会员服务',
      'service_name'          => '会员中心',
      'service_jump_type'     => 'JUMP_MINI_PROGRAM',
      'service_jump_path'     => 'pages/shop/index',
      'appid'                 => 'wx1234567890abcdef',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/card/card-configs']->postAsync([
  'json' => [
    'business_code'           => '190001351110000',
    'brand_id'                => '1004',
    'brand_mini_program_info' => [
      'appid'             => 'wx1234567890abcdef',
      'default_jump_path' => 'pages/shop/index',
    ],
    'brand_customer_service'  => [
      'customer_service_type'  => 'MINI_PROGRAM',
      'customer_service_phone' => '12345678900',
      'customer_service_path'  => 'pages/service/index',
      'appid'                  => 'wx1234567890abcdef',
    ],
    'service_list'            => [[
      'service_classify_name' => '会员服务',
      'service_name'          => '会员中心',
      'service_jump_type'     => 'JUMP_MINI_PROGRAM',
      'service_jump_path'     => 'pages/shop/index',
      'appid'                 => 'wx1234567890abcdef',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->card->cardConfigs->post([
  'json' => [
    'business_code'           => '190001351110000',
    'brand_id'                => '1004',
    'brand_mini_program_info' => [
      'appid'             => 'wx1234567890abcdef',
      'default_jump_path' => 'pages/shop/index',
    ],
    'brand_customer_service'  => [
      'customer_service_type'  => 'MINI_PROGRAM',
      'customer_service_phone' => '12345678900',
      'customer_service_path'  => 'pages/service/index',
      'appid'                  => 'wx1234567890abcdef',
    ],
    'service_list'            => [[
      'service_classify_name' => '会员服务',
      'service_name'          => '会员中心',
      'service_jump_type'     => 'JUMP_MINI_PROGRAM',
      'service_jump_path'     => 'pages/shop/index',
      'appid'                 => 'wx1234567890abcdef',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/card/card-configs')->post([
  'json' => [
    'business_code'           => '190001351110000',
    'brand_id'                => '1004',
    'brand_mini_program_info' => [
      'appid'             => 'wx1234567890abcdef',
      'default_jump_path' => 'pages/shop/index',
    ],
    'brand_customer_service'  => [
      'customer_service_type'  => 'MINI_PROGRAM',
      'customer_service_phone' => '12345678900',
      'customer_service_path'  => 'pages/service/index',
      'appid'                  => 'wx1234567890abcdef',
    ],
    'service_list'            => [[
      'service_classify_name' => '会员服务',
      'service_name'          => '会员中心',
      'service_jump_type'     => 'JUMP_MINI_PROGRAM',
      'service_jump_path'     => 'pages/shop/index',
      'appid'                 => 'wx1234567890abcdef',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/card/card-configs']->post([
  'json' => [
    'business_code'           => '190001351110000',
    'brand_id'                => '1004',
    'brand_mini_program_info' => [
      'appid'             => 'wx1234567890abcdef',
      'default_jump_path' => 'pages/shop/index',
    ],
    'brand_customer_service'  => [
      'customer_service_type'  => 'MINI_PROGRAM',
      'customer_service_phone' => '12345678900',
      'customer_service_path'  => 'pages/service/index',
      'appid'                  => 'wx1234567890abcdef',
    ],
    'service_list'            => [[
      'service_classify_name' => '会员服务',
      'service_name'          => '会员中心',
      'service_jump_type'     => 'JUMP_MINI_PROGRAM',
      'service_jump_path'     => 'pages/shop/index',
      'appid'                 => 'wx1234567890abcdef',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code {data-required} | string | 业务申请编号
| brand_id {data-required} | string | 品牌ID
| applyment_id {data-required} | string | 微信支付申请单号
| card_preview_url {data-required} | string | 商家名片预览二维码链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016468440)

## 查询商家名片配置申请状态 {#get}

接口适用场景：服务商提交配置商家名片配置申请后，可调用此接口查询申请状态。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| business_code {data-indent=1} | string | 业务申请编号
| applyment_id {data-indent=1} | string | 微信支付申请单号
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->card->cardConfigs->getAsync([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/card/card-configs')->getAsync([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/card/card-configs']->getAsync([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->card->cardConfigs->get([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/card/card-configs')->get([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/card/card-configs']->get([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code {data-required} | string | 业务申请编号
| applyment_id {data-required} | string | 微信支付申请单号
| brand_id {data-required} | string | 品牌ID
| applyment_state {data-required} | string | 申请单状态<br/>`STATE_UNKNOWN` \| `DRAFTING` \| `AUDITING` \| `AUDIT_REJECTED` \| `PENDING_PUBLISH` \| `PUBLISHED` \| `CANCELED` 枚举值之一
| scheduled_publish_time | string | 定时发布时间
| reject_reason | string | 驳回原因
| actual_publish_time | string | 实际发布时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016475174)
