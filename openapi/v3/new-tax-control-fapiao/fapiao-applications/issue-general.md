---
title: 开具通用行业电子发票
description: 商户完成收款后，调用本接口开具通用行业电子发票并插入微信用户的卡包。请求的交易信息必须真实存在。 注意：本接口成功返回仅代表开票请求已被受理，当开票完成时，微信支付会根据商户配置的回调地址进行回调通知，商户也可以通过【查询电子发票】接口获取开票结果及开票信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 子商户号
| fapiao_apply_id {data-required data-indent=1} | string | 发票申请单号
| buyer_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 购买方信息
| type {data-required data-indent=2} | string | 购买方类型<br/>`INDIVIDUAL` \| `ORGANIZATION` 枚举值之一
| name {data-required data-indent=2} | string | 名称
| taxpayer_id {data-indent=2} | string | 纳税人识别号
| address {data-indent=2} | string | 地址
| telephone {data-indent=2} | string | 电话
| bank_name {data-indent=2} | string | 开户银行
| bank_account {data-indent=2} | string | 银行账号
| phone {data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 手机号
| email {data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 邮箱地址
| amount {data-indent=2} | integer | 订单金额
| out_trade_no {data-indent=2} | string | 商户订单号
| fapiao_bill_type {data-indent=2} | string | 开具的发票类型<br/>`COMM_FAPIAO` \| `VAT_FAPIAO` 枚举值之一
| user_apply_message {data-indent=2} | string | 留言信息
| fapiao_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 需要开具的数电发票信息
| fapiao_id {data-required data-indent=2} | string | 商户发票单号
| total_amount {data-required data-indent=2} | integer | 总价税合计
| items {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 发票行信息
| tax_code {data-required data-indent=3} | string | 税局侧规定的货物或应税劳务、服务税收分类编码
| goods_name {data-required data-indent=3} | string | 货物或应税劳务、服务名称
| specification {data-indent=3} | string | 规格型号
| unit {data-indent=3} | string | 单位
| quantity {data-indent=3} | integer | 数量
| total_amount {data-required data-indent=3} | integer | 单行金额合计
| tax_rate {data-required data-indent=3} | number | 税率
| discount {data-required data-indent=3} | boolean | 是否折扣行
| preferential_policy_code {data-indent=3} | integer | 优惠政策标识<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` \| `18` 枚举值之一
| export_business_policy_code {data-indent=2} | integer | 出口业务适用政策代码<br/>`1` \| `2` \| `3` 枚举值之一
| vat_refund_levy_code {data-indent=2} | integer | 增值税即征即退代码<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` 枚举值之一
| billing_person_id {data-required data-indent=2} | string | 开票人ID
| billing_person {data-indent=2} | string | 开票人名称
| fapiao_bill_type {data-required data-indent=2} | string | 发票类型<br/>`COMM_FAPIAO` \| `VAT_FAPIAO` 枚举值之一
| transaction_information {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 交易信息
| pay_channel {data-required data-indent=3} | string | 支付渠道<br/>`WECHAT_PAY` 枚举值
| transaction_id {data-required data-indent=3} | string | 支付订单号
| out_trade_no {data-indent=3} | string | 支付商户订单号
| amount {data-required data-indent=3} | integer | 交易金额
| remark {data-indent=2} | string | 发票备注
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->fapiaoApplications->issueGeneral->postAsync([
  'json' => [
    'sub_mchid'          => '1900000109',
    'fapiao_apply_id'    => '4200000444201910177461284488',
    'buyer_information'  => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_information' => [
      'fapiao_id'                   => '20200701123456',
      'total_amount'                => 382895,
      'items'                       => [[
        'tax_code'                 => '3010101020203000000',
        'goods_name'               => '出租汽车客运服务',
        'specification'            => 'A4',
        'unit'                     => '次',
        'quantity'                 => 100000000,
        'total_amount'             => 429900,
        'tax_rate'                 => 1300,
        'discount'                 => true,
        'preferential_policy_code' => 1,
      ],],
      'export_business_policy_code' => 1,
      'vat_refund_levy_code'        => 1,
      'billing_person_id'           => '128279891283',
      'billing_person'              => 'example_billing_person',
      'fapiao_bill_type'            => 'COMM_FAPIAO',
      'transaction_information'     => [[
        'pay_channel'    => 'WECHAT_PAY',
        'transaction_id' => '4200000008202508080512076713',
        'out_trade_no'   => 'order_20200701_123456',
        'amount'         => 382895,
      ],],
      'remark'                      => '备注',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 202);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/fapiao-applications/issue-general')->postAsync([
  'json' => [
    'sub_mchid'          => '1900000109',
    'fapiao_apply_id'    => '4200000444201910177461284488',
    'buyer_information'  => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_information' => [
      'fapiao_id'                   => '20200701123456',
      'total_amount'                => 382895,
      'items'                       => [[
        'tax_code'                 => '3010101020203000000',
        'goods_name'               => '出租汽车客运服务',
        'specification'            => 'A4',
        'unit'                     => '次',
        'quantity'                 => 100000000,
        'total_amount'             => 429900,
        'tax_rate'                 => 1300,
        'discount'                 => true,
        'preferential_policy_code' => 1,
      ],],
      'export_business_policy_code' => 1,
      'vat_refund_levy_code'        => 1,
      'billing_person_id'           => '128279891283',
      'billing_person'              => 'example_billing_person',
      'fapiao_bill_type'            => 'COMM_FAPIAO',
      'transaction_information'     => [[
        'pay_channel'    => 'WECHAT_PAY',
        'transaction_id' => '4200000008202508080512076713',
        'out_trade_no'   => 'order_20200701_123456',
        'amount'         => 382895,
      ],],
      'remark'                      => '备注',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 202);
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/fapiao-applications/issue-general']->postAsync([
  'json' => [
    'sub_mchid'          => '1900000109',
    'fapiao_apply_id'    => '4200000444201910177461284488',
    'buyer_information'  => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_information' => [
      'fapiao_id'                   => '20200701123456',
      'total_amount'                => 382895,
      'items'                       => [[
        'tax_code'                 => '3010101020203000000',
        'goods_name'               => '出租汽车客运服务',
        'specification'            => 'A4',
        'unit'                     => '次',
        'quantity'                 => 100000000,
        'total_amount'             => 429900,
        'tax_rate'                 => 1300,
        'discount'                 => true,
        'preferential_policy_code' => 1,
      ],],
      'export_business_policy_code' => 1,
      'vat_refund_levy_code'        => 1,
      'billing_person_id'           => '128279891283',
      'billing_person'              => 'example_billing_person',
      'fapiao_bill_type'            => 'COMM_FAPIAO',
      'transaction_information'     => [[
        'pay_channel'    => 'WECHAT_PAY',
        'transaction_id' => '4200000008202508080512076713',
        'out_trade_no'   => 'order_20200701_123456',
        'amount'         => 382895,
      ],],
      'remark'                      => '备注',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 202);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->fapiaoApplications->issueGeneral->post([
  'json' => [
    'sub_mchid'          => '1900000109',
    'fapiao_apply_id'    => '4200000444201910177461284488',
    'buyer_information'  => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_information' => [
      'fapiao_id'                   => '20200701123456',
      'total_amount'                => 382895,
      'items'                       => [[
        'tax_code'                 => '3010101020203000000',
        'goods_name'               => '出租汽车客运服务',
        'specification'            => 'A4',
        'unit'                     => '次',
        'quantity'                 => 100000000,
        'total_amount'             => 429900,
        'tax_rate'                 => 1300,
        'discount'                 => true,
        'preferential_policy_code' => 1,
      ],],
      'export_business_policy_code' => 1,
      'vat_refund_levy_code'        => 1,
      'billing_person_id'           => '128279891283',
      'billing_person'              => 'example_billing_person',
      'fapiao_bill_type'            => 'COMM_FAPIAO',
      'transaction_information'     => [[
        'pay_channel'    => 'WECHAT_PAY',
        'transaction_id' => '4200000008202508080512076713',
        'out_trade_no'   => 'order_20200701_123456',
        'amount'         => 382895,
      ],],
      'remark'                      => '备注',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/fapiao-applications/issue-general')->post([
  'json' => [
    'sub_mchid'          => '1900000109',
    'fapiao_apply_id'    => '4200000444201910177461284488',
    'buyer_information'  => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_information' => [
      'fapiao_id'                   => '20200701123456',
      'total_amount'                => 382895,
      'items'                       => [[
        'tax_code'                 => '3010101020203000000',
        'goods_name'               => '出租汽车客运服务',
        'specification'            => 'A4',
        'unit'                     => '次',
        'quantity'                 => 100000000,
        'total_amount'             => 429900,
        'tax_rate'                 => 1300,
        'discount'                 => true,
        'preferential_policy_code' => 1,
      ],],
      'export_business_policy_code' => 1,
      'vat_refund_levy_code'        => 1,
      'billing_person_id'           => '128279891283',
      'billing_person'              => 'example_billing_person',
      'fapiao_bill_type'            => 'COMM_FAPIAO',
      'transaction_information'     => [[
        'pay_channel'    => 'WECHAT_PAY',
        'transaction_id' => '4200000008202508080512076713',
        'out_trade_no'   => 'order_20200701_123456',
        'amount'         => 382895,
      ],],
      'remark'                      => '备注',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/fapiao-applications/issue-general']->post([
  'json' => [
    'sub_mchid'          => '1900000109',
    'fapiao_apply_id'    => '4200000444201910177461284488',
    'buyer_information'  => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email'              => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_information' => [
      'fapiao_id'                   => '20200701123456',
      'total_amount'                => 382895,
      'items'                       => [[
        'tax_code'                 => '3010101020203000000',
        'goods_name'               => '出租汽车客运服务',
        'specification'            => 'A4',
        'unit'                     => '次',
        'quantity'                 => 100000000,
        'total_amount'             => 429900,
        'tax_rate'                 => 1300,
        'discount'                 => true,
        'preferential_policy_code' => 1,
      ],],
      'export_business_policy_code' => 1,
      'vat_refund_levy_code'        => 1,
      'billing_person_id'           => '128279891283',
      'billing_person'              => 'example_billing_person',
      'fapiao_bill_type'            => 'COMM_FAPIAO',
      'transaction_information'     => [[
        'pay_channel'    => 'WECHAT_PAY',
        'transaction_id' => '4200000008202508080512076713',
        'out_trade_no'   => 'order_20200701_123456',
        'amount'         => 382895,
      ],],
      'remark'                      => '备注',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 202);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015792574)
