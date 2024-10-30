---
title: 开具电子发票
description: 商户完成收款后，调用本接口开具电子发票并插入微信用户的卡包。若是非微信支付场景，需要先通过【获取抬头填写链接】接口获取抬头填写链接，并等待用户完成填写才能调用本接口；若是微信支付场景，则无需额外获取抬头填写链接。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| scene {data-indent=1} | string | 开票场景
| fapiao_apply_id {data-indent=1} | string | 发票申请单号
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
| fapiao_information {data-indent=1} | object[] | 需要开具的发票信息
| fapiao_id {data-indent=2} | string | 商户发票单号
| total_amount {data-indent=2} | integer | 总价税合计
| need_list {data-indent=2} | boolean | 是否以清单形式开具发票
| remark {data-indent=2} | string | 发票备注
| items {data-indent=2} | object[] | 发票行信息
| tax_code {data-indent=3} | string | 税局侧规定的货物或应税劳务、服务税收分类编码
| goods_category {data-indent=3} | string | 税局侧规定的货物或应税劳务、服务分类名称
| goods_name {data-indent=3} | string | 货物或应税劳务、服务名称
| goods_id {data-indent=3} | number | 企业侧维护的货物或应税劳务、服务编码
| specification {data-indent=3} | string | 规格型号
| unit {data-indent=3} | string | 单位
| quantity {data-indent=3} | integer | 数量
| total_amount {data-indent=3} | integer | 单行金额合计
| tax_rate {data-indent=3} | number | 税率
| tax_prefer_mark {data-indent=3} | string | 税收优惠政策标识
| discount {data-indent=3} | boolean | 是否折扣行
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->fapiaoApplications->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
    ],
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'total_amount' => 382895,
      'need_list' => true,
      'remark' => '备注',
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_category' => '运输服务',
        'goods_name' => '出租汽车客运服务',
        'goods_id' => 1,
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
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
$instance->chain('v3/new-tax-control-fapiao/fapiao-applications')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
    ],
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'total_amount' => 382895,
      'need_list' => true,
      'remark' => '备注',
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_category' => '运输服务',
        'goods_name' => '出租汽车客运服务',
        'goods_id' => 1,
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
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
$instance['v3/new-tax-control-fapiao/fapiao-applications']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
    ],
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'total_amount' => 382895,
      'need_list' => true,
      'remark' => '备注',
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_category' => '运输服务',
        'goods_name' => '出租汽车客运服务',
        'goods_id' => 1,
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
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
$response = $instance->v3->newTaxControlFapiao->fapiaoApplications->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
    ],
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'total_amount' => 382895,
      'need_list' => true,
      'remark' => '备注',
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_category' => '运输服务',
        'goods_name' => '出租汽车客运服务',
        'goods_id' => 1,
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/fapiao-applications')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
    ],
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'total_amount' => 382895,
      'need_list' => true,
      'remark' => '备注',
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_category' => '运输服务',
        'goods_name' => '出租汽车客运服务',
        'goods_id' => 1,
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/fapiao-applications']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
    'buyer_information' => [
      'type' => 'ORGANIZATION',
      'name' => '深圳市南山区测试企业',
      'taxpayer_id' => '202003261233701778',
      'address' => '深圳市南山区深南大道10000号',
      'telephone' => '075512345678',
      'bank_name' => '测试银行',
      'bank_account' => '62001234567890',
      'phone' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
      'email' => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPttdY+aQ6zB',
    ],
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'total_amount' => 382895,
      'need_list' => true,
      'remark' => '备注',
      'items' => [[
        'tax_code' => '3010101020203000000',
        'goods_category' => '运输服务',
        'goods_name' => '出租汽车客运服务',
        'goods_id' => 1,
        'specification' => 'A4',
        'unit' => '次',
        'quantity' => 100000000,
        'total_amount' => 429900,
        'tax_rate' => 1300,
        'tax_prefer_mark' => 'NO_FAVORABLE',
        'discount' => true,
      ],],
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter4_8_8.shtml)
