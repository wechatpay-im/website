---
title: 微信转账单号查询转账单
description: 商家转账用户确认模式下，根据微信转账单号查询转账单的详细信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transfer_bill_no | string | 微信转账单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->transferBills->transferBillNo->_transfer_bill_no_->getAsync([
  'transfer_bill_no' => '1330000071100999991182020050700019480001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no}')->getAsync([
  'transfer_bill_no' => '1330000071100999991182020050700019480001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no}']->getAsync([
  'transfer_bill_no' => '1330000071100999991182020050700019480001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->transferBills->transferBillNo->_transfer_bill_no_->get([
  'transfer_bill_no' => '1330000071100999991182020050700019480001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no}')->get([
  'transfer_bill_no' => '1330000071100999991182020050700019480001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no}']->get([
  'transfer_bill_no' => '1330000071100999991182020050700019480001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mch_id | string | 商户号
| out_bill_no | string | 商户单号
| transfer_bill_no | string | 商家转账订单号
| appid | string | 商户AppID
| state | string | 单据状态
| transfer_amount | number | 转账金额
| transfer_remark | string | 转账备注
| fail_reason | string | 失败原因
| openid | string | 收款用户OpenID
| user_name | string | 收款用户姓名
| create_time | string | 单据创建时间
| update_time | string | 最后一次状态变更时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/transfer-bill/get-transfer-bill-by-no.html)
