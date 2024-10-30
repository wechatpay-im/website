---
title: 申请资金出境
description: 商户发起资金出境请求，需要传微信支付单号，商户出境单号，出境金额等信息成功，接口请求成功仅代表受理，如需知晓业务执行情况请通过查询接口获取。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| out_order_id {data-indent=1} | string | 商户出境单号
| sub_mchid {data-indent=1} | string | 二级商户号
| transaction_id {data-indent=1} | string | 微信订单号
| amount {data-indent=1} | integer | 出境金额
| foreign_currency {data-indent=1} | string | 境外收款币种
| goods_info {data-indent=1} | object[] | 商品信息
| goods_name {data-indent=2} | string | 商品名称
| goods_category {data-indent=2} | string | 商品类目
| goods_unit_price {data-indent=2} | integer | 商品单价
| goods_quantity {data-indent=2} | integer | 商品数量
| seller_info {data-indent=1} | object | 卖家信息
| oversea_business_name {data-indent=2} | string | 境外卖家经营主体名称
| oversea_shop_name {data-indent=2} | string | 境外卖家店铺名称
| seller_id {data-indent=2} | string | 卖家ID
| express_info {data-indent=1} | object | 物流信息
| courier_number {data-indent=2} | string | 物流单号
| express_company_name {data-indent=2} | string | 物流商名称
| payee_info {data-indent=1} | object | 收款人信息
| payee_id {data-indent=2} | string | 收款人识别号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundsToOversea->orders->postAsync([
  'json' => [
    'out_order_id' => 'merchant_1123123',
    'sub_mchid' => '123456',
    'transaction_id' => '420000000000000010',
    'amount' => 10,
    'foreign_currency' => 'USD',
    'goods_info' => [[
      'goods_name' => '橘子',
      'goods_category' => '家用电器',
      'goods_unit_price' => 1,
      'goods_quantity' => 1,
    ],],
    'seller_info' => [
      'oversea_business_name' => '香港xxxx公司',
      'oversea_shop_name' => '香港xxx公司xxx店铺',
      'seller_id' => 'id2123123123',
    ],
    'express_info' => [
      'courier_number' => 'curier_number_1231',
      'express_company_name' => '国际xxx物流',
    ],
    'payee_info' => [
      'payee_id' => 'ID123112312',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/funds-to-oversea/orders')->postAsync([
  'json' => [
    'out_order_id' => 'merchant_1123123',
    'sub_mchid' => '123456',
    'transaction_id' => '420000000000000010',
    'amount' => 10,
    'foreign_currency' => 'USD',
    'goods_info' => [[
      'goods_name' => '橘子',
      'goods_category' => '家用电器',
      'goods_unit_price' => 1,
      'goods_quantity' => 1,
    ],],
    'seller_info' => [
      'oversea_business_name' => '香港xxxx公司',
      'oversea_shop_name' => '香港xxx公司xxx店铺',
      'seller_id' => 'id2123123123',
    ],
    'express_info' => [
      'courier_number' => 'curier_number_1231',
      'express_company_name' => '国际xxx物流',
    ],
    'payee_info' => [
      'payee_id' => 'ID123112312',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/funds-to-oversea/orders']->postAsync([
  'json' => [
    'out_order_id' => 'merchant_1123123',
    'sub_mchid' => '123456',
    'transaction_id' => '420000000000000010',
    'amount' => 10,
    'foreign_currency' => 'USD',
    'goods_info' => [[
      'goods_name' => '橘子',
      'goods_category' => '家用电器',
      'goods_unit_price' => 1,
      'goods_quantity' => 1,
    ],],
    'seller_info' => [
      'oversea_business_name' => '香港xxxx公司',
      'oversea_shop_name' => '香港xxx公司xxx店铺',
      'seller_id' => 'id2123123123',
    ],
    'express_info' => [
      'courier_number' => 'curier_number_1231',
      'express_company_name' => '国际xxx物流',
    ],
    'payee_info' => [
      'payee_id' => 'ID123112312',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundsToOversea->orders->post([
  'json' => [
    'out_order_id' => 'merchant_1123123',
    'sub_mchid' => '123456',
    'transaction_id' => '420000000000000010',
    'amount' => 10,
    'foreign_currency' => 'USD',
    'goods_info' => [[
      'goods_name' => '橘子',
      'goods_category' => '家用电器',
      'goods_unit_price' => 1,
      'goods_quantity' => 1,
    ],],
    'seller_info' => [
      'oversea_business_name' => '香港xxxx公司',
      'oversea_shop_name' => '香港xxx公司xxx店铺',
      'seller_id' => 'id2123123123',
    ],
    'express_info' => [
      'courier_number' => 'curier_number_1231',
      'express_company_name' => '国际xxx物流',
    ],
    'payee_info' => [
      'payee_id' => 'ID123112312',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/funds-to-oversea/orders')->post([
  'json' => [
    'out_order_id' => 'merchant_1123123',
    'sub_mchid' => '123456',
    'transaction_id' => '420000000000000010',
    'amount' => 10,
    'foreign_currency' => 'USD',
    'goods_info' => [[
      'goods_name' => '橘子',
      'goods_category' => '家用电器',
      'goods_unit_price' => 1,
      'goods_quantity' => 1,
    ],],
    'seller_info' => [
      'oversea_business_name' => '香港xxxx公司',
      'oversea_shop_name' => '香港xxx公司xxx店铺',
      'seller_id' => 'id2123123123',
    ],
    'express_info' => [
      'courier_number' => 'curier_number_1231',
      'express_company_name' => '国际xxx物流',
    ],
    'payee_info' => [
      'payee_id' => 'ID123112312',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/funds-to-oversea/orders']->post([
  'json' => [
    'out_order_id' => 'merchant_1123123',
    'sub_mchid' => '123456',
    'transaction_id' => '420000000000000010',
    'amount' => 10,
    'foreign_currency' => 'USD',
    'goods_info' => [[
      'goods_name' => '橘子',
      'goods_category' => '家用电器',
      'goods_unit_price' => 1,
      'goods_quantity' => 1,
    ],],
    'seller_info' => [
      'oversea_business_name' => '香港xxxx公司',
      'oversea_shop_name' => '香港xxx公司xxx店铺',
      'seller_id' => 'id2123123123',
    ],
    'express_info' => [
      'courier_number' => 'curier_number_1231',
      'express_company_name' => '国际xxx物流',
    ],
    'payee_info' => [
      'payee_id' => 'ID123112312',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_id | string | 商户出境单号
| sub_mchid | string | 二级商户号
| order_id | string | 微信出境单号
| result | string | 出境结果
| fail_reason | string | 出境失败的原因
| amount | integer | 请求出境人民币金额
| foreign_amount | integer | 真实出境外币金额
| foreign_currency | string | 外币币种
| rate | integer | 汇率
| exchange_rate_time | string | 购汇时间
| estimate_exchange_rate_time | string | 预计购汇时间
| departure_amount | integer | 真实出境人民币金额
| fee | integer | 手续费人民币金额
| charge_mchid | string | 手续费承担商户号
| charge_account_type | string | 手续费承担账户

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_2.shtml)
