---
title: 发起批量转账
description: 服务商可以通过该接口，批量向用户零钱或务工卡进行转账操作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| platform_mchid {data-required data-indent=1} | string | 服务平台商户号
| specialized_payment_mchid {data-required data-indent=1} | string | 付款企业商户号
| sponsor_mchid {data-required data-indent=1} | string | 实际出资商户号
| user_authorized_mchid {data-required data-indent=1} | string | 用户授权商户号
| user_authorized_appid {data-required data-indent=1} | string | 用户授权appid
| out_batch_no {data-required data-indent=1} | string | 银行批次单号
| batch_name {data-required data-indent=1} | string | 批次名称
| batch_remark {data-required data-indent=1} | string | 批次备注
| attach_remark {data-indent=1} | string | 附加信息
| total_amount {data-required data-indent=1} | integer | 转账总金额
| total_count {data-required data-indent=1} | integer | 转账总笔数
| transfer_scene {data-required data-indent=1} | string | 转账场景
| transfer_purpose {data-required data-indent=1} | string | 批量转账用途
| transfer_detail_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 转账明细列表
| out_detail_no {data-required data-indent=2} | string | 银行明细单号
| transfer_amount {data-required data-indent=2} | integer | 转账金额
| transfer_remark {data-required data-indent=2} | string | 转账备注
| openid {data-required data-indent=2} | string | 收款用户openid
| user_name {data-required data-indent=2} | string | 收款用户姓名
| user_id_card {data-indent=2} | string | 收款用户身份证
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bankTransfer->batches->postAsync([
  'json' => [
    'platform_mchid'            => '1900001109',
    'specialized_payment_mchid' => '1900001109',
    'sponsor_mchid'             => '1900001109',
    'user_authorized_mchid'     => '1900001109',
    'user_authorized_appid'     => 'wxaffdakkk11112e3',
    'out_batch_no'              => 'plfk2020042013',
    'batch_name'                => '2019年1月深圳分部报销单',
    'batch_remark'              => '2019年1月深圳分部报销单',
    'attach_remark'             => '付款专用商户单号11111',
    'total_amount'              => 4000000,
    'total_count'               => 200,
    'transfer_scene'            => 'ORDINARY_TRANSFER',
    'transfer_purpose'          => 'COMMISSION',
    'transfer_detail_list'      => [[
      'out_detail_no'   => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid'          => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card'    => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
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
$instance->chain('v3/bank-transfer/batches')->postAsync([
  'json' => [
    'platform_mchid'            => '1900001109',
    'specialized_payment_mchid' => '1900001109',
    'sponsor_mchid'             => '1900001109',
    'user_authorized_mchid'     => '1900001109',
    'user_authorized_appid'     => 'wxaffdakkk11112e3',
    'out_batch_no'              => 'plfk2020042013',
    'batch_name'                => '2019年1月深圳分部报销单',
    'batch_remark'              => '2019年1月深圳分部报销单',
    'attach_remark'             => '付款专用商户单号11111',
    'total_amount'              => 4000000,
    'total_count'               => 200,
    'transfer_scene'            => 'ORDINARY_TRANSFER',
    'transfer_purpose'          => 'COMMISSION',
    'transfer_detail_list'      => [[
      'out_detail_no'   => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid'          => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card'    => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
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
$instance['v3/bank-transfer/batches']->postAsync([
  'json' => [
    'platform_mchid'            => '1900001109',
    'specialized_payment_mchid' => '1900001109',
    'sponsor_mchid'             => '1900001109',
    'user_authorized_mchid'     => '1900001109',
    'user_authorized_appid'     => 'wxaffdakkk11112e3',
    'out_batch_no'              => 'plfk2020042013',
    'batch_name'                => '2019年1月深圳分部报销单',
    'batch_remark'              => '2019年1月深圳分部报销单',
    'attach_remark'             => '付款专用商户单号11111',
    'total_amount'              => 4000000,
    'total_count'               => 200,
    'transfer_scene'            => 'ORDINARY_TRANSFER',
    'transfer_purpose'          => 'COMMISSION',
    'transfer_detail_list'      => [[
      'out_detail_no'   => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid'          => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card'    => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
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
$response = $instance->v3->bankTransfer->batches->post([
  'json' => [
    'platform_mchid'            => '1900001109',
    'specialized_payment_mchid' => '1900001109',
    'sponsor_mchid'             => '1900001109',
    'user_authorized_mchid'     => '1900001109',
    'user_authorized_appid'     => 'wxaffdakkk11112e3',
    'out_batch_no'              => 'plfk2020042013',
    'batch_name'                => '2019年1月深圳分部报销单',
    'batch_remark'              => '2019年1月深圳分部报销单',
    'attach_remark'             => '付款专用商户单号11111',
    'total_amount'              => 4000000,
    'total_count'               => 200,
    'transfer_scene'            => 'ORDINARY_TRANSFER',
    'transfer_purpose'          => 'COMMISSION',
    'transfer_detail_list'      => [[
      'out_detail_no'   => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid'          => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card'    => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bank-transfer/batches')->post([
  'json' => [
    'platform_mchid'            => '1900001109',
    'specialized_payment_mchid' => '1900001109',
    'sponsor_mchid'             => '1900001109',
    'user_authorized_mchid'     => '1900001109',
    'user_authorized_appid'     => 'wxaffdakkk11112e3',
    'out_batch_no'              => 'plfk2020042013',
    'batch_name'                => '2019年1月深圳分部报销单',
    'batch_remark'              => '2019年1月深圳分部报销单',
    'attach_remark'             => '付款专用商户单号11111',
    'total_amount'              => 4000000,
    'total_count'               => 200,
    'transfer_scene'            => 'ORDINARY_TRANSFER',
    'transfer_purpose'          => 'COMMISSION',
    'transfer_detail_list'      => [[
      'out_detail_no'   => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid'          => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card'    => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bank-transfer/batches']->post([
  'json' => [
    'platform_mchid'            => '1900001109',
    'specialized_payment_mchid' => '1900001109',
    'sponsor_mchid'             => '1900001109',
    'user_authorized_mchid'     => '1900001109',
    'user_authorized_appid'     => 'wxaffdakkk11112e3',
    'out_batch_no'              => 'plfk2020042013',
    'batch_name'                => '2019年1月深圳分部报销单',
    'batch_remark'              => '2019年1月深圳分部报销单',
    'attach_remark'             => '付款专用商户单号11111',
    'total_amount'              => 4000000,
    'total_count'               => 200,
    'transfer_scene'            => 'ORDINARY_TRANSFER',
    'transfer_purpose'          => 'COMMISSION',
    'transfer_detail_list'      => [[
      'out_detail_no'   => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid'          => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card'    => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    ],],
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
| out_batch_no {data-required} | string | 银行批次单号
| batch_id {data-required} | string | 微信支付批次单号
| create_time {data-required} | string | 批次创建时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_2_1.shtml)
