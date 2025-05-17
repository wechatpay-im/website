---
title: 给指定用户报名多笔立减活动
description: 商户平台创建活动后，可以调用此接口给指定用户报名多笔立减活动。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户标识ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| stock_id {data-required data-indent=1} | string | 批次号
| activity_id {data-required data-indent=1} | string | 活动ID
| out_request_no {data-required data-indent=1} | string | 发券凭证
| appid {data-required data-indent=1} | string | 公众账号ID
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->bankFavor->users->_openid_->bankMultiActivity->postAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'stock_id'            => '100088',
    'activity_id'         => '186745560',
    'out_request_no'      => '1002600620019090123143254435',
    'appid'               => 'wx1234567889999',
    'stock_creator_mchid' => '9800064',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/bank-favor/users/{openid}/bank-multi-activity')->postAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'stock_id'            => '100088',
    'activity_id'         => '186745560',
    'out_request_no'      => '1002600620019090123143254435',
    'appid'               => 'wx1234567889999',
    'stock_creator_mchid' => '9800064',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/bank-favor/users/{openid}/bank-multi-activity']->postAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'stock_id'            => '100088',
    'activity_id'         => '186745560',
    'out_request_no'      => '1002600620019090123143254435',
    'appid'               => 'wx1234567889999',
    'stock_creator_mchid' => '9800064',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->bankFavor->users->_openid_->bankMultiActivity->post([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'stock_id'            => '100088',
    'activity_id'         => '186745560',
    'out_request_no'      => '1002600620019090123143254435',
    'appid'               => 'wx1234567889999',
    'stock_creator_mchid' => '9800064',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/bank-favor/users/{openid}/bank-multi-activity')->post([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'stock_id'            => '100088',
    'activity_id'         => '186745560',
    'out_request_no'      => '1002600620019090123143254435',
    'appid'               => 'wx1234567889999',
    'stock_creator_mchid' => '9800064',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/bank-favor/users/{openid}/bank-multi-activity']->post([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'stock_id'            => '100088',
    'activity_id'         => '186745560',
    'out_request_no'      => '1002600620019090123143254435',
    'appid'               => 'wx1234567889999',
    'stock_creator_mchid' => '9800064',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| coupon_id {data-required} | string | 代金券id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4014569793)
