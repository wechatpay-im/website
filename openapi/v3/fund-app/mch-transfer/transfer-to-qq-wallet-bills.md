---
title: 发起转账到QQ钱包
description: 当QQ用户参与商户提供的活动并且商户需要转账到QQ钱包时，商户需调用发起转账到QQ钱包接口发起申请转账。同时，支持商户指定回调的URL接收对应的通知信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | QQ互联开放平台AppID
| out_bill_no {data-required data-indent=1} | string | 商户单号
| openid {data-required data-indent=1} | string | 收款用户OpenID
| user_qq {data-indent=1} | string | 收款用户QQ号
| user_name {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 收款用户姓名
| transfer_amount {data-required data-indent=1} | number | 转账金额
| transfer_remark {data-required data-indent=1} | string | 转账备注
| notify_url {data-indent=1} | string | 通知地址
| transfer_scene_id {data-required data-indent=1} | string | 转账场景ID<br/>`1401` 枚举值
| transfer_scene_report_infos {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 转账场景报备信息
| info_type {data-indent=2} | string | 信息类型
| info_content {data-indent=2} | string | 信息内容
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->transferToQqWalletBills->postAsync([
  'json' => [
    'appid'                       => '102022609',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_qq'                     => '490379403',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'transfer_scene_id'           => '1401',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills')->postAsync([
  'json' => [
    'appid'                       => '102022609',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_qq'                     => '490379403',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'transfer_scene_id'           => '1401',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills']->postAsync([
  'json' => [
    'appid'                       => '102022609',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_qq'                     => '490379403',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'transfer_scene_id'           => '1401',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->transferToQqWalletBills->post([
  'json' => [
    'appid'                       => '102022609',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_qq'                     => '490379403',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'transfer_scene_id'           => '1401',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills')->post([
  'json' => [
    'appid'                       => '102022609',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_qq'                     => '490379403',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'transfer_scene_id'           => '1401',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills']->post([
  'json' => [
    'appid'                       => '102022609',
    'out_bill_no'                 => 'plfk2020042013',
    'openid'                      => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_qq'                     => '490379403',
    'user_name'                   => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'transfer_amount'             => 400000,
    'transfer_remark'             => '2020年4月报销',
    'notify_url'                  => 'https://www.weixin.qq.com/wxpay/pay.php',
    'transfer_scene_id'           => '1401',
    'transfer_scene_report_infos' => [[
      'info_type'    => '活动名称',
      'info_content' => '注册会员有礼',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

::: tip 转账场景ID(`transfer_scene_id`) 及 转账场景报备信息(`transfer_scene_report_infos`) 有如下固定搭配组合要求:
:::

::: code-group

```php [1401(活动奖励)]
'transfer_scene_id'           => '1401', // 活动奖励
'transfer_scene_report_infos' => [       // 固定传两组
  [
    'info_type'    => '活动名称',   // 固定值
    'info_content' => '新会员有礼', // 示例值
  ],
  [
    'info_type'    => '奖励说明',   // 固定值
    'info_content' => '抽奖一等奖', // 示例值
  ],
],
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4014297386)
