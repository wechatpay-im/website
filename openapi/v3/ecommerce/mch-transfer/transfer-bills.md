---
title: 发起转账
description: 商户可通过此接口申请创建商家转账订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| appid {data-indent=1} | string | 服务商AppID
| out_bill_no {data-indent=1} | string | 商户单号
| transfer_scene_id {data-indent=1} | string | 转账场景ID
| openid {data-indent=1} | string | 收款用户OpenID
| user_name {data-indent=1} | string | 收款用户姓名
| transfer_amount {data-indent=1} | number | 转账金额
| transfer_remark {data-indent=1} | string | 转账备注
| notify_url {data-indent=1} | string | 商户回调地址
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->mchTransfer->transferBills->postAsync([
  'json' => [
    'sub_mchid' => '1900001109',
    'appid' => 'wxf636efh567hg4356',
    'out_bill_no' => 'plfk2020042013',
    'transfer_scene_id' => '1000',
    'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount' => 400000,
    'transfer_remark' => '2020年4月报销',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/mch-transfer/transfer-bills')->postAsync([
  'json' => [
    'sub_mchid' => '1900001109',
    'appid' => 'wxf636efh567hg4356',
    'out_bill_no' => 'plfk2020042013',
    'transfer_scene_id' => '1000',
    'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount' => 400000,
    'transfer_remark' => '2020年4月报销',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/mch-transfer/transfer-bills']->postAsync([
  'json' => [
    'sub_mchid' => '1900001109',
    'appid' => 'wxf636efh567hg4356',
    'out_bill_no' => 'plfk2020042013',
    'transfer_scene_id' => '1000',
    'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount' => 400000,
    'transfer_remark' => '2020年4月报销',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->mchTransfer->transferBills->post([
  'json' => [
    'sub_mchid' => '1900001109',
    'appid' => 'wxf636efh567hg4356',
    'out_bill_no' => 'plfk2020042013',
    'transfer_scene_id' => '1000',
    'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount' => 400000,
    'transfer_remark' => '2020年4月报销',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/mch-transfer/transfer-bills')->post([
  'json' => [
    'sub_mchid' => '1900001109',
    'appid' => 'wxf636efh567hg4356',
    'out_bill_no' => 'plfk2020042013',
    'transfer_scene_id' => '1000',
    'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount' => 400000,
    'transfer_remark' => '2020年4月报销',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/mch-transfer/transfer-bills']->post([
  'json' => [
    'sub_mchid' => '1900001109',
    'appid' => 'wxf636efh567hg4356',
    'out_bill_no' => 'plfk2020042013',
    'transfer_scene_id' => '1000',
    'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount' => 400000,
    'transfer_remark' => '2020年4月报销',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 二级商户号
| out_bill_no | string | 商户单号
| transfer_bill_no | string | 微信转账单号
| create_time | string | 单据创建时间
| state | string | 单据状态
| fail_reason | string | 失败原因
| package_info | string | 跳转领取页面的package信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-bill/transfer-to-user.html)