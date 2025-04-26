---
title: 保险商户App预签约
description: 商户可调用本接口预先指定签约及交易信息（交易信息可选填），生成预签约会话及对应的预签约ID，再携带预签约ID（pre_entrustweb_id）参数，通过微信SDK拉起微信支付客户端的签约页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 应用ID
| openid {data-indent=1} | string | 用户在直连商户应用下的用户标示
| plan_id {data-required data-indent=1} | number | 委托代扣模板ID
| out_contract_code {data-required data-indent=1} | string | 商户签约协议号
| insured_display_name {data-required data-indent=1} | string | 被保人的展示名称
| contract_notify_url {data-required data-indent=1} | string | 签约结果通知地址
| policy_start_date {data-required data-indent=1} | string | 保险保单的开始日期
| policy_end_date {data-required data-indent=1} | string | 保险保单的结束日期
| policy_periods {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 保单的扣费周期列表
| policy_period_id {data-required data-indent=2} | number | 保险扣费周期编号
| estimated_deduct_date {data-required data-indent=2} | string | 预计扣费的日期
| estimated_deduct_amount {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 预计扣费金额
| total {data-required data-indent=3} | number | 金额
| currency {data-indent=3} | string | 货币类型
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 扣费金额信息
| total {data-required data-indent=2} | number | 金额
| currency {data-indent=2} | string | 货币类型
| out_trade_no {data-indent=1} | string | 商户订单号
| description {data-indent=1} | string | 商品描述
| transaction_notify_url {data-indent=1} | string | 支付结果通知地址
| out_user_code {data-indent=1} | string | 商户侧用户标识
| goods_tag {data-indent=1} | string | 订单优惠标记
| attach {data-indent=1} | string | 附加数据
| can_auto_insure {data-indent=1} | boolean | 是否自动续保
| can_auto_reinsure {data-indent=1} | boolean | 是否自动重新投保
| real_identity {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户实名信息
| real_name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人姓名
| id_card_number {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人身份证号码
| identity_type {data-indent=2} | string | 实名验证类型<br/>`ID_CARD` 枚举值
| combined_deduct_period_count {data-indent=1} | number | 合并扣费期数
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->insuranceSign->contracts->preEntrustSign->app->postAsync([
  'json' => [
    'appid'                        => 'wxd678efh567hg6787',
    'openid'                       => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                      => 12535,
    'out_contract_code'            => 'wxwtdk20200910100000',
    'insured_display_name'         => '*明',
    'contract_notify_url'          => 'https://yourapp.com/notify',
    'policy_start_date'            => '2019-11-22',
    'policy_end_date'              => '2020-11-22',
    'policy_periods'               => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'amount'                       => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'out_trade_no'                 => '1217752501201407033233368018',
    'description'                  => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url'       => 'https://www.qq.com/',
    'out_user_code'                => '用户昵称',
    'goods_tag'                    => 'DISCOUNTS',
    'attach'                       => '自定义数据',
    'can_auto_insure'              => true,
    'can_auto_reinsure'            => true,
    'real_identity'                => [
      'real_name'      => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
      'id_card_number' => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'identity_type'  => 'ID_CARD',
    ],
    'combined_deduct_period_count' => 1,
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
$instance->chain('v3/papay/insurance-sign/contracts/pre-entrust-sign/app')->postAsync([
  'json' => [
    'appid'                        => 'wxd678efh567hg6787',
    'openid'                       => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                      => 12535,
    'out_contract_code'            => 'wxwtdk20200910100000',
    'insured_display_name'         => '*明',
    'contract_notify_url'          => 'https://yourapp.com/notify',
    'policy_start_date'            => '2019-11-22',
    'policy_end_date'              => '2020-11-22',
    'policy_periods'               => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'amount'                       => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'out_trade_no'                 => '1217752501201407033233368018',
    'description'                  => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url'       => 'https://www.qq.com/',
    'out_user_code'                => '用户昵称',
    'goods_tag'                    => 'DISCOUNTS',
    'attach'                       => '自定义数据',
    'can_auto_insure'              => true,
    'can_auto_reinsure'            => true,
    'real_identity'                => [
      'real_name'      => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
      'id_card_number' => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'identity_type'  => 'ID_CARD',
    ],
    'combined_deduct_period_count' => 1,
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
$instance['v3/papay/insurance-sign/contracts/pre-entrust-sign/app']->postAsync([
  'json' => [
    'appid'                        => 'wxd678efh567hg6787',
    'openid'                       => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                      => 12535,
    'out_contract_code'            => 'wxwtdk20200910100000',
    'insured_display_name'         => '*明',
    'contract_notify_url'          => 'https://yourapp.com/notify',
    'policy_start_date'            => '2019-11-22',
    'policy_end_date'              => '2020-11-22',
    'policy_periods'               => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'amount'                       => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'out_trade_no'                 => '1217752501201407033233368018',
    'description'                  => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url'       => 'https://www.qq.com/',
    'out_user_code'                => '用户昵称',
    'goods_tag'                    => 'DISCOUNTS',
    'attach'                       => '自定义数据',
    'can_auto_insure'              => true,
    'can_auto_reinsure'            => true,
    'real_identity'                => [
      'real_name'      => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
      'id_card_number' => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'identity_type'  => 'ID_CARD',
    ],
    'combined_deduct_period_count' => 1,
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
$response = $instance->v3->papay->insuranceSign->contracts->preEntrustSign->app->post([
  'json' => [
    'appid'                        => 'wxd678efh567hg6787',
    'openid'                       => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                      => 12535,
    'out_contract_code'            => 'wxwtdk20200910100000',
    'insured_display_name'         => '*明',
    'contract_notify_url'          => 'https://yourapp.com/notify',
    'policy_start_date'            => '2019-11-22',
    'policy_end_date'              => '2020-11-22',
    'policy_periods'               => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'amount'                       => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'out_trade_no'                 => '1217752501201407033233368018',
    'description'                  => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url'       => 'https://www.qq.com/',
    'out_user_code'                => '用户昵称',
    'goods_tag'                    => 'DISCOUNTS',
    'attach'                       => '自定义数据',
    'can_auto_insure'              => true,
    'can_auto_reinsure'            => true,
    'real_identity'                => [
      'real_name'      => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
      'id_card_number' => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'identity_type'  => 'ID_CARD',
    ],
    'combined_deduct_period_count' => 1,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/insurance-sign/contracts/pre-entrust-sign/app')->post([
  'json' => [
    'appid'                        => 'wxd678efh567hg6787',
    'openid'                       => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                      => 12535,
    'out_contract_code'            => 'wxwtdk20200910100000',
    'insured_display_name'         => '*明',
    'contract_notify_url'          => 'https://yourapp.com/notify',
    'policy_start_date'            => '2019-11-22',
    'policy_end_date'              => '2020-11-22',
    'policy_periods'               => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'amount'                       => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'out_trade_no'                 => '1217752501201407033233368018',
    'description'                  => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url'       => 'https://www.qq.com/',
    'out_user_code'                => '用户昵称',
    'goods_tag'                    => 'DISCOUNTS',
    'attach'                       => '自定义数据',
    'can_auto_insure'              => true,
    'can_auto_reinsure'            => true,
    'real_identity'                => [
      'real_name'      => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
      'id_card_number' => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'identity_type'  => 'ID_CARD',
    ],
    'combined_deduct_period_count' => 1,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/insurance-sign/contracts/pre-entrust-sign/app']->post([
  'json' => [
    'appid'                        => 'wxd678efh567hg6787',
    'openid'                       => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                      => 12535,
    'out_contract_code'            => 'wxwtdk20200910100000',
    'insured_display_name'         => '*明',
    'contract_notify_url'          => 'https://yourapp.com/notify',
    'policy_start_date'            => '2019-11-22',
    'policy_end_date'              => '2020-11-22',
    'policy_periods'               => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'amount'                       => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'out_trade_no'                 => '1217752501201407033233368018',
    'description'                  => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url'       => 'https://www.qq.com/',
    'out_user_code'                => '用户昵称',
    'goods_tag'                    => 'DISCOUNTS',
    'attach'                       => '自定义数据',
    'can_auto_insure'              => true,
    'can_auto_reinsure'            => true,
    'real_identity'                => [
      'real_name'      => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
      'id_card_number' => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'identity_type'  => 'ID_CARD',
    ],
    'combined_deduct_period_count' => 1,
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
| pre_entrustweb_id {data-required} | string | 预签约ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013005766)
