---
title: 完结租借订单
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| version {data-indent=1} | string | 接口版本号
| appid {data-indent=1} | string | 公众账号ID
| mch_id {data-indent=1} | string | 商户号
| sign_type {data-indent=1} | string | 签名类型
| out_order_no {data-indent=1} | string | 商户服务订单号
| service_id {data-indent=1} | string | 服务ID
| returned {data-indent=1} | string | 是否归还
| real_end_time {data-indent=1} | string | 实际归还时间
| service_end_location {data-indent=1} | string | 归还地点
| total_amount {data-indent=1} | integer | 总金额
| rent_fee {data-indent=1} | integer | 租金费用
| compensation_fee {data-indent=1} | string | 赔偿金费用
| compensation_fee_desc {data-indent=1} | string | 赔偿金费用说明
| finish_ticket {data-indent=1} | string | 完结凭证
| profit_sharing {data-indent=1} | string | 分账标识
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->wxv->finishrentbill->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'returned' => 'TRUE',
    'real_end_time' => '20091225091010',
    'service_end_location' => '嗨客时尚主题展餐厅',
    'total_amount' => '40000',
    'rent_fee' => '5800',
    'compensation_fee' => '赔偿金费用和租金金额二者必须填写其中一个。赔偿金费用和赔偿金费用说明必须一起填写，单位：分必须>0，传入表示需要扣赔偿金传入表示需要扣赔偿金物品已归还——用户对物品产生了破坏行为造成的损失费用。物品未归还——未还物品费用。传入为0报错.',
    'compensation_fee_desc' => '充电宝有轻微损坏，赔偿30%押金',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/wxv/finishrentbill')->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'returned' => 'TRUE',
    'real_end_time' => '20091225091010',
    'service_end_location' => '嗨客时尚主题展餐厅',
    'total_amount' => '40000',
    'rent_fee' => '5800',
    'compensation_fee' => '赔偿金费用和租金金额二者必须填写其中一个。赔偿金费用和赔偿金费用说明必须一起填写，单位：分必须>0，传入表示需要扣赔偿金传入表示需要扣赔偿金物品已归还——用户对物品产生了破坏行为造成的损失费用。物品未归还——未还物品费用。传入为0报错.',
    'compensation_fee_desc' => '充电宝有轻微损坏，赔偿30%押金',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/wxv/finishrentbill']->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'returned' => 'TRUE',
    'real_end_time' => '20091225091010',
    'service_end_location' => '嗨客时尚主题展餐厅',
    'total_amount' => '40000',
    'rent_fee' => '5800',
    'compensation_fee' => '赔偿金费用和租金金额二者必须填写其中一个。赔偿金费用和赔偿金费用说明必须一起填写，单位：分必须>0，传入表示需要扣赔偿金传入表示需要扣赔偿金物品已归还——用户对物品产生了破坏行为造成的损失费用。物品未归还——未还物品费用。传入为0报错.',
    'compensation_fee_desc' => '充电宝有轻微损坏，赔偿30%押金',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->wxv->finishrentbill->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'returned' => 'TRUE',
    'real_end_time' => '20091225091010',
    'service_end_location' => '嗨客时尚主题展餐厅',
    'total_amount' => '40000',
    'rent_fee' => '5800',
    'compensation_fee' => '赔偿金费用和租金金额二者必须填写其中一个。赔偿金费用和赔偿金费用说明必须一起填写，单位：分必须>0，传入表示需要扣赔偿金传入表示需要扣赔偿金物品已归还——用户对物品产生了破坏行为造成的损失费用。物品未归还——未还物品费用。传入为0报错.',
    'compensation_fee_desc' => '充电宝有轻微损坏，赔偿30%押金',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/wxv/finishrentbill')->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'returned' => 'TRUE',
    'real_end_time' => '20091225091010',
    'service_end_location' => '嗨客时尚主题展餐厅',
    'total_amount' => '40000',
    'rent_fee' => '5800',
    'compensation_fee' => '赔偿金费用和租金金额二者必须填写其中一个。赔偿金费用和赔偿金费用说明必须一起填写，单位：分必须>0，传入表示需要扣赔偿金传入表示需要扣赔偿金物品已归还——用户对物品产生了破坏行为造成的损失费用。物品未归还——未还物品费用。传入为0报错.',
    'compensation_fee_desc' => '充电宝有轻微损坏，赔偿30%押金',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/wxv/finishrentbill']->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'returned' => 'TRUE',
    'real_end_time' => '20091225091010',
    'service_end_location' => '嗨客时尚主题展餐厅',
    'total_amount' => '40000',
    'rent_fee' => '5800',
    'compensation_fee' => '赔偿金费用和租金金额二者必须填写其中一个。赔偿金费用和赔偿金费用说明必须一起填写，单位：分必须>0，传入表示需要扣赔偿金传入表示需要扣赔偿金物品已归还——用户对物品产生了破坏行为造成的损失费用。物品未归还——未还物品费用。传入为0报错.',
    'compensation_fee_desc' => '充电宝有轻微损坏，赔偿30%押金',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回结果
| sign | string | 签名
| nonce_str | string | 随机字符串
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误描述
| appid | string | 公众账号ID
| mch_id | string | 商户号
| out_order_no | string | 商户服务订单号
| service_id | string | 服务ID
| order_id | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_4&index=5)