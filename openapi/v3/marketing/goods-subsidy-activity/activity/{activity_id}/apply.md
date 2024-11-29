---
title: 门店报名品牌加价购活动
description: 指定服务商可通过该接口报名加价购活动、查询某个区域内的加价购活动列表、锁定加价活动购资格以及解锁加价购活动资格。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| caller_merchant_id {data-required data-indent=1} | string | 调用报名活动API的商户的商户号
| apply_infos {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 门店报名信息
| store_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 门店信息
| store_id {data-indent=3} | string | 门店ID
| accounting_merchant_id {data-indent=3} | string | 门店补贴入账商户号
| merchant_id {data-indent=3} | string | 门店商户号
| goods_original_price {data-indent=2} | number | 商品原价

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->activity->_activity_id_->apply->postAsync([
  'activity_id' => '',
  'json' => [
    'caller_merchant_id' => '',
    'apply_infos'        => [[
      'store_info'           => [
        'store_id'               => '',
        'accounting_merchant_id' => '',
        'merchant_id'            => '',
      ],
      'goods_original_price' => 0,
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/activity/{activity_id}/apply')->postAsync([
  'activity_id' => '',
  'json' => [
    'caller_merchant_id' => '',
    'apply_infos'        => [[
      'store_info'           => [
        'store_id'               => '',
        'accounting_merchant_id' => '',
        'merchant_id'            => '',
      ],
      'goods_original_price' => 0,
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/activity/{activity_id}/apply']->postAsync([
  'activity_id' => '',
  'json' => [
    'caller_merchant_id' => '',
    'apply_infos'        => [[
      'store_info'           => [
        'store_id'               => '',
        'accounting_merchant_id' => '',
        'merchant_id'            => '',
      ],
      'goods_original_price' => 0,
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->activity->_activity_id_->apply->post([
  'activity_id' => '',
  'json' => [
    'caller_merchant_id' => '',
    'apply_infos'        => [[
      'store_info'           => [
        'store_id'               => '',
        'accounting_merchant_id' => '',
        'merchant_id'            => '',
      ],
      'goods_original_price' => 0,
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/activity/{activity_id}/apply')->post([
  'activity_id' => '',
  'json' => [
    'caller_merchant_id' => '',
    'apply_infos'        => [[
      'store_info'           => [
        'store_id'               => '',
        'accounting_merchant_id' => '',
        'merchant_id'            => '',
      ],
      'goods_original_price' => 0,
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/activity/{activity_id}/apply']->post([
  'activity_id' => '',
  'json' => [
    'caller_merchant_id' => '',
    'apply_infos'        => [[
      'store_info'           => [
        'store_id'               => '',
        'accounting_merchant_id' => '',
        'merchant_id'            => '',
      ],
      'goods_original_price' => 0,
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_message | string | 返回结果文案
| failed_apply_infos | object[] {data-tooltip="对应PHP的array"} | 失败的报名记录
| store_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店信息
| store_id {data-indent=2} | string | 门店ID
| accounting_merchant_id {data-indent=2} | string | 门店补贴入账商户号
| merchant_id {data-indent=2} | string | 门店商户号
| goods_original_price {data-indent=1} | number | 商品原价
| succeed_apply_infos | object[] {data-tooltip="对应PHP的array"} | 成功的报名记录
| store_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店信息
| store_id {data-indent=2} | string | 门店ID
| accounting_merchant_id {data-indent=2} | string | 门店补贴入账商户号
| merchant_id {data-indent=2} | string | 门店商户号
| goods_original_price {data-indent=1} | number | 商品原价

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html)
