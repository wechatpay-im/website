---
title: 支付码牌/点餐码牌交易回传
description: 支付码牌/点餐码牌交易回传
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id {data-required} | string | 商户提现单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 子商户
| code_url {data-required data-indent=1} | string | 收款链接url
| out_trade_no {data-required data-indent=1} | string | 商户订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->industryRebate->transactions->_transaction_id_->postAsync([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/industry-rebate/transactions/{transaction_id}')->postAsync([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/industry-rebate/transactions/{transaction_id}']->postAsync([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->industryRebate->transactions->_transaction_id_->post([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/industry-rebate/transactions/{transaction_id}')->post([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/industry-rebate/transactions/{transaction_id}']->post([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://docs.qq.com/doc/p/e052aee72f45b03e2fdb20edce5a1b2020ead904?nlc=1)
