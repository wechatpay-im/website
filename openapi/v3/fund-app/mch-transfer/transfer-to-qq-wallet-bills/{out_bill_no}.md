---
title: 查询转账到QQ钱包的结果
description: 从转账单据创建成功后开始计算，如果24h内用户未完成入账，系统会自动关单并退款至商户资金。系统关单时间可能超过24小时，商户需通过查询转账到QQ钱包的结果接口核实转账单是否已成功关闭，若该笔转账单还未关闭，请勿换单发起转账，商户也可通过撤销转账到QQ钱包接口主动撤销该订单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_bill_no {data-required} | string | 商户单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->transferToQqWalletBills->_out_bill_no_->getAsync([
  'out_bill_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills/{out_bill_no}')->getAsync([
  'out_bill_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills/{out_bill_no}']->getAsync([
  'out_bill_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->transferToQqWalletBills->_out_bill_no_->get([
  'out_bill_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills/{out_bill_no}')->get([
  'out_bill_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills/{out_bill_no}']->get([
  'out_bill_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required} | string | 商户号
| out_bill_no {data-required} | string | 商户单号
| transfer_bill_no {data-required} | string | 微信转账单号
| appid | string | QQ互联开放平台AppID
| state {data-required} | string | 单据状态<br/>`ACCEPTED` \| `PROCESSING` \| `WAIT_USER_CONFIRM` \| `TRANSFERING` \| `SUCCESS` \| `FAIL` \| `CANCELING` \| `CANCELLED` 枚举值之一
| transfer_amount {data-required} | number | 转账金额
| transfer_remark {data-required} | string | 转账备注
| openid | string | 收款用户OpenID
| user_qq | string | 收款用户QQ号
| user_name | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 收款用户姓名
| fail_reason | string | 失败原因
| create_time {data-required} | string | 单据创建时间
| update_time | string | 最后一次状态变更时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4014297440)
