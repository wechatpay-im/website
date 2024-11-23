---
title: 订单附加信息重推接口
description: 重点注意：请求接口前请先在以下页面提交您的海关信息，所有你需要报关的海关信息都需要提交，且信息真实有效。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| sign_type {data-indent=1} | string | 签名类型
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| transaction_id {data-required data-indent=1} | string | 微信支付订单号
| sub_order_no {data-indent=1} | string | 商户子订单号
| sub_order_id {data-indent=1} | string | 微信子订单号
| customs {data-required data-indent=1} | string | 海关
| mch_customs_no {data-required data-indent=1} | string | 商户海关备案号
| nonceless {data-required} | `true` | 声明请求的`XML`无随机字符串参数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->cgiBin->mch->newcustoms->customdeclareredeclare->postAsync([
  'xml' => [
    'sign_type' => 'MD5',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI',
    'mch_customs_no' => '123456',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/cgi-bin/mch/newcustoms/customdeclareredeclare')->postAsync([
  'xml' => [
    'sign_type' => 'MD5',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI',
    'mch_customs_no' => '123456',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/cgi-bin/mch/newcustoms/customdeclareredeclare']->postAsync([
  'xml' => [
    'sign_type' => 'MD5',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI',
    'mch_customs_no' => '123456',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->cgiBin->mch->newcustoms->customdeclareredeclare->post([
  'xml' => [
    'sign_type' => 'MD5',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI',
    'mch_customs_no' => '123456',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/cgi-bin/mch/newcustoms/customdeclareredeclare')->post([
  'xml' => [
    'sign_type' => 'MD5',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI',
    'mch_customs_no' => '123456',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/cgi-bin/mch/newcustoms/customdeclareredeclare']->post([
  'xml' => [
    'sign_type' => 'MD5',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'transaction_id' => '1000320306201511078440737890',
    'sub_order_no' => '20150806125346',
    'sub_order_id' => '1000320306201511078440737891',
    'customs' => 'SHANGHAI',
    'mch_customs_no' => '123456',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg | string | 返回信息
| sign_type {data-required}| string | 签名类型
| sign {data-required}| string | 签名
| appid {data-required}| string | 公众账号ID
| mch_id {data-required}| string | 商户号
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| state {data-required}| string | 状态码
| transaction_id {data-required}| string | 微信支付订单号
| out_trade_no {data-required}| string | 商户订单号
| sub_order_no | string | 商户子订单号
| sub_order_id | string | 微信子订单号
| modify_time {data-required}| string | 最后更新时间
| explanation | string | 申报结果说明

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/external/declarecustom.php?chapter=18_4)
