---
title: 将电子发票插入微信用户卡包
description: 商户自行开具电子发票后，可调用本接口将电子发票插入微信用户的卡包。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| fapiao_apply_id | string | 发票申请单号
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| scene {data-indent=1} | string | 插卡场景
| buyer_information {data-indent=1} | object | 购买方信息
| type {data-indent=2} | string | 购买方类型
| name {data-indent=2} | string | 名称
| taxpayer_id {data-indent=2} | string | 纳税人识别号
| address {data-indent=2} | string | 地址
| telephone {data-indent=2} | string | 电话
| bank_name {data-indent=2} | string | 开户银行
| bank_account {data-indent=2} | string | 银行账号
| phone {data-indent=2} | string | 手机号
| email {data-indent=2} | string | 邮箱地址
| fapiao_card_information {data-indent=1} | object[] | 电子发票卡券信息列表
| fapiao_media_id {data-indent=2} | string | 电子发票文件ID
| fapiao_number {data-indent=2} | string | 发票号码
| fapiao_code {data-indent=2} | string | 发票代码
| fapiao_time {data-indent=2} | string | 开票时间
| check_code {data-indent=2} | string | 校验码
| password {data-indent=2} | string | 密码
| total_amount {data-indent=2} | integer | 总价税合计
| tax_amount {data-indent=2} | integer | 总税额
| amount {data-indent=2} | integer | 总金额
| seller_information {data-indent=2} | object | 销售方信息
| name {data-indent=3} | string | 名称
| taxpayer_id {data-indent=3} | string | 纳税人识别号
| address {data-indent=3} | string | 地址
| telephone {data-indent=3} | string | 电话
| bank_name {data-indent=3} | string | 开户银行
| bank_account {data-indent=3} | string | 银行账号
| extra_information {data-indent=2} | object | 附加信息
| payee {data-indent=3} | string | 收款人
| reviewer {data-indent=3} | string | 复核人
| drawer {data-indent=3} | string | 开票人
| items {data-indent=2} | object[] | 发票行信息
| tax_code {data-indent=3} | string | 货物或应税劳务、服务编码
| goods_name {data-indent=3} | string | 货物或应税劳务、服务名称
| specification {data-indent=3} | string | 规格型号
| unit {data-indent=3} | string | 单位
| quantity {data-indent=3} | integer | 数量
| unit_price {data-indent=3} | integer | 单价
| amount {data-indent=3} | integer | 单行金额
| tax_amount {data-indent=3} | integer | 单行税额
| total_amount {data-indent=3} | integer | 单行金额合计
| tax_rate {data-indent=3} | integer | 税率
| tax_prefer_mark {data-indent=3} | string | 税收优惠政策标识
| discount {data-indent=3} | boolean | 是否折扣行
| remark {data-indent=2} | string | 备注信息
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->fapiaoApplications->_fapiao_apply_id_->insertCards->postAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => '18507550000',
      'email' => '123110@qq.com',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'seller_information' => [
        'name' => '深圳市南山区测试公司',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information' => [
        'payee' => '张三',
        'reviewer' => '李四',
        'drawer' => '王五',
      ],
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_name' => '出租汽车客运服务',
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'unit_price' => 380442000000,
        'amount' => 380442,
        'tax_amount' => 49458,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
      'remark' => '备注',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
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
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => '18507550000',
      'email' => '123110@qq.com',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'seller_information' => [
        'name' => '深圳市南山区测试公司',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information' => [
        'payee' => '张三',
        'reviewer' => '李四',
        'drawer' => '王五',
      ],
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_name' => '出租汽车客运服务',
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'unit_price' => 380442000000,
        'amount' => 380442,
        'tax_amount' => 49458,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
      'remark' => '备注',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
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
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => '18507550000',
      'email' => '123110@qq.com',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'seller_information' => [
        'name' => '深圳市南山区测试公司',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information' => [
        'payee' => '张三',
        'reviewer' => '李四',
        'drawer' => '王五',
      ],
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_name' => '出租汽车客运服务',
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'unit_price' => 380442000000,
        'amount' => 380442,
        'tax_amount' => 49458,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
      'remark' => '备注',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
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
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => '18507550000',
      'email' => '123110@qq.com',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'seller_information' => [
        'name' => '深圳市南山区测试公司',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information' => [
        'payee' => '张三',
        'reviewer' => '李四',
        'drawer' => '王五',
      ],
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_name' => '出租汽车客运服务',
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'unit_price' => 380442000000,
        'amount' => 380442,
        'tax_amount' => 49458,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
      'remark' => '备注',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/insert-cards')->post([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => '18507550000',
      'email' => '123110@qq.com',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'seller_information' => [
        'name' => '深圳市南山区测试公司',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information' => [
        'payee' => '张三',
        'reviewer' => '李四',
        'drawer' => '王五',
      ],
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_name' => '出租汽车客运服务',
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'unit_price' => 380442000000,
        'amount' => 380442,
        'tax_amount' => 49458,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
      'remark' => '备注',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/insert-cards']->post([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => '18507550000',
      'email' => '123110@qq.com',
    ],
    'fapiao_card_information' => [[
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'seller_information' => [
        'name' => '深圳市南山区测试公司',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
      'extra_information' => [
        'payee' => '张三',
        'reviewer' => '李四',
        'drawer' => '王五',
      ],
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_name' => '出租汽车客运服务',
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'unit_price' => 380442000000,
        'amount' => 380442,
        'tax_amount' => 49458,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
      'remark' => '备注',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r($response->getStatusCode() === 202);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_11.shtml)