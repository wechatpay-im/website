---
title: 发起批量转账
description: 服务商可以通过该接口，批量向用户选择的收款账户转账。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 特约商户号
| sub_appid {data-indent=1} | string | 特约商户AppID
| authorization_type {data-indent=1} | string | 特约商户授权类型
| out_batch_no {data-indent=1} | string | 商家批次单号
| batch_name {data-indent=1} | string | 批次名称
| batch_remark {data-indent=1} | string | 批次备注
| total_amount {data-indent=1} | integer | 转账总金额
| total_num {data-indent=1} | integer | 转账总笔数
| transfer_detail_list {data-indent=1} | object[] | 转账明细列表
| out_detail_no {data-indent=2} | string | 商家明细单号
| transfer_amount {data-indent=2} | integer | 转账金额
| transfer_remark {data-indent=2} | string | 转账备注
| openid {data-indent=2} | string | 收款用户OpenID
| user_name {data-indent=2} | string | 收款用户姓名
| sp_appid {data-indent=1} | string | 服务商的AppID
| employment_type {data-indent=1} | string | 用工类型
| employment_scene {data-indent=1} | string | 用工场景
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payrollCard->transferBatches->postAsync([
  'json' => [
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxf636efh567hg4356',
    'authorization_type' => 'INFORMATION_AUTHORIZATION_TYPE',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    ],],
    'sp_appid' => 'wxf636efh567hg4388',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'employment_scene' => 'LOGISTICS',
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
$instance->chain('v3/payroll-card/transfer-batches')->postAsync([
  'json' => [
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxf636efh567hg4356',
    'authorization_type' => 'INFORMATION_AUTHORIZATION_TYPE',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    ],],
    'sp_appid' => 'wxf636efh567hg4388',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'employment_scene' => 'LOGISTICS',
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
$instance['v3/payroll-card/transfer-batches']->postAsync([
  'json' => [
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxf636efh567hg4356',
    'authorization_type' => 'INFORMATION_AUTHORIZATION_TYPE',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    ],],
    'sp_appid' => 'wxf636efh567hg4388',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'employment_scene' => 'LOGISTICS',
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
$response = $instance->v3->payrollCard->transferBatches->post([
  'json' => [
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxf636efh567hg4356',
    'authorization_type' => 'INFORMATION_AUTHORIZATION_TYPE',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    ],],
    'sp_appid' => 'wxf636efh567hg4388',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'employment_scene' => 'LOGISTICS',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payroll-card/transfer-batches')->post([
  'json' => [
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxf636efh567hg4356',
    'authorization_type' => 'INFORMATION_AUTHORIZATION_TYPE',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    ],],
    'sp_appid' => 'wxf636efh567hg4388',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'employment_scene' => 'LOGISTICS',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payroll-card/transfer-batches']->post([
  'json' => [
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxf636efh567hg4356',
    'authorization_type' => 'INFORMATION_AUTHORIZATION_TYPE',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    ],],
    'sp_appid' => 'wxf636efh567hg4388',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'employment_scene' => 'LOGISTICS',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no | string | 商家批次单号
| batch_id | string | 微信支付批次单号
| create_time | string | 批次创建时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_6.shtml)
