---
title: 上传商家电子小票跳转信息
description: 接口介绍：可通过该接口给对应的微信支付订单上传商家电子小票跳转信息。上传成功后，用户可以在账单详情页看到对应的跳转入口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| transaction_id {data-indent=1} | string | 微信支付订单号
| transaction_mchid {data-indent=1} | string | 商户号
| transaction_sub_mchid {data-indent=1} | string | 子商户号
| openid {data-indent=1} | string | 下单用户OpenID
| merchant_upload_time {data-indent=1} | string | 商户上传时间
| jump_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 跳转信息
| merchant_appid {data-indent=2} | string | 商户电子小票跳转信息小程序AppID
| merchant_path {data-indent=2} | string | 商户电子小票跳转信息小程序路径

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->shoppingReceipt->merchantshoppingreceiptjumpinfos->postAsync([
  'json' => [
    'transaction_id'        => '4200000008202209139188072801',
    'transaction_mchid'     => '1230000109',
    'transaction_sub_mchid' => '1230000109',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_upload_time'  => '2021-05-20T13:29:35.120+08:00',
    'jump_info'             => [
      'merchant_appid' => 'example_merchant_appid',
      'merchant_path'  => 'example_merchant_path',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/shopping-receipt/merchantshoppingreceiptjumpinfos')->postAsync([
  'json' => [
    'transaction_id'        => '4200000008202209139188072801',
    'transaction_mchid'     => '1230000109',
    'transaction_sub_mchid' => '1230000109',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_upload_time'  => '2021-05-20T13:29:35.120+08:00',
    'jump_info'             => [
      'merchant_appid' => 'example_merchant_appid',
      'merchant_path'  => 'example_merchant_path',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/shopping-receipt/merchantshoppingreceiptjumpinfos']->postAsync([
  'json' => [
    'transaction_id'        => '4200000008202209139188072801',
    'transaction_mchid'     => '1230000109',
    'transaction_sub_mchid' => '1230000109',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_upload_time'  => '2021-05-20T13:29:35.120+08:00',
    'jump_info'             => [
      'merchant_appid' => 'example_merchant_appid',
      'merchant_path'  => 'example_merchant_path',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->shoppingReceipt->merchantshoppingreceiptjumpinfos->post([
  'json' => [
    'transaction_id'        => '4200000008202209139188072801',
    'transaction_mchid'     => '1230000109',
    'transaction_sub_mchid' => '1230000109',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_upload_time'  => '2021-05-20T13:29:35.120+08:00',
    'jump_info'             => [
      'merchant_appid' => 'example_merchant_appid',
      'merchant_path'  => 'example_merchant_path',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/shopping-receipt/merchantshoppingreceiptjumpinfos')->post([
  'json' => [
    'transaction_id'        => '4200000008202209139188072801',
    'transaction_mchid'     => '1230000109',
    'transaction_sub_mchid' => '1230000109',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_upload_time'  => '2021-05-20T13:29:35.120+08:00',
    'jump_info'             => [
      'merchant_appid' => 'example_merchant_appid',
      'merchant_path'  => 'example_merchant_path',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/shopping-receipt/merchantshoppingreceiptjumpinfos']->post([
  'json' => [
    'transaction_id'        => '4200000008202209139188072801',
    'transaction_mchid'     => '1230000109',
    'transaction_sub_mchid' => '1230000109',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_upload_time'  => '2021-05-20T13:29:35.120+08:00',
    'jump_info'             => [
      'merchant_appid' => 'example_merchant_appid',
      'merchant_path'  => 'example_merchant_path',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| merchant_jump_info | object {data-tooltip="对应PHP的array"} | 商家电子小票跳转信息
| transaction_id {data-indent=1} | string | 微信支付订单号
| transaction_mchid {data-indent=1} | string | 商户号
| transaction_sub_mchid {data-indent=1} | string | 子商户号
| openid {data-indent=1} | string | 下单用户OpenID
| merchant_upload_time {data-indent=1} | string | 商户上传时间
| jump_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 跳转信息
| merchant_appid {data-indent=2} | string | 商户电子小票跳转信息小程序AppID
| merchant_path {data-indent=2} | string | 商户电子小票跳转信息小程序路径
| create_time {data-indent=1} | string | 创建时间
| modify_time {data-indent=1} | string | 修改时间
| brand_id {data-indent=1} | integer | 归属品牌ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/shopping-receipt/merchant-shopping-receipt-jump-infos/create-merchant-shopping-receipt-jump-info.html)
