---
title: 将出租车电子发票插入微信用户卡包
description: 服务商开具出租车电子发票后，调用本接口将发票插入微信用户的卡包。调用本接口需要发票文件ID，可调用【上传出租车电子发票文件】来获取。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| company_mchid {data-indent=1} | string | 出租车经营主体商户号
| trade_number {data-indent=1} | string | 面对面付款单号
| appid {data-indent=1} | string | 应用ID
| openid {data-indent=1} | string | 用户标识
| region_id {data-indent=1} | integer | 行政区划代码
| driver_license {data-indent=1} | string | 营运资格证号
| plate_number {data-indent=1} | string | 车牌号
| fapiao_card_information {data-indent=1} | object | 发票卡券信息
| fapiao_media_id {data-indent=2} | string | 电子发票文件ID
| fapiao_number {data-indent=2} | string | 发票号码
| fapiao_code {data-indent=2} | string | 发票代码
| fapiao_time {data-indent=2} | string | 开票时间
| check_code {data-indent=2} | string | 校验码
| password {data-indent=2} | string | 密码
| total_amount {data-indent=2} | integer | 总价税合计
| tax_amount {data-indent=2} | integer | 总税额
| amount {data-indent=2} | integer | 总金额
| buyer_information {data-indent=2} | object | 购买方信息
| type {data-indent=3} | string | 购买方类型
| name {data-indent=3} | string | 名称
| taxpayer_id {data-indent=3} | string | 纳税人识别号
| address {data-indent=3} | string | 地址
| telephone {data-indent=3} | string | 电话
| bank_name {data-indent=3} | string | 开户银行
| bank_account {data-indent=3} | string | 银行账号
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

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->cards->postAsync([
  'json' => [
    'company_mchid' => '1900000109',
    'trade_number' => '10001071012021110600437180176110',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'oUypO5aQ1oOCaSiNZUpT5kxxJHuc',
    'region_id' => 310100,
    'driver_license' => '6298416',
    'plate_number' => '浙AD12345',
    'fapiao_card_information' => [
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'buyer_information' => [
        'type' => 'CORPORATION',
        'name' => '深圳市南山区测试企业',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
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
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/taxi-invoice/cards')->postAsync([
  'json' => [
    'company_mchid' => '1900000109',
    'trade_number' => '10001071012021110600437180176110',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'oUypO5aQ1oOCaSiNZUpT5kxxJHuc',
    'region_id' => 310100,
    'driver_license' => '6298416',
    'plate_number' => '浙AD12345',
    'fapiao_card_information' => [
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'buyer_information' => [
        'type' => 'CORPORATION',
        'name' => '深圳市南山区测试企业',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
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
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/taxi-invoice/cards']->postAsync([
  'json' => [
    'company_mchid' => '1900000109',
    'trade_number' => '10001071012021110600437180176110',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'oUypO5aQ1oOCaSiNZUpT5kxxJHuc',
    'region_id' => 310100,
    'driver_license' => '6298416',
    'plate_number' => '浙AD12345',
    'fapiao_card_information' => [
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'buyer_information' => [
        'type' => 'CORPORATION',
        'name' => '深圳市南山区测试企业',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
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
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->taxiInvoice->cards->post([
  'json' => [
    'company_mchid' => '1900000109',
    'trade_number' => '10001071012021110600437180176110',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'oUypO5aQ1oOCaSiNZUpT5kxxJHuc',
    'region_id' => 310100,
    'driver_license' => '6298416',
    'plate_number' => '浙AD12345',
    'fapiao_card_information' => [
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'buyer_information' => [
        'type' => 'CORPORATION',
        'name' => '深圳市南山区测试企业',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
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
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/cards')->post([
  'json' => [
    'company_mchid' => '1900000109',
    'trade_number' => '10001071012021110600437180176110',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'oUypO5aQ1oOCaSiNZUpT5kxxJHuc',
    'region_id' => 310100,
    'driver_license' => '6298416',
    'plate_number' => '浙AD12345',
    'fapiao_card_information' => [
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'buyer_information' => [
        'type' => 'CORPORATION',
        'name' => '深圳市南山区测试企业',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
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
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/cards']->post([
  'json' => [
    'company_mchid' => '1900000109',
    'trade_number' => '10001071012021110600437180176110',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'oUypO5aQ1oOCaSiNZUpT5kxxJHuc',
    'region_id' => 310100,
    'driver_license' => '6298416',
    'plate_number' => '浙AD12345',
    'fapiao_card_information' => [
      'fapiao_media_id' => 'ASNFZ4mrze/+3LqYdlQyEA==',
      'fapiao_number' => '12897794',
      'fapiao_code' => '044001911211',
      'fapiao_time' => '2020-07-01T12:00:00+08:00',
      'check_code' => '69001808340631374774',
      'password' => '006>299-375/326>2+7/*0-+<351059<80<4*/5>+<11631+*3030/5*37+/-243159658+013>3409*044>4-/1+/9->*>69501*6++1997--21',
      'total_amount' => 382895,
      'tax_amount' => 44050,
      'amount' => 338845,
      'buyer_information' => [
        'type' => 'CORPORATION',
        'name' => '深圳市南山区测试企业',
        'taxpayer_id' => '202003261233701778',
        'address' => '深圳市南山区深南大道10000号',
        'telephone' => '075512345678',
        'bank_name' => '测试银行',
        'bank_account' => '62001234567890',
      ],
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
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_appid | string | 插入用户卡包的公众号AppID
| card_openid | string | 用户在插卡公众号下的OpenID
| card_id | string | 出租车电子发票卡券模板ID
| card_code | string | 出租车电子发票在卡包中的编码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-invoice-card/create-taxi-invoice-card.html)
