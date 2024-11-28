---
title: 受理单次预约商家转账
description: 商户可调用接口预先指定转账的单次计划，预创建预约记录并获取微信预约记录单号和跳转信息（package_info），再携带该（package_info）参数，通过微信SDK拉起微信支付客户端的用户确认页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| sp_appid {data-required data-indent=1} | string | 服务商AppID
| sub_appid {data-indent=1} | string | 二级商户AppID
| out_reservation_no {data-required data-indent=1} | string | 商户预约单号
| transfer_scene_id {data-required data-indent=1} | string | 转账场景ID
| estimated_date {data-required data-indent=1} | string | 预计最晚转账日期
| estimated_max_amount {data-indent=1} | number | 预计最大转账金额
| exact_amount {data-indent=1} | number | 准确转账金额
| openid {data-indent=1} | string | 收款用户OpenID
| user_real_name {data-indent=1} | string | 收款用户姓名
| reserve_remark {data-required data-indent=1} | string | 预约备注
| notify_url {data-required data-indent=1} | string | 商户回调地址
| scene_report_data {data-indent=1} | object {data-tooltip="对应PHP的array"} | 场景报备信息
| insurance_policy {data-indent=2} | object {data-tooltip="对应PHP的array"} | 保险保单报备信息
| product_registration_no {data-required data-indent=3} | string | 保险产品备案编号
| policy_no {data-required data-indent=3} | string | 保险单号
| name {data-required data-indent=3} | string | 保险名称
| withdrawal_no {data-indent=3} | string | 取现单号
| claim_no {data-indent=3} | string | 理赔单号
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->mchTransfer->reservation->apply->postAsync([
  'json' => [
    'sub_mchid'            => '1900001109',
    'sp_appid'             => 'wxf636efh567hg4356',
    'sub_appid'            => 'wxf636efh567hg4356',
    'out_reservation_no'   => 'plfk2020042013',
    'transfer_scene_id'    => '1000',
    'estimated_date'       => '2019-11-22',
    'estimated_max_amount' => 400000,
    'exact_amount'         => 100000,
    'openid'               => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_real_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'reserve_remark'       => '由于存在收益波动，实际到账资金可能不等于当前金额',
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
    'scene_report_data'    => [
      'insurance_policy' => [
        'product_registration_no' => '40058541257',
        'policy_no'               => '202301011651',
        'name'                    => '养老保险',
        'withdrawal_no'           => '202310410941',
        'claim_no'                => '202310410941',
      ],
    ],
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
$instance->chain('v3/platsolution/mch-transfer/reservation/apply')->postAsync([
  'json' => [
    'sub_mchid'            => '1900001109',
    'sp_appid'             => 'wxf636efh567hg4356',
    'sub_appid'            => 'wxf636efh567hg4356',
    'out_reservation_no'   => 'plfk2020042013',
    'transfer_scene_id'    => '1000',
    'estimated_date'       => '2019-11-22',
    'estimated_max_amount' => 400000,
    'exact_amount'         => 100000,
    'openid'               => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_real_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'reserve_remark'       => '由于存在收益波动，实际到账资金可能不等于当前金额',
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
    'scene_report_data'    => [
      'insurance_policy' => [
        'product_registration_no' => '40058541257',
        'policy_no'               => '202301011651',
        'name'                    => '养老保险',
        'withdrawal_no'           => '202310410941',
        'claim_no'                => '202310410941',
      ],
    ],
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
$instance['v3/platsolution/mch-transfer/reservation/apply']->postAsync([
  'json' => [
    'sub_mchid'            => '1900001109',
    'sp_appid'             => 'wxf636efh567hg4356',
    'sub_appid'            => 'wxf636efh567hg4356',
    'out_reservation_no'   => 'plfk2020042013',
    'transfer_scene_id'    => '1000',
    'estimated_date'       => '2019-11-22',
    'estimated_max_amount' => 400000,
    'exact_amount'         => 100000,
    'openid'               => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_real_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'reserve_remark'       => '由于存在收益波动，实际到账资金可能不等于当前金额',
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
    'scene_report_data'    => [
      'insurance_policy' => [
        'product_registration_no' => '40058541257',
        'policy_no'               => '202301011651',
        'name'                    => '养老保险',
        'withdrawal_no'           => '202310410941',
        'claim_no'                => '202310410941',
      ],
    ],
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
$response = $instance->v3->platsolution->mchTransfer->reservation->apply->post([
  'json' => [
    'sub_mchid'            => '1900001109',
    'sp_appid'             => 'wxf636efh567hg4356',
    'sub_appid'            => 'wxf636efh567hg4356',
    'out_reservation_no'   => 'plfk2020042013',
    'transfer_scene_id'    => '1000',
    'estimated_date'       => '2019-11-22',
    'estimated_max_amount' => 400000,
    'exact_amount'         => 100000,
    'openid'               => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_real_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'reserve_remark'       => '由于存在收益波动，实际到账资金可能不等于当前金额',
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
    'scene_report_data'    => [
      'insurance_policy' => [
        'product_registration_no' => '40058541257',
        'policy_no'               => '202301011651',
        'name'                    => '养老保险',
        'withdrawal_no'           => '202310410941',
        'claim_no'                => '202310410941',
      ],
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/mch-transfer/reservation/apply')->post([
  'json' => [
    'sub_mchid'            => '1900001109',
    'sp_appid'             => 'wxf636efh567hg4356',
    'sub_appid'            => 'wxf636efh567hg4356',
    'out_reservation_no'   => 'plfk2020042013',
    'transfer_scene_id'    => '1000',
    'estimated_date'       => '2019-11-22',
    'estimated_max_amount' => 400000,
    'exact_amount'         => 100000,
    'openid'               => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_real_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'reserve_remark'       => '由于存在收益波动，实际到账资金可能不等于当前金额',
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
    'scene_report_data'    => [
      'insurance_policy' => [
        'product_registration_no' => '40058541257',
        'policy_no'               => '202301011651',
        'name'                    => '养老保险',
        'withdrawal_no'           => '202310410941',
        'claim_no'                => '202310410941',
      ],
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/mch-transfer/reservation/apply']->post([
  'json' => [
    'sub_mchid'            => '1900001109',
    'sp_appid'             => 'wxf636efh567hg4356',
    'sub_appid'            => 'wxf636efh567hg4356',
    'out_reservation_no'   => 'plfk2020042013',
    'transfer_scene_id'    => '1000',
    'estimated_date'       => '2019-11-22',
    'estimated_max_amount' => 400000,
    'exact_amount'         => 100000,
    'openid'               => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'user_real_name'       => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'reserve_remark'       => '由于存在收益波动，实际到账资金可能不等于当前金额',
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
    'scene_report_data'    => [
      'insurance_policy' => [
        'product_registration_no' => '40058541257',
        'policy_no'               => '202301011651',
        'name'                    => '养老保险',
        'withdrawal_no'           => '202310410941',
        'claim_no'                => '202310410941',
      ],
    ],
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
| sub_mchid {data-required} | string | 二级商户号
| out_reservation_no {data-required} | string | 商户预约单号
| reservation_id {data-required} | string | 微信转账预约单号
| accept_time {data-required} | string | 预约记录受理时间
| state {data-required} | string | 预约记录状态<br/>`ACCEPTED` \| `CONFIRMED` \| `CLOSED` 枚举值之一
| package_info {data-required} | string | 跳转微信支付用户确认预约页的package信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-reservation/transfer-reservation-apply.html)
