# 添加及列表查询交易连接名片规则 {#mix}

## 添加交易连接名片规则申请 {#post}

本接口面向服务商（不包括银行、支付机构、电商平台），用于配置交易连接名片规则，配置完成后，用户在相应交易场景支付成功后，点击微信支付公众号向用户下发的支付凭证，将跳转商家名片。交易连接名片规则是判断“哪个支付凭证可跳转商家名片”的依据。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| business_code {data-required data-indent=1} | string | 业务申请编号
| brand_id {data-required data-indent=1} | string | 品牌ID
| payment_scene {data-required data-indent=1} | string | 交易场景类型<br/>`MINI_PROGRAM` \| `APP` \| `PAYMENT_SCORE` \| `PAYMENT_CODE` 枚举值之一
| appid {data-indent=1} | string | 公众账号ID
| card_link_mchid {data-indent=1} | string | 商户号
| service_id {data-indent=1} | string | 服务ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->card->cardLinks->postAsync([
  'json' => [
    'business_code'   => '190001351110000',
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/card/card-links')->postAsync([
  'json' => [
    'business_code'   => '190001351110000',
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/card/card-links']->postAsync([
  'json' => [
    'business_code'   => '190001351110000',
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->card->cardLinks->post([
  'json' => [
    'business_code'   => '190001351110000',
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/card/card-links')->post([
  'json' => [
    'business_code'   => '190001351110000',
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/card/card-links']->post([
  'json' => [
    'business_code'   => '190001351110000',
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code {data-required} | string | 业务申请编号
| brand_id {data-required} | string | 品牌ID
| payment_scene {data-required} | string | 交易场景类型<br/>`MINI_PROGRAM` \| `APP` \| `PAYMENT_SCORE` \| `PAYMENT_CODE` 枚举值之一
| appid | string | 公众账号ID
| card_link_mchid | string | 商户号
| service_id | string | 服务ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016333302)

## 查询已生效交易连接名片规则 {#get}

服务商可调用该接口查询品牌下已生效的交易连接名片规则列表。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌ID
| payment_scene {data-indent=1} | string | 交易场景类型<br/>`MINI_PROGRAM` \| `APP` \| `PAYMENT_SCORE` \| `PAYMENT_CODE` 枚举值之一
| page_index {data-indent=1} | integer | 查询页码
| page_size {data-indent=1} | integer | 查询页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->card->cardLinks->getAsync([
  'query' => [
    'brand_id'      => '120344',
    'payment_scene' => 'MINI_PROGRAM',
    'page_index'    => 1,
    'page_size'     => 50,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/card/card-links')->getAsync([
  'query' => [
    'brand_id'      => '120344',
    'payment_scene' => 'MINI_PROGRAM',
    'page_index'    => 1,
    'page_size'     => 50,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/card/card-links']->getAsync([
  'query' => [
    'brand_id'      => '120344',
    'payment_scene' => 'MINI_PROGRAM',
    'page_index'    => 1,
    'page_size'     => 50,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->card->cardLinks->get([
  'query' => [
    'brand_id'      => '120344',
    'payment_scene' => 'MINI_PROGRAM',
    'page_index'    => 1,
    'page_size'     => 50,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/card/card-links')->get([
  'query' => [
    'brand_id'      => '120344',
    'payment_scene' => 'MINI_PROGRAM',
    'page_index'    => 1,
    'page_size'     => 50,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/card/card-links']->get([
  'query' => [
    'brand_id'      => '120344',
    'payment_scene' => 'MINI_PROGRAM',
    'page_index'    => 1,
    'page_size'     => 50,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id | string | 品牌ID
| page_index | integer | 查询页码
| page_size | integer | 查询页大小
| total_num | integer | 总数
| active_link_list | object[] {data-tooltip="对应PHP的array"} | 已生效连接列表
| payment_scene {data-required data-indent=1} | string | 交易场景类型<br/>`MINI_PROGRAM` \| `APP` \| `PAYMENT_SCORE` \| `PAYMENT_CODE` 枚举值之一
| appid_list {data-indent=1} | string[] | 公众账号ID
| card_link_mchid {data-indent=1} | string | 商户号
| service_id {data-indent=1} | string | 服务ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016366785)
