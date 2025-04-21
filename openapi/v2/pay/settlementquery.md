---
title: 查询结算资金
description: 通过此接口可以查询结算资金的明细。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mchid {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| usetag {data-required data-indent=1} | integer | 结算状态<br/>`1` \| `2` 枚举值之一
| offset {data-required data-indent=1} | integer | 偏移量
| limit {data-required data-indent=1} | integer | 最大记录条数
| date_start {data-required data-indent=1} | string | 开始日期
| date_end {data-required data-indent=1} | string | 结束日期
| query_split {data-indent=1} | boolean | 是否查询分账结算信息

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->settlementquery->postAsync([
  'xml' => [
    'appid'       => 'wxd678efh567hg6787',
    'mchid'       => '1900000109',
    'sub_mch_id'  => '1230000109',
    'usetag'      => '1',
    'offset'      => '0',
    'limit'       => '10',
    'date_start'  => '20150807',
    'date_end'    => '20150807',
    'query_split' => 'true',
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
    'appid'       => 'wxd678efh567hg6787',
    'mchid'       => '1900000109',
    'sub_mch_id'  => '1230000109',
    'usetag'      => '1',
    'offset'      => '0',
    'limit'       => '10',
    'date_start'  => '20150807',
    'date_end'    => '20150807',
    'query_split' => 'true',
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
    'appid'       => 'wxd678efh567hg6787',
    'mchid'       => '1900000109',
    'sub_mch_id'  => '1230000109',
    'usetag'      => '1',
    'offset'      => '0',
    'limit'       => '10',
    'date_start'  => '20150807',
    'date_end'    => '20150807',
    'query_split' => 'true',
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
    'appid'       => 'wxd678efh567hg6787',
    'mchid'       => '1900000109',
    'sub_mch_id'  => '1230000109',
    'usetag'      => '1',
    'offset'      => '0',
    'limit'       => '10',
    'date_start'  => '20150807',
    'date_end'    => '20150807',
    'query_split' => 'true',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/settlementquery')->post([
  'xml' => [
    'appid'       => 'wxd678efh567hg6787',
    'mchid'       => '1900000109',
    'sub_mch_id'  => '1230000109',
    'usetag'      => '1',
    'offset'      => '0',
    'limit'       => '10',
    'date_start'  => '20150807',
    'date_end'    => '20150807',
    'query_split' => 'true',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/settlementquery']->post([
  'xml' => [
    'appid'       => 'wxd678efh567hg6787',
    'mchid'       => '1900000109',
    'sub_mch_id'  => '1230000109',
    'usetag'      => '1',
    'offset'      => '0',
    'limit'       => '10',
    'date_start'  => '20150807',
    'date_end'    => '20150807',
    'query_split' => 'true',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-required} | string | 返回信息
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| sign | string | 签名
| record_num {data-required} | string | 返回数据行数
| fbatchno {data-required} | string | 付汇批次号
| date_settlement {data-required} | string | 结算日期
| date_start {data-required} | string | 交易开始日期
| date_end {data-required} | string | 交易结束日期
| settlement_fee {data-required} | integer | 划账金额
| unsettlement_fee {data-required} | integer | 未划账金额
| settlementfee_type {data-required} | string | 结算币种
| pay_fee {data-required} | integer | 支付金额
| refund_fee {data-required} | integer | 退款金额
| pay_net_fee {data-required} | integer | 支付净额
| poundage_fee {data-required} | integer | 手续费金额
| split_settlement_fee | integer | 分账划账金额
| split_unsettlement_fee | integer | 分账未划账金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013634920) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013634968) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013635001) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013635256) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013636497) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013636618)
