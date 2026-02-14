---
title: 回传SN和商品编码
description: 智慧经营4.0回传SN和商品编码
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-indent=1} | string | 品牌ID
| transaction_id {data-indent=1} | string | 微信支付订单号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| device_id {data-indent=1} | string | 设备号
| goods_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| barcode {data-required data-indent=2} | string | 商品编码
| merchant_goods_id {data-indent=2} | string | 商家商品编码
| goods_name {data-required data-indent=2} | string | 商品名称
| quantity {data-required data-indent=2} | number | 商品数量
| price {data-required data-indent=2} | number | 商品单价

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->industryRebate->retailIndustry->transactions->postAsync([
  'json' => [
    'brand_id'       => '120344',
    'transaction_id' => '20190611222222222200000000012122',
    'out_trade_no'   => 'example_out_trade_no',
    'sub_mchid'      => '1900000001',
    'device_id'      => 'example_device_id',
    'goods_detail'   => [[
      'barcode'           => 'example_barcode',
      'merchant_goods_id' => '1001',
      'goods_name'        => 'iPhoneX 256G',
      'quantity'          => 1,
      'price'             => 528800,
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/industry-rebate/retail-industry/transactions')->postAsync([
  'json' => [
    'brand_id'       => '120344',
    'transaction_id' => '20190611222222222200000000012122',
    'out_trade_no'   => 'example_out_trade_no',
    'sub_mchid'      => '1900000001',
    'device_id'      => 'example_device_id',
    'goods_detail'   => [[
      'barcode'           => 'example_barcode',
      'merchant_goods_id' => '1001',
      'goods_name'        => 'iPhoneX 256G',
      'quantity'          => 1,
      'price'             => 528800,
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/industry-rebate/retail-industry/transactions']->postAsync([
  'json' => [
    'brand_id'       => '120344',
    'transaction_id' => '20190611222222222200000000012122',
    'out_trade_no'   => 'example_out_trade_no',
    'sub_mchid'      => '1900000001',
    'device_id'      => 'example_device_id',
    'goods_detail'   => [[
      'barcode'           => 'example_barcode',
      'merchant_goods_id' => '1001',
      'goods_name'        => 'iPhoneX 256G',
      'quantity'          => 1,
      'price'             => 528800,
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->industryRebate->retailIndustry->transactions->post([
  'json' => [
    'brand_id'       => '120344',
    'transaction_id' => '20190611222222222200000000012122',
    'out_trade_no'   => 'example_out_trade_no',
    'sub_mchid'      => '1900000001',
    'device_id'      => 'example_device_id',
    'goods_detail'   => [[
      'barcode'           => 'example_barcode',
      'merchant_goods_id' => '1001',
      'goods_name'        => 'iPhoneX 256G',
      'quantity'          => 1,
      'price'             => 528800,
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/industry-rebate/retail-industry/transactions')->post([
  'json' => [
    'brand_id'       => '120344',
    'transaction_id' => '20190611222222222200000000012122',
    'out_trade_no'   => 'example_out_trade_no',
    'sub_mchid'      => '1900000001',
    'device_id'      => 'example_device_id',
    'goods_detail'   => [[
      'barcode'           => 'example_barcode',
      'merchant_goods_id' => '1001',
      'goods_name'        => 'iPhoneX 256G',
      'quantity'          => 1,
      'price'             => 528800,
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/industry-rebate/retail-industry/transactions']->post([
  'json' => [
    'brand_id'       => '120344',
    'transaction_id' => '20190611222222222200000000012122',
    'out_trade_no'   => 'example_out_trade_no',
    'sub_mchid'      => '1900000001',
    'device_id'      => 'example_device_id',
    'goods_detail'   => [[
      'barcode'           => 'example_barcode',
      'merchant_goods_id' => '1001',
      'goods_name'        => 'iPhoneX 256G',
      'quantity'          => 1,
      'price'             => 528800,
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://docs.qq.com/doc/p/3094be447e6002d62ec924d489c938e39ccb8db0?nlc=1)
