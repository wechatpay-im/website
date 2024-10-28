---
title: 查询结算资金
description: 通过此接口可以查询结算资金的明细。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 公众账号ID
| mchid {data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| usetag {data-indent=1} | integer | 结算状态
| offset {data-indent=1} | integer | 偏移量
| limit {data-indent=1} | integer | 最大记录条数
| date_start {data-indent=1} | string | 开始日期
| date_end {data-indent=1} | string | 结束日期

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->settlementquery->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1900000109',
    'sub_mch_id' => '1230000109',
    'usetag' => '1',
    'offset' => '0',
    'limit' => '10',
    'date_start' => '20150807',
    'date_end' => '20150807',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/settlementquery')->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1900000109',
    'sub_mch_id' => '1230000109',
    'usetag' => '1',
    'offset' => '0',
    'limit' => '10',
    'date_start' => '20150807',
    'date_end' => '20150807',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/settlementquery']->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1900000109',
    'sub_mch_id' => '1230000109',
    'usetag' => '1',
    'offset' => '0',
    'limit' => '10',
    'date_start' => '20150807',
    'date_end' => '20150807',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->settlementquery->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1900000109',
    'sub_mch_id' => '1230000109',
    'usetag' => '1',
    'offset' => '0',
    'limit' => '10',
    'date_start' => '20150807',
    'date_end' => '20150807',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/settlementquery')->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1900000109',
    'sub_mch_id' => '1230000109',
    'usetag' => '1',
    'offset' => '0',
    'limit' => '10',
    'date_start' => '20150807',
    'date_end' => '20150807',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/settlementquery']->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1900000109',
    'sub_mch_id' => '1230000109',
    'usetag' => '1',
    'offset' => '0',
    'limit' => '10',
    'date_start' => '20150807',
    'date_end' => '20150807',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| appid | string | 公众账号ID
| mch_id | string | 商户号
| nonce_str | string | 随机字符串
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| record_num | string | 返回数据行数
| fbatchno | string | 付汇批次号
| date_settlement | string | 结算日期
| date_start | string | 交易开始日期
| date_end | string | 交易结束日期
| settlement_fee | integer | 划账金额
| unsettlement_fee | integer | 未划账金额
| settlementfee_type | string | 结算币种
| pay_fee | integer | 支付金额
| refund_fee | integer | 退款金额
| pay_net_fee | integer | 支付净额
| poundage_fee | integer | 手续费金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/pay/In-AppPay/chapter8_9.shtml)
