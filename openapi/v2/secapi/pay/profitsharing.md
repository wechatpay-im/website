---
title: 请求单次分账
description: 单次分账请求按照传入的分账接收方账号和资金进行分账，同时会将订单剩余的待分账金额解冻给特约商户。故操作成功后，订单不能再进行分账，也不能进行分账完结。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| brand_mch_id {data-indent=1} | string | 品牌主商户号
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sign_type {data-indent=1} | string | 签名类型
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_order_no {data-required data-indent=1} | string | 商户分账单号
| receivers {data-required data-indent=1} | string | +分账接收方列表
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->pay->profitsharing->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'brand_mch_id' => '1900000108',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => '[{"type": "MERCHANT_ID","account": "190001001","amount": 100,"description": "分到商户""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}, {"type": "PERSONAL_OPENID","account": "86693952","amount": 888,"description": "分到个人""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}]',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/pay/profitsharing')->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'brand_mch_id' => '1900000108',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => '[{"type": "MERCHANT_ID","account": "190001001","amount": 100,"description": "分到商户""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}, {"type": "PERSONAL_OPENID","account": "86693952","amount": 888,"description": "分到个人""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}]',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/pay/profitsharing']->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'brand_mch_id' => '1900000108',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => '[{"type": "MERCHANT_ID","account": "190001001","amount": 100,"description": "分到商户""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}, {"type": "PERSONAL_OPENID","account": "86693952","amount": 888,"description": "分到个人""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}]',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->pay->profitsharing->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'brand_mch_id' => '1900000108',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => '[{"type": "MERCHANT_ID","account": "190001001","amount": 100,"description": "分到商户""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}, {"type": "PERSONAL_OPENID","account": "86693952","amount": 888,"description": "分到个人""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}]',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/pay/profitsharing')->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'brand_mch_id' => '1900000108',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => '[{"type": "MERCHANT_ID","account": "190001001","amount": 100,"description": "分到商户""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}, {"type": "PERSONAL_OPENID","account": "86693952","amount": 888,"description": "分到个人""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}]',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/pay/profitsharing']->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'brand_mch_id' => '1900000108',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => '[{"type": "MERCHANT_ID","account": "190001001","amount": 100,"description": "分到商户""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}, {"type": "PERSONAL_OPENID","account": "86693952","amount": 888,"description": "分到个人""detail_id": "36011111111111111111111""finish_time": "20180608170132""receiver_mchid": "1900000110""result": "SUCCESS"}]',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| return_code {data-required}| string | 返回状态码
| return_msg | string | 返回信息
| appid {data-required}| string | 公众账号ID
| mch_id {data-required}| string | 商户号
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| brand_mch_id | string | 品牌主商户号
| transaction_id {data-required}| string | 微信订单号
| out_order_no {data-required}| string | 商户分账单号
| order_id {data-required}| string | 微信分账单号
| status | string | 分账单状态<br/>`FINISHED` \| `PROCESSING` 枚举值之一
| receivers | string | +分账接收方列表

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_1&index=1)
