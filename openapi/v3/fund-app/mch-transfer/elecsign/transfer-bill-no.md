---
title: 微信单号申请电子回单
description: 商户可以 指定微信转账单号通过该接口申请 **商家转账用户确认模式转账单据** 对应的电子回单。微信支付会在校验满足回单申请条件后受理回单的申请，商户后续可以通过电子回单查询接口查询回单处理进度。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| transfer_bill_no {data-required data-indent=1} | string | 微信转账单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->elecsign->transferBillNo->postAsync([
  'json' => [
    'transfer_bill_no' => '1330000071100999991182020050700019480001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/elecsign/transfer-bill-no')->postAsync([
  'json' => [
    'transfer_bill_no' => '1330000071100999991182020050700019480001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/elecsign/transfer-bill-no']->postAsync([
  'json' => [
    'transfer_bill_no' => '1330000071100999991182020050700019480001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->elecsign->transferBillNo->post([
  'json' => [
    'transfer_bill_no' => '1330000071100999991182020050700019480001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/elecsign/transfer-bill-no')->post([
  'json' => [
    'transfer_bill_no' => '1330000071100999991182020050700019480001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/elecsign/transfer-bill-no']->post([
  'json' => [
    'transfer_bill_no' => '1330000071100999991182020050700019480001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| state {data-required} | string | 申请单状态
| create_time {data-required} | string | 申请单创建时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012716456)
