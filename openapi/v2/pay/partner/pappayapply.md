---
title: 申请扣款
description: 委托代扣可应用于定期扣款或需事后扣款以期提高效率的场景。例如但不限于，会员制缴费、水电煤缴费、黄钻绿钻增值服务、打车类软件、停车场或高速公路无人缴费、理财通基金定投、信用卡还款等通过用户授权给商户，进行委托扣款的场景。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sub_mch_id {data-indent=1} | string | 子商户号
| appid {data-required data-indent=1} | string | 请求appid
| mch_id {data-required data-indent=1} | string | 商户号
| body {data-required data-indent=1} | string | 商品描述
| detail {data-indent=1} | string | 商品详情
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| total_fee {data-required data-indent=1} | integer | 总金额
| fee_type {data-indent=1} | string | 货币类型
| spbill_create_ip {data-required data-indent=1} | string | 终端IP
| goods_tag {data-indent=1} | string | 商品标记
| notify_url {data-required data-indent=1} | string | 回调通知url
| trade_type {data-required data-indent=1} | string | 交易类型
| contract_id {data-required data-indent=1} | string | 委托代扣协议id
| receipt {data-indent=1} | string | 电子发票入口开放标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->partner->pappayapply->postAsync([
  'xml' => [
    'sub_appid' => '',
    'sub_mch_id' => '',
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'body' => '水电代扣',
    'detail' => '水电代扣：A水电代扣：B水电代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'contract_id' => 'Wx15463511252015071056489715',
    'receipt' => 'Y',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/partner/pappayapply')->postAsync([
  'xml' => [
    'sub_appid' => '',
    'sub_mch_id' => '',
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'body' => '水电代扣',
    'detail' => '水电代扣：A水电代扣：B水电代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'contract_id' => 'Wx15463511252015071056489715',
    'receipt' => 'Y',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/partner/pappayapply']->postAsync([
  'xml' => [
    'sub_appid' => '',
    'sub_mch_id' => '',
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'body' => '水电代扣',
    'detail' => '水电代扣：A水电代扣：B水电代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'contract_id' => 'Wx15463511252015071056489715',
    'receipt' => 'Y',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->partner->pappayapply->post([
  'xml' => [
    'sub_appid' => '',
    'sub_mch_id' => '',
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'body' => '水电代扣',
    'detail' => '水电代扣：A水电代扣：B水电代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'contract_id' => 'Wx15463511252015071056489715',
    'receipt' => 'Y',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/partner/pappayapply')->post([
  'xml' => [
    'sub_appid' => '',
    'sub_mch_id' => '',
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'body' => '水电代扣',
    'detail' => '水电代扣：A水电代扣：B水电代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'contract_id' => 'Wx15463511252015071056489715',
    'receipt' => 'Y',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/partner/pappayapply']->post([
  'xml' => [
    'sub_appid' => '',
    'sub_mch_id' => '',
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'body' => '水电代扣',
    'detail' => '水电代扣：A水电代扣：B水电代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'contract_id' => 'Wx15463511252015071056489715',
    'receipt' => 'Y',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| return_code {data-required}| string | 返回状态码
| return_msg {data-required}| string | 返回信息
| appid {data-required}| string | 公众账号id
| mch_id {data-required}| string | 商户号
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter5_8.shtml)
