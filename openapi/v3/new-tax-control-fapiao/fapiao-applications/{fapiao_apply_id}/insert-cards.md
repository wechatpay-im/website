---
title: 将电子发票插入微信用户卡包
description: 商户自行开具电子发票后，可调用本接口将电子发票插入微信用户的卡包。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| fapiao_apply_id {data-required} | string | 发票申请单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| scene {data-required data-indent=1} | string | 插卡场景<br/>`WITH_WECHATPAY` \| `WITHOUT_WECHATPAY` 枚举值之一
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
| fapiao_card_information {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 电子发票卡券信息列表
| fapiao_media_id {data-required data-indent=2} | string | 电子发票文件ID
| fapiao_number {data-required data-indent=2} | string | 发票号码
| fapiao_code {data-required data-indent=2} | string | 发票代码
| fapiao_time {data-required data-indent=2} | string | 开票时间
| check_code {data-required data-indent=2} | string | 校验码
| password {data-required data-indent=2} | string | 密码
| total_amount {data-required data-indent=2} | integer | 总价税合计
| tax_amount {data-required data-indent=2} | integer | 总税额
| amount {data-required data-indent=2} | integer | 总金额
| seller_information {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 销售方信息
| name {data-required data-indent=3} | string | 名称
| taxpayer_id {data-required data-indent=3} | string | 纳税人识别号
| address {data-required data-indent=3} | string | 地址
| telephone {data-indent=3} | string | 电话
| bank_name {data-indent=3} | string | 开户银行
| bank_account {data-indent=3} | string | 银行账号
| extra_information {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 附加信息
| payee {data-indent=3} | string | 收款人
| reviewer {data-indent=3} | string | 复核人
| drawer {data-required data-indent=3} | string | 开票人
| items {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 发票行信息
| tax_code {data-required data-indent=3} | string | 货物或应税劳务、服务编码
| goods_name {data-required data-indent=3} | string | 货物或应税劳务、服务名称
| specification {data-indent=3} | string | 规格型号
| unit {data-indent=3} | string | 单位
| quantity {data-required data-indent=3} | integer | 数量
| unit_price {data-required data-indent=3} | integer | 单价
| amount {data-required data-indent=3} | integer | 单行金额
| tax_amount {data-required data-indent=3} | integer | 单行税额
| total_amount {data-required data-indent=3} | integer | 单行金额合计
| tax_rate {data-required data-indent=3} | integer | 税率
| tax_prefer_mark {data-required data-indent=3} | string | 税收优惠政策标识<br/>`NO_FAVORABLE` \| `OUTSIDE_VAT` \| `VAT_EXEMPT` \| `NORMAL_ZERO_RATED` \| `EXPORT_ZERO_RATED` 枚举值之一
| discount {data-required data-indent=3} | boolean | 是否折扣行
| remark {data-indent=2} | string | 备注信息
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->fapiaoApplications->_fapiao_apply_id_->insertCards->postAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid'               => '1900000109',
    'scene'                   => 'WITH_WECHATPAY',
    'buyer_information'       => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => '18507550000',
      'email'              => '123110@qq.com',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id'    => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number'      => '12897794',
      'fapiao_code'        => '044001911211',
      'fapiao_time'        => '2020-07-01T12:00:00+08:00',
      'check_code'         => '69001808340631374774',
      'password'           => '006>299-375/326>2+7/*0-+<3510',
      'total_amount'       => 382895,
      'tax_amount'         => 44050,
      'amount'             => 338845,
      'seller_information' => [
        'name'         => '深圳市南山区测试公司',
        'taxpayer_id'  => '202003261233701778',
        'address'      => '深圳市南山区深南大道10000号',
        'telephone'    => '075512345678',
        'bank_name'    => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information'  => [
        'payee'    => '张三',
        'reviewer' => '李四',
        'drawer'   => '王五',
      ],
      'items'              => [[
        'tax_code'        => '3010101020203000000',
        'goods_name'      => '出租汽车客运服务',
        'specification'   => 'A4',
        'unit'            => '次',
        'quantity'        => 100000000,
        'unit_price'      => 380442000000,
        'amount'          => 380442,
        'tax_amount'      => 49458,
        'total_amount'    => 429900,
        'tax_rate'        => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount'        => true,
      ],],
      'remark'             => '备注',
    ],],
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
$instance->chain('v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/insert-cards')->postAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid'               => '1900000109',
    'scene'                   => 'WITH_WECHATPAY',
    'buyer_information'       => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => '18507550000',
      'email'              => '123110@qq.com',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id'    => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number'      => '12897794',
      'fapiao_code'        => '044001911211',
      'fapiao_time'        => '2020-07-01T12:00:00+08:00',
      'check_code'         => '69001808340631374774',
      'password'           => '006>299-375/326>2+7/*0-+<3510',
      'total_amount'       => 382895,
      'tax_amount'         => 44050,
      'amount'             => 338845,
      'seller_information' => [
        'name'         => '深圳市南山区测试公司',
        'taxpayer_id'  => '202003261233701778',
        'address'      => '深圳市南山区深南大道10000号',
        'telephone'    => '075512345678',
        'bank_name'    => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information'  => [
        'payee'    => '张三',
        'reviewer' => '李四',
        'drawer'   => '王五',
      ],
      'items'              => [[
        'tax_code'        => '3010101020203000000',
        'goods_name'      => '出租汽车客运服务',
        'specification'   => 'A4',
        'unit'            => '次',
        'quantity'        => 100000000,
        'unit_price'      => 380442000000,
        'amount'          => 380442,
        'tax_amount'      => 49458,
        'total_amount'    => 429900,
        'tax_rate'        => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount'        => true,
      ],],
      'remark'             => '备注',
    ],],
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
$instance['v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/insert-cards']->postAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid'               => '1900000109',
    'scene'                   => 'WITH_WECHATPAY',
    'buyer_information'       => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => '18507550000',
      'email'              => '123110@qq.com',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id'    => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number'      => '12897794',
      'fapiao_code'        => '044001911211',
      'fapiao_time'        => '2020-07-01T12:00:00+08:00',
      'check_code'         => '69001808340631374774',
      'password'           => '006>299-375/326>2+7/*0-+<3510',
      'total_amount'       => 382895,
      'tax_amount'         => 44050,
      'amount'             => 338845,
      'seller_information' => [
        'name'         => '深圳市南山区测试公司',
        'taxpayer_id'  => '202003261233701778',
        'address'      => '深圳市南山区深南大道10000号',
        'telephone'    => '075512345678',
        'bank_name'    => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information'  => [
        'payee'    => '张三',
        'reviewer' => '李四',
        'drawer'   => '王五',
      ],
      'items'              => [[
        'tax_code'        => '3010101020203000000',
        'goods_name'      => '出租汽车客运服务',
        'specification'   => 'A4',
        'unit'            => '次',
        'quantity'        => 100000000,
        'unit_price'      => 380442000000,
        'amount'          => 380442,
        'tax_amount'      => 49458,
        'total_amount'    => 429900,
        'tax_rate'        => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount'        => true,
      ],],
      'remark'             => '备注',
    ],],
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
$response = $instance->v3->newTaxControlFapiao->fapiaoApplications->_fapiao_apply_id_->insertCards->post([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid'               => '1900000109',
    'scene'                   => 'WITH_WECHATPAY',
    'buyer_information'       => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => '18507550000',
      'email'              => '123110@qq.com',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id'    => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number'      => '12897794',
      'fapiao_code'        => '044001911211',
      'fapiao_time'        => '2020-07-01T12:00:00+08:00',
      'check_code'         => '69001808340631374774',
      'password'           => '006>299-375/326>2+7/*0-+<3510',
      'total_amount'       => 382895,
      'tax_amount'         => 44050,
      'amount'             => 338845,
      'seller_information' => [
        'name'         => '深圳市南山区测试公司',
        'taxpayer_id'  => '202003261233701778',
        'address'      => '深圳市南山区深南大道10000号',
        'telephone'    => '075512345678',
        'bank_name'    => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information'  => [
        'payee'    => '张三',
        'reviewer' => '李四',
        'drawer'   => '王五',
      ],
      'items'              => [[
        'tax_code'        => '3010101020203000000',
        'goods_name'      => '出租汽车客运服务',
        'specification'   => 'A4',
        'unit'            => '次',
        'quantity'        => 100000000,
        'unit_price'      => 380442000000,
        'amount'          => 380442,
        'tax_amount'      => 49458,
        'total_amount'    => 429900,
        'tax_rate'        => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount'        => true,
      ],],
      'remark'             => '备注',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/insert-cards')->post([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid'               => '1900000109',
    'scene'                   => 'WITH_WECHATPAY',
    'buyer_information'       => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => '18507550000',
      'email'              => '123110@qq.com',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id'    => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number'      => '12897794',
      'fapiao_code'        => '044001911211',
      'fapiao_time'        => '2020-07-01T12:00:00+08:00',
      'check_code'         => '69001808340631374774',
      'password'           => '006>299-375/326>2+7/*0-+<3510',
      'total_amount'       => 382895,
      'tax_amount'         => 44050,
      'amount'             => 338845,
      'seller_information' => [
        'name'         => '深圳市南山区测试公司',
        'taxpayer_id'  => '202003261233701778',
        'address'      => '深圳市南山区深南大道10000号',
        'telephone'    => '075512345678',
        'bank_name'    => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information'  => [
        'payee'    => '张三',
        'reviewer' => '李四',
        'drawer'   => '王五',
      ],
      'items'              => [[
        'tax_code'        => '3010101020203000000',
        'goods_name'      => '出租汽车客运服务',
        'specification'   => 'A4',
        'unit'            => '次',
        'quantity'        => 100000000,
        'unit_price'      => 380442000000,
        'amount'          => 380442,
        'tax_amount'      => 49458,
        'total_amount'    => 429900,
        'tax_rate'        => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount'        => true,
      ],],
      'remark'             => '备注',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/insert-cards']->post([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid'               => '1900000109',
    'scene'                   => 'WITH_WECHATPAY',
    'buyer_information'       => [
      'type'               => 'ORGANIZATION',
      'name'               => '深圳市南山区测试企业',
      'taxpayer_id'        => '202003261233701778',
      'address'            => '深圳市南山区深南大道10000号',
      'telephone'          => '075512345678',
      'bank_name'          => '测试银行',
      'bank_account'       => '62001234567890',
      'phone'              => '18507550000',
      'email'              => '123110@qq.com',
      'amount'             => 1000,
      'out_trade_no'       => 'order_20200701_123456',
      'fapiao_bill_type'   => 'COMM_FAPIAO',
      'user_apply_message' => '用户留言',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id'    => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number'      => '12897794',
      'fapiao_code'        => '044001911211',
      'fapiao_time'        => '2020-07-01T12:00:00+08:00',
      'check_code'         => '69001808340631374774',
      'password'           => '006>299-375/326>2+7/*0-+<3510',
      'total_amount'       => 382895,
      'tax_amount'         => 44050,
      'amount'             => 338845,
      'seller_information' => [
        'name'         => '深圳市南山区测试公司',
        'taxpayer_id'  => '202003261233701778',
        'address'      => '深圳市南山区深南大道10000号',
        'telephone'    => '075512345678',
        'bank_name'    => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information'  => [
        'payee'    => '张三',
        'reviewer' => '李四',
        'drawer'   => '王五',
      ],
      'items'              => [[
        'tax_code'        => '3010101020203000000',
        'goods_name'      => '出租汽车客运服务',
        'specification'   => 'A4',
        'unit'            => '次',
        'quantity'        => 100000000,
        'unit_price'      => 380442000000,
        'amount'          => 380442,
        'tax_amount'      => 49458,
        'total_amount'    => 429900,
        'tax_rate'        => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount'        => true,
      ],],
      'remark'             => '备注',
    ],],
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012538365) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012474078) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015792579)
